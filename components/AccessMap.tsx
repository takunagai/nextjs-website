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
          (運営：地域活動支援センター necoris)
        </b>
        <br />
        〒669-1142 西宮市名塩山荘8-10
      </p>
      <div className="iframe-wrapper iframe-wrapper--golden-ratio alignfull mt-6 md:container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3275.146335594916!2d135.29066905754377!3d34.82741307410644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ab02690f3a3%3A0x355008903425457!2z44CSNjY5LTExNDIg5YW15bqr55yM6KW_5a6u5biC5ZCN5aGp5bGx6I2Y77yY4oiS77yR77yQ!5e0!3m2!1sja!2sjp!4v1667532277511!5m2!1sja!2sjp"
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
