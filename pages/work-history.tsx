import Layout from "../components/layout";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const WorkHistory: NextPage = () => {
  return (
    <Layout title="作業記録、気づき" description="概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="mx-0 bg-zinc-500/10">
          <h1>作業記録、気づき</h1>
        </header>
        <div className="mt-5">
          <h2>作業記録</h2>
          <ul>
            <li>デフォルトで静的生成</li>
            <li>
              外部データの取得がある場合の静的生成
              <ul>
                <li>
                  ページのコンテンツが外部データに依存する場合、getStaticProps
                  (async 関数)
                  <ul>
                    <li>
                      ビルド時(<code>next build</code>)にデータ取得
                    </li>
                  </ul>
                </li>
                <li>
                  ISR
                  と組み合わせると、古いページが再検証されている間、getStaticPropsがバックグラウンドで実行。更新されていれば新しいページがブラウザーに提供される
                </li>
                <li>
                  getStaticPropsは着信要求（クエリパラメーターやHTTPヘッダーなど）にアクセスできない。ページリクエストにアクセスする必要がある場合は、getStaticProps
                  + ミドルウェアの使用を検討する
                </li>
                <li>
                  <p>
                    Next.js v12.1 以降は、[On-demand Revalidation
                    (Beta)](https://nextjs.
                  </p>
                  org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta)が使える
                </li>
                <li>
                  ページのパス(path)が外部データに依存する場合、getStaticPaths
                  <ul>
                    <li>データに基づきプリレンダリングする動的ルートを特定</li>
                    <li>
                      クライアント側では呼び出されないため、データベースクエリを直接実行することも可能
                    </li>
                    <li>HTML と JSONを生成し、CDN でキャッシュされる(高速)</li>
                    <li>
                      使うシーン
                      <ul>
                        <li>
                          ページをレンダリングするのに必要な外部データがある(先に読み込みが必要)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              process.cwd() を使って Next.js が実行されたディレクトリを取得
            </li>
          </ul>
        </div>
      </motion.div>
    </Layout>
  );
};

export default WorkHistory;
