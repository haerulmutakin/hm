import AppButton from "@/components/ui/button/AppButton";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb"

const socials = [
  {
    icon: <FaYoutube />,
    path: ''
  },
  {
    icon: <TbBrandGithubFilled />,
    path: ''
  },
  {
    icon: <FaLinkedinIn />,
    path: ''
  },
  {
    icon: <FaInstagram />,
    path: ''
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center md:flex-row-reverse md:items-center mt-3 md:mt-8">
      <div className="text-center md:text-left mt-5">
        <h2 className="h2">Hi There, I am</h2>
        <h1 className="h1 mb-3">Haerul Mutakin</h1>
        <p>Frontend developer, code enthusiast</p>
        <p>Always open and ready to adapt to any changes</p>
        <p>Have the ability to transform client needs into technology</p>
        <div className="mt-5 mb-2 flex flex-col md:flex-row gap-5 items-center justify-center md:justify-start">
          <AppButton label="Download CV" />
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <div 
                key={index}
                className="border border-primary text-primary hover:bg-primary hover:text-background hover:transition-all duration-600 rounded-full p-2 cursor-pointer"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mix-blend-lighten">
        <Image
          src='/image.png'
          alt="image"
          priority
          quality={100}
          width={300}
          height={250}
          className="object-contain"
        />
      </div>
    </main>
  );
}
