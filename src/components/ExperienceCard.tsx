import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"
import { PiDotOutline } from "react-icons/pi"

type Experience = {
  time: string,
  role: string,
  type: string,
  company: string,
  place: string,
  website: string
}

const ExperienceCard = ({item}: {item: Experience}) => {
  return (
    <div className="bg-[#363636] py-3 px-2 rounded-md">
      <div className="flex items-center text-gray-300 justify-between">
        <span>{item.time}</span>
        <span>{item.type}</span>
      </div>
      <div className="text-[20px] my-1">{item.role}</div>
      <div className="flex items-center text-gray-300 ">
        <PiDotOutline size={24} />
        <span>{item.place}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-300 ">
          <PiDotOutline size={24} />
          <span>{item.company}</span>
        </div>
        <Link href={item.website} target="_blank">
          <GoArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  )
}

export default ExperienceCard