import { use } from "react"
import { WEBSITE } from "@constants/enVariables"

async function fetchData() {
  const res = await fetch(`${WEBSITE}/api/blog/product-engineering-matrix`)
  return await res.json()
}

function Poll() {
  const data = use(fetchData())

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Poll
