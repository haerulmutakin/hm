import ExperienceCard from "@/components/ExperienceCard"
const experience =  [
  {
    time: 'Jul 2021 - Present',
    role: 'Senior Frontend Developer',
    type: 'Full time',
    company: 'Bangunindo Teknusa Jaya',
    place: 'Jakarta',
    website: 'https://www.linkedin.com/company/bangunindo'
  },
  {
    time: 'Dec 2020 - Feb 2021',
    role: 'Frontend Developer',
    type: 'Freelance',
    company: 'Axiata Digital Labs',
    place: 'Jakarta',
    website: 'https://www.linkedin.com/company/axiatadigitallabsatthelab/'
  },
  {
    time: 'Jul 2020 - Dec 2020',
    role: 'Frontend Developer',
    type: 'Freelance',
    company: 'Hilotech Karya Anak Indonesia',
    place: 'Tangerang',
    website: 'https://www.linkedin.com/company/pt-hilotech-karya-anak-indonesia/'
  },
  {
    time: 'Jun 2017 - Jan 2021',
    role: 'Frontend Developer & Mentor',
    type: 'Full time',
    company: 'Badan Sistem Informasi UII',
    place: 'Yogyakarta',
    website: 'https://www.linkedin.com/company/bsiuii/'
  }
]

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