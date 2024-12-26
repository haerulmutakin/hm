import AppButton from "@/components/ui/button/AppButton";
import Image from "next/image";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
          <div className="flex gap-5">
            <FaYoutube size={24} />
            <FaGithub size={24} />
            <FaLinkedin size={24} />
            <FaInstagram  size={24}/>
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
