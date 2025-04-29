import { formatDistanceToNow } from "date-fns"
import type { NpmDetails } from "@customTypes/npmPackage"

async function NpmDetails({ package: npmPackage, ...packageData }: NpmDetails) {
  const weeklyDownloads = await npmPackage.getWeeklyDownloads()
  const lastPublish = formatDistanceToNow(new Date(packageData.time.modified), { addSuffix: true })

  return (
    <ul className="space-y-1.5">
      <li className="space-x-1.5">
        <strong>
          Version:
        </strong>
        <span>
          {packageData["dist-tags"].latest}
        </span>
      </li>

      <li className="space-x-1.5">
        <strong>
          Last Publish:
        </strong>
        <span>
          {lastPublish}
        </span>
      </li>

      {!!weeklyDownloads && (
        <li className="space-x-1.5">
          <strong>
            Weekly Downloads:
          </strong>
          <span>
            {weeklyDownloads}
          </span>
        </li>
      )}
    </ul>
  )
}

export default NpmDetails
