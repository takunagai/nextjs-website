---
title: 'next-pagination でページネーションを実装する(今回は側だけ)'
date: '2022-07-09'
---

# next-pagination でページネーションを実装する(今回は側だけ)

Next.js で、ブログ記事のページネーションを実装する方法の前編。
今回は、[etchteam/next-pagination](https://github.com/etchteam/next-pagination) を使う([デモ](https://etchteam.github.io/next-pagination/))

## next-pagination の特徴

* アクセシブル。セマンティック、かつ、適切な aria ロールでマークアップされた HTML
* 使いやすい。ベースの CSSスタイルは、キーボードのフォーカス状態とファットフィンガータッチターゲットを考慮
* レスポンシブ。すべてのデバイスで動作
* テーマ可能。好きにスタイリングできる
* 自己完結型。開始に必要な prop はひとつのみ。残りのロジックは自動的で処理
* Next.js で動作。 Next.js router と統合

## インストール

`npm install --save @etchteam/next-pagination`

## 使用方法

* 表示するページ数の計算に、結果の総数を渡す
* 今回、スタイリングは CSS modules で行う。styles/Pagination.module.css を作成しインポートし、コンポーネントの prop として `theme={styles}` を渡す。CSS コードは、[リポジトリの SCSS](https://github.com/etchteam/next-pagination/blob/master/src/index.module.scss) をベースとして編集する。Sass を使ってないプロジェクトなら、[変換ツール](https://www.sassmeister.com/))で CSS に変換して編集すれば良い。

```ComponentName.tsx
import Link from "next/link"
// 元 import Pagination from "@etchteam/next-pagination"
import styles from "../styles/Pagination.module.css";
import "@etchteam/next-pagination/dist/index.css"

const ComponentName = () => {
  return (
    <Pagination
      total={1000}
      perPageText="表示件数"
      setPageSizeText="表示件数を設定"
      theme={styles}
      // sizes={[5, 10, 25, 150]}
    />
  }
}

export default ComponentName
```