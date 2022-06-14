// ★★TODO: 参考：https://github.com/vercel/next-learn/tree/master/basics/typescript-final
// ★★TODO: 参考：https://zenn.dev/ifhito/articles/7d345bb8d03024
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// type AllPostsData = {
//     id: string,
//     title: string,
//     date: string
// }

export function getSortedPostsData() {
    // /posts 下のファイル名を取得
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // ID 取得：ファイル名から .md を削除
        const id = fileName.replace(/\.md$/, '')

        // Markdown ファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // gray-matter で投稿メタデータセクションを解析
        // {
        //   content: '\nコンテンツが入る',
        //   data: {
        //     title: 'Two Forms of Pre-rendering',
        //     date: '2020-01-01'
        //   }
        // }
        const matterResult = matter(fileContents)

        // データを ID と組み合わせる
        // {
        //   id: 'pre-rendering',
        //   title: 'Two Forms of Pre-rendering',
        //   date: '2020-01-01'
        // }
        return {
            id,
            ...(matterResult.data as { date: string, title: string }),
        }
    })
    // 投稿を日付降順でソート
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}
