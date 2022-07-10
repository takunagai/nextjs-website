---
title: 'Tailwind CSS で stretch-link を実装'
date: '2022-07-10'
tag: 'tailwind'
---

# Tailwind CSS で stretch-link を実装

## やりたいこと

Bootstrap の [.stretched-link](https://getbootstrap.com/docs/5.2/helpers/stretched-link/) のように、a 要素のリンク領域を親要素まで広げるのを、Tailwind CSS で実装する。

## デモ

* このサイトの制作実績

## 実装方法

Tailwind の疑似要素クラスを使うと簡単。
リンク領域としたい親要素に `relative` を、リンク要素に `after:absolute after:inset-0` を指定。
サンプルでは、画像にマウスオーバーした時に視覚変化を生じさせるために透明度を設定した。

```ConponentName.tsx
<div className="relative hover:opacity-95">
  <Image src="画像パス.jpg" width={600} height={400} alt="代替テキスト" />
  <p>
    <a href="#" className="after:absolute after:inset-0">リンクテキスト</a>
  </p>
</div>
```

## 注意

* 元々 `position: relative` が設定された要素を含むコンポーネントでは注意が必要

## 参照

* [Stretch links for better UX #html #css #tailwindcss - YouTube](https://www.youtube.com/watch?v=vTij7lmrCsw)
* [Getting buttons to stretch full screen with Tailwind - Stack Overflow](https://stackoverflow.com/questions/60865677/getting-buttons-to-stretch-full-screen-with-tailwind)
* [クリック可能な範囲を広げるスタイルシートのテクニック - コリス](https://coliss.com/articles/build-websites/operation/css/stretched-link-clickable.html)