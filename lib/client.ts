/**
 * microcms-js-sdkの初期化
 * @ref https://document.microcms.io/tutorial/next/next-getting-started
 */
import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: process.env.SERVICE!, // TS に undefined の可能性があるように見えても、そうではないことを信頼できることを伝える
  apiKey: process.env.APIKEY!,
})
