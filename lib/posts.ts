// ★★TODO: 参考：https://github.com/vercel/next-learn/tree/master/basics/typescript-final
// ★★TODO: 参考：https://zenn.dev/ifhito/articles/7d345bb8d03024
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")

// type AllPostsData = {
//     id: string,
//     title: string,
//     date: string
// }

/**
 * 日付降順でソートしたブログ記事のデータセットを返す
 * posts.tsx が使用
 */
export function getSortedPostsData() {
  // /posts 下のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // ID 取得：ファイル名から .md を削除
    const id = fileName.replace(/\.md$/, "")

    // Markdown ファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // gray-matter で投稿メタデータセクションを解析
    // {
    //   content: '\nコンテンツが入る',
    //   data: {
    //     title: 'Two Forms of Pre-rendering',
    //     date: '2020-01-01'
    //   }
    // }
    const matterResult = matter(fileContents)

    // ID とデータを組み合わせる
    // {
    //   id: 'pre-rendering',
    //   title: 'Two Forms of Pre-rendering',
    //   date: '2020-01-01'
    // }
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    }
  })
  // 投稿を日付降順でソート
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

/**
 * posts ディレクトリにあるファイルのファイル名のリストを取得
 * [id].tsx が使用
 *
 * getStaticPaths に必要なこと
 *   - 返されるリストは、オブジェクトの配列でなければならない
 *   - params キーが必要で、id キーを持つオブジェクトが含まれている必要がある（ファイル名の [id] 用）
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // 以下のような配列を返す
  // [
  //   { params: { id: 'ssg-ssr'} },
  //   { params: { id: 'pre-rendering'} }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

/**
 * 指定 ID で投稿をレンダリングするために必要なデータをフェッチ
 * [id].tsx が使用
 */
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // gray-matter で、Markdown のフロントマター(投稿メタデータセクション)を解析
  // 上の getSortedPostsData と同じ形のオブジェクトデータが返る
  const matterResult = matter(fileContents)

  // remark で Markdown を HTML 文字列に変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString() // 文字型への変換が必要

  // ID とデータを組み合わせる
  // 上の getSortedPostsData と同じ形のオブジェクトデータ
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
