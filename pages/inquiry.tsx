import Layout from "../components/layout";
import type { NextPage } from "next";

const Inquiry: NextPage = () => {
  return (
    <Layout title="画像関連" description="画像関連のこと。">
      <div className="stack-large">
        <h1>お問合せ</h1>
        <section>
          <p>問合せフォームが入ります。</p>
        </section>
      </div>
    </Layout>
  );
};

export default Inquiry;
