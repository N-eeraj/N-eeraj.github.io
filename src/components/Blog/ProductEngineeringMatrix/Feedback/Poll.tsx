import request from "@utils/request"
import { WEBSITE } from "@constants/enVariables"

async function Poll() {
  const data = await request(`${WEBSITE}/api/blog/product-engineering-matrix`, { cache: "no-store" })

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Poll
