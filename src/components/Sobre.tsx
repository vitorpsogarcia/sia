export function SobrePraticas() {
  return (
    <section id="sobre">
      <h3 className="text-xl md:text-2xl font-bold w-full pb-6 mt-4 md:mt-14">O que são?</h3>

        <p className="md:text-lg text-justify h-full flex flex-col gap-4">
          As atividades de extensão são processos educativos, políticos, científicos, culturais, sociais e tecnológicos 
          que promovem de forma indissociável ao ensino e à pesquisa, a interação entre o Instituto Federal de 
          Educação, Ciência e Tecnologia do Paraná (IFPR) e a sociedade.

          <span className="font-semibold pt-4">Objetivos:</span>
        </p>
        <ul className="list-disc pl-2 md:pl-6 space-y-2 grid md:grid-cols-2 gap-x-20">
            <li>Integrar o ensino e a pesquisa aprendidos dentro das instituições com as necessidades da comunidade externa presente;</li>
            <li>Instituir-se como um espaço para troca de conhecimentos e experiências entre diferentes sujeitos;</li>
            <li>Tornar o estudante protagonista, colaborando em sua formação de forma técnica e cidadã;</li>
            <li>Estimular nos sujeitos a consciência artística, ambiental, política, cultural e social;</li>
            <li>Apoiar o desenvolvimento regional de forma sustentável;</li>
            <li>Oportunizar o acesso á educação, por meio de políticas e mecanismos de inclusão.</li>
          </ul>
    </section>
  )
}