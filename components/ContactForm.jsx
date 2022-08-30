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

      <label
        htmlFor="name"
        className="mb-2 block text-sm font-medium text-primary"
      >
        名前
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="名前を入力してください。"
        onChange={handleChange}
        value={formState.name}
        className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <br />

      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-primary"
      >
        メールアドレス
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="メールアドレスを入力してください。"
        onChange={handleChange}
        value={formState.email}
        className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <p className="mt-1 text-sm text-gray-700">半角英数字で誤入力ください</p>
      <br />

      <label
        htmlFor="message"
        className="mb-2 block text-sm font-medium text-primary"
      >
        メッセージ
      </label>
      <textarea
        id="message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        placeholder="メッセージを入力してください。"
        className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500"
      />

      <p className="mt-6 text-center">
        <input className="btn btn-primary" type="submit" value="送信する" />
      </p>
    </form>
  )
}

export default ContactForm
