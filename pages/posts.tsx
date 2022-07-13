import Link from "next/link";
import Pagination from "@etchteam/next-pagination";
import styles from "../styles/Pagination.module.css";
import Layout from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { motion } from "framer-motion";

import type { NextPage } from "next";

type Props = {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Posts: NextPage<Props> = ({ allPostsData }: Props) => {
  return (
    <Layout
      title="ブログ (Markdown)"
      description="Markdown で書いた記事を読み込んで表示する"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <h1>ブログ (Markdown)</h1>
          <p>Markdown で書いた記事を読み込んで表示する</p>
          <ul className="stack-small mt-10">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {/*{id}*/}
                <h2 className="text-xl">
                  <Link href={`/posts/${id}`}>{title}</Link>
                </h2>
                <p className="text-xs">
                  <Date dateString={date} />
                </p>
              </li>
            ))}
          </ul>
          <hr className="my-10 opacity-20" />
          <Pagination
            total={1000}
            perPageText="表示件数"
            setPageSizeText="表示件数を設定"
            theme={styles}
            // sizes={[5, 10, 25, 150]}
          />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Posts;
