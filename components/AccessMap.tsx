import { FaMapMarkedAlt } from "react-icons/fa"

const AccessMap = () => {
  return (
    <>
      <h2 id="access-map">
        <FaMapMarkedAlt className="mr-2 inline align-baseline text-secondary-300" />
        アクセス
      </h2>
      <p className="mt-8 text-center leading-5">
        <b>
          兵庫ひきこもり相談支援センター 阪神ブランチ
          <br />
          <small>(運営：一般社団法人いきがいさがし)</small>
        </b>
      </p>
      <p className="mt-3 text-center leading-5">
        〒669-1134 西宮市名塩新町3-2
        <br />
        <small>(JR西宮名塩駅から徒歩30秒)</small>
      </p>
      <div className="iframe-wrapper iframe-wrapper--golden-ratio alignfull mt-6 md:container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.7917694393141!2d135.3082351140503!3d34.826891507988776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f548097a2ce1%3A0x9106435756e99ac8!2z44CSNjY5LTExMzQg5YW15bqr55yM6KW_5a6u5biC5ZCN5aGp5paw55S677yT4oiS77yS!5e0!3m2!1sja!2sjp!4v1699574900221!5m2!1sja!2sjphttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1637.5835388786281!2d135.30768794341174!3d34.826891507988776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f548097a2ce1%3A0x9106435756e99ac8!2z44CSNjY5LTExMzQg5YW15bqr55yM6KW_5a6u5biC5ZCN5aGp5paw55S677yT4oiS77yS!5e0!3m2!1sja!2sjp!4v1699575084862!5m2!1sja!2sjp"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}

export default AccessMap
