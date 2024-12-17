import { Contato } from "@/components/Contato";
import { Location } from "@/components/Location";
import { Projetos } from "@/components/Projetos";
import { SobrePraticas } from "@/components/Sobre";
import { SobreCampus } from "@/components/SobreCampus";

export function Home() {
  return (
    <div className="pt-7 md:pt-14 flex flex-col w-full items-center">
      <div className="w-5/6 px-8 md:px-16 pb-10 border-2 flex flex-col gap-14 bg-white rounded-xl">
        <SobrePraticas />
        <SobreCampus />
        <Projetos />
        <Location />
        <Contato />
      </div>
    </div>
  )
}