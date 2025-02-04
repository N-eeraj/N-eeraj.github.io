import Link from "next/link"

function NpmPackages() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Npm Packages
      </h3>
      <ul className="text-primary">
        <li>
          <Link href="/npm-packages/random">
            random
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default NpmPackages
