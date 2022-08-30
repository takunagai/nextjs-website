import { useState } from "react"
import { useRouter } from "next/router"

const ContactForm = () => {
  const router = useRouter()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&")
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => {
        alert("メールを送信しました。")
        setFormState({
          name: "",
          email: "",
          message: "",
        })
        router.push("inquiry-send")
      }) // then(() =>
      // navigate("/thank-you/")).
      .catch((error) => alert(error))
  }

  return (
    <form
      data-netlify="true"
      name="contactForm"
      method="post"
      onSubmit={handleSubmit}
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactForm" />
      <br />

      <label htmlFor="name">名前</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={formState.name}
        placeholder="名前を入力してください。"
      />
      <br />

      <label htmlFor="email">メールアドレス</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChange}
        value={formState.email}
        placeholder="メールアドレスを入力してください。"
      />
      <br />

      <label htmlFor="message">メッセージ</label>
      <textarea
        id="message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        placeholder="メッセージを入力してください。"
      />

      <input type="submit" value="送信する" />
    </form>
  )
}

export default ContactForm
