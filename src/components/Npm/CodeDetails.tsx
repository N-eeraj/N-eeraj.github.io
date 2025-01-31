import Install from "@components/Npm/Install"
import GithubFeats from "@components/Github/Feats"
import Languages from "@components/Github/Languages"
import ChipLink from "@components/Base/ChipLink"
import Keywords from "@components/Npm/Keywords"
import NpmDetails from "@components/Npm/Details"
import { NpmCodeDetails } from "@customTypes/npm"

async function CodeDetails({ npmPackage, packageData, githubRepo }: NpmCodeDetails) {
  const githubRepoDetails = await githubRepo.getDetails()

  return (
    <aside className="sticky top-0 md:row-span-2 h-fit p-1 md:p-2 space-y-4">
      <Install package={npmPackage.name} />

      <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-2">
        <ChipLink
          href={npmPackage.url}
          icon="logos:npm"
          iconSize={18}>
          {npmPackage.name}
        </ChipLink>

        <ChipLink
          href={githubRepo.url}
          icon="mdi:github">
          {githubRepoDetails.full_name}
        </ChipLink>
      </div>

      <hr />
      <GithubFeats {...githubRepoDetails} />
      <hr />
      <Languages github={githubRepo} />
      <hr />
      <Keywords keywords={packageData.keywords} />
      <hr />
      <NpmDetails
        package={npmPackage}
        {...packageData} />
    </aside>
  )
}

export default CodeDetails
