import { FaMapMarkedAlt } from "react-icons/fa"

const AccessMap = () => {
  return (
    <>
      <h2 id="access-map">
        <FaMapMarkedAlt className="mr-2 inline align-baseline text-secondary-300" />
        アクセス
      </h2>
      <p className="mt-8 text-center">
        <b>
          兵庫ひきこもり相談支援センター 阪神ブランチ
          <br />
          <small>(運営：一般社団法人いきがいさがし)</small>
        </b>
      </p>
      <p className="mt-2 text-center">〒669-1142 西宮市名塩山荘 8-10</p>
      <div className="iframe-wrapper iframe-wrapper--golden-ratio alignfull mt-6 md:container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.7924197404266!2d135.29086782925708!3d34.82682609966379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008bfd043682c7%3A0x62c20beddc891c5d!2z5Zyw5Z-f5rS75YuV5pSv5o-044K744Oz44K_44O8bmVjb3Jpcw!5e0!3m2!1sja!2sjp!4v1667955809062!5m2!1sja!2sjp"
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
