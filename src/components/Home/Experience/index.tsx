import ExperienceItem from "@components/Home/Experience/Item"
import { EXPERIENCE } from "@constants/home"

function Experience() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Experience
      </h3>
      <ul className="space-y-2">
        {EXPERIENCE.map((experience) => (
          <ExperienceItem
            key={experience.duration}
            {...experience} />
        ))}
      </ul>
    </section>
  )
}

export default Experience
