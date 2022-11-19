/**
 * page/test-form.tsx
 * フォームのテスト
 *
 * getStaticProps の型付け
 * @ref https://blog.webcreativepark.net/2022/01/21-140314.html
 * @ref https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type
 * @ref https://nextjs.org/docs/api-reference/data-fetching/get-static-props
 */
import { useState } from "react"
import { client } from "../lib/client"

/** - - - - - - - - - - - - - - - - - - -
 * 型定義
 */
// フォーム用
import type { SetStateAction, ChangeEvent } from "react"

// Next.js
import type {
  GetStaticProps,
  // GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next"

// microCMS - group
import type { Group } from "../types/group"
type Groups = { groups: Array<Group> }

/** - - - - - - - - - - - - - - - - - - -
 * 変数
 */
// ラジオボタンの選択肢
const cities = [
  "全表示",
  "尼崎市",
  "西宮市",
  "芦屋市",
  "伊丹市",
  "宝塚市",
  "川西市",
  "三田市",
  "川辺郡猪名川町",
  "オンライン",
]

// API から取得するデータ件数
const getDataLimitNum = 50

/** - - - - - - - - - - - - - - - - - - -
 * Main Component
 */
// 引数の型(ジェネリクス) Infer... は、getStaticProps から推論された型を取得
const TestForm: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  groups,
) => {
  const [selectedCity, setSelectedCity] = useState("全表示")
  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(e.target.value)
  }

  // テスト
  console.log("selectedCity: " + selectedCity)

  return (
    <>
      <RadioButtonsForFiltering
        name="city"
        value={cities}
        state={selectedCity}
        onChange={handleChangeCity}
      />
      <GroupList groups={groups} selectedCity={selectedCity} />
    </>
  )
}

export default TestForm

/** - - - - - - - - - - - - - - - - - - -
 * ラジオボタンエリア
 * @ref https://zenn.dev/ignorant_kenji/articles/11097ee4a90c06485b98
 */
type TagRadioProps = {
  name: string
  value: Array<string>
  state: SetStateAction<string>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TagRadioContainer = (props: TagRadioProps) => {
  const { name, value, state, onChange } = props
  return (
    <>
      {value.map((item, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={item}
            checked={item === state}
            onChange={onChange}
          />
          {item}
        </label>
      ))}
    </>
  )
}

const RadioButtonsForFiltering = (props: TagRadioProps) => {
  const { name, value, state, onChange } = props

  return (
    // <form onChange={(e) => onChange(e.子要素.value)}>
    <form>
      <TagRadioContainer
        name={name}
        value={value}
        state={state}
        onChange={onChange}
      />
    </form>
  )
}

/** - - - - - - - - - - - - - - - - - - -
 * 居場所&グループのリスト
 */
const GroupList = (groups: Groups, selectedCity: string) => {
  // フィルター関数
  const extractCategoryMatches = (group: Group) => {
    return group.city[0] === "川西市" // selectedCity
  }

  // テスト
  console.log("selectedCity: " + selectedCity)
  console.log(groups.filter(extractCategoryMatches)) // 該当する件数の配列

  return (
    <ul>
      {groups
        .filter(extractCategoryMatches)
        .map((group: Group, index: number) => (
          <li key={index}>
            <h2>{group.title}</h2>
            <p>{group.city.join(", ")}</p>
          </li>
        ))}
    </ul>
  )
}

/** - - - - - - - - - - - - - - - - - - -
 * getStaticProps (from microCMS API)
 */
export const getStaticProps: GetStaticProps<{
  groups: Groups
}> = async () =>
  // context: GetStaticPropsContext,
  {
    // const data = await client.get<Groups>({
    const data = await client.get<Groups>({
      endpoint: "group",
      queries: {
        limit: getDataLimitNum,
      },
    })

    return {
      props: {
        groups: data.contents,
      },
    }
  }
