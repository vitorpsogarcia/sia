import { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function Projetos() {

  const images = useMemo(() => {
    return [
      "/images/projetos/4.jpeg",
      "/images/projetos/2.jpeg",
      "/images/projetos/5.jpeg",
      "/images/projetos/3.jpeg",
      "/images/projetos/6.jpeg",
      "/images/projetos/7.jpeg",
      "/images/projetos/10.jpg",
      "/images/projetos/12.jpeg",
      "/images/projetos/13.jpeg",
      "/images/projetos/14.jpeg",
      "/images/projetos/8.jpg",
      "/images/projetos/9.jpg",
      "/images/projetos/11.jpg",
    ]
  }, [])
  return (
    <section id="projetos">
      <h3 className="text-xl md:text-2xl font-bold w-full pb-10">Projeto</h3>
      <p className="md:text-lg text-justify h-full flex flex-col gap-4">
          <span className="font-semibold">
            Prática de Extensão para o Público de Melhor Idade da Comunidade do Instituto Maurício Gehlen
          </span>

          Este projeto de extensão busca conscientizar a população idosa sobre práticas de segurança on-line
          através da extensão universitária, com foco na conscientização e transformação social deste público.
          Abordando golpes comuns em plataformas digitais, como o Facebook, o WhatsApp e o Instagram.
          <br /> <br />
          Ao final de cada dia do curso, foram coletadas as opiniões dos participantes por meio de uma conversa simples e direta.
          Todos os participantes responderam positivamente e agradeceram pela dedicação ao tema, considerando a relevância e as repercussões nos últimos anos.
          Embora o público presente nos dois dias de curso não tenha relatado terem sido vítimas de golpes, afirmaram que, com as conversas,
          aprenderam novas informações, que os ajudariam a identificar possíveis situações de risco e compartilhar o conhecimento adquirido com seus familiares.
          <br /> <br />
          Apesar do número reduzido de inscritos, os dados coletados apontam que o projeto teve sucesso no que se propôs.
          Uma vez tenha sido possível sanar as dúvidas e apresentar de maneira compreensível os diferentes tipos de golpes,
          incentivando também que as pessoas da melhor idade compartilhem entre si o conhecimento adquirido durante o curso.
        </p>
        <Carousel className="pt-10" opts={{
          loop: true,
        }}>
          <CarouselContent className=" max-h-96">
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <img src={image} alt="Projeto 1" className="w-full h-full object-cover rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-10 h-10 bg-brand hover:bg-hover-brand" variant="default" />
          <CarouselNext className="bg-brand hover:bg-hover-brand" variant="default" />
        </Carousel>

    </section>
  )
}