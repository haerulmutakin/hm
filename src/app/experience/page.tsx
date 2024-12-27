import ExperienceCard from "@/components/ExperienceCard"
import experience from "@/lib/experience.constant"

const Experience = () => {
  return (
    <main>
      <h1 className="page-title">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((ex, index) => (
          <ExperienceCard key={index} item={ex} />
        ))}
      </div>
    </main>
  )
}

export default Experience