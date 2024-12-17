import { InfoIcon, MenuIcon, PhoneIcon, PresentationIcon, UniversityIcon } from "lucide-react";
import { Logo } from "./ui/logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMemo } from "react";

export function Header() {

  const menuItems = useMemo(() => {
    return [
      {
        title: 'O que são?',
        href: '#sobre',
        icon: <InfoIcon />,
      },
      {
        title: 'Projeto',
        href: '#projetos',
        icon: <PresentationIcon />
      },
      {
        title: 'Sobre o Campus',
        href: '#sobre-campus',
        icon: <UniversityIcon />,
      },
      {
        title: 'Contato',
        href: '#contato',
        icon: <PhoneIcon />,
      }
    ]
  }, [])

  return (
    <header className="flex px-3 w-full bg-brand font-bold text-white py-2 gap-3 pb-0 justify-center">
      <div className="w-full md:w-5/6">
        <div className="flex flex-row gap-3 items-center md:pb-6 py-2 pb-4">
          <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent side="left" className="flex flex-col justify-between bg-hover-brand text-white border-gray-400">
              <div className="flex flex-col gap-6 pt-10">
                {menuItems.map((item, index) => (
                  <span className="flex flex-row items-center gap-4 p-2 border-white/20 rounded-xl border-2 transition-colors hover:bg-white hover:text-black" key={index}>
                    {item.icon}
                    <a key={index} href={item.href} className="block p-2 transition-colors">{item.title}</a>
                  </span>
                ))}
              </div>
              <Logo size="large" className="block self-center md:hidden pb-6"/>
            </SheetContent>
          </Sheet>
          <Logo size="medium" className="hidden md:block"/>
          <h1 className="text-xl h-full md:text-2xl">Práticas de Extensão</h1>
        </div>
        <div className="hidden flex-row items-center font-medium pb-1 text-sm md:flex">
            <a
                className="p-2 px-4 rounded-sm hover:bg-white hover:text-black transition-colors"
                href="#sobre"
            >
                O que são?
            </a>
            <a
                className="p-2 px-4 rounded-sm hover:bg-white hover:text-black transition-colors"
                href="#projetos"
            >
                Projeto
            </a>
            <a
                className="p-2 px-4 rounded-sm hover:bg-white hover:text-black transition-colors"
                href="#sobre-campus"
            >
                Sobre o Campus
            </a>
            <a
                className="p-2 px-4 rounded-sm hover:bg-white hover:text-black transition-colors"
                href="#contato"
            >
                Contato
            </a>
        </div>
      </div>
    </header>
  )
}