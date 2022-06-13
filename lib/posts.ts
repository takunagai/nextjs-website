import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

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
        const matterResult = matter(fileContents)

        // データを ID と組み合わせる
        return {
            id,
            ...matterResult.data,
        }
    })
    // 投稿を日付で並べ替える
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
