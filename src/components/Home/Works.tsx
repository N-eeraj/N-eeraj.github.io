import Link from "next/link"

function Works() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Works
      </h3>
      <ul className="text-primary">
        <li>
          <Link href="https://github.com/N-eeraj/pokemon-black-crystal">
            Pokémon Black Crystal
          </Link>
        </li>
        <li>
          <Link href="https://github.com/N-eeraj/instagram-clone">
            Instagram Clone
          </Link>
        </li>
        <li>
          <Link href="https://github.com/N-eeraj/pexels-vault">
            Pexels Vault
          </Link>
        </li>
        <li>
          <Link href="https://ezacorporate.com/">
            EZA
          </Link>
        </li>
        <li>
          <Link href="https://github.com/N-eeraj/nuxt-packages">
            Nuxt Packages
          </Link>
        </li>
        <li>
          <Link href="https://fuwad-design.netlify.app/">
            Designer Portfolio
          </Link>
        </li>
        <li>
          <Link href="https://github.com/N-eeraj/tftf">
            TFTF
          </Link>
        </li>
        <li>
          <Link href="https://github.com/N-eeraj/budgetify">
            Budgetify
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Works
