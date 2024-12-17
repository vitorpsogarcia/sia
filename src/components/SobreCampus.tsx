export function SobreCampus() {
  return (
    <section id="sobre-campus">
      <h3 className="text-xl md:text-2xl font-bold w-full pb-6">Sobre o Campus</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 pl-2">
        <p className="md:text-lg text-justify h-full flex items-center">
          O Instituto Federal do Paraná (IFPR) é uma instituição pública federal de ensino vinculada ao Ministério 
          da Educação (MEC) por meio da Secretaria de Educação Profissional e Tecnológica (Setec). É voltada à 
          educação superior, básica e profissional, especializada na oferta gratuita de educação profissional e 
          tecnológica nas diferentes modalidades e níveis de ensino.
          <br /><br />
          Criado em 2008, o IFPR - Campus Paranavaí busca não apenas capacitar os seus estudantes para o mercado, 
          mas também desenvolver o pensamento crítico.
          <br />
          Formamos cidadãos comprometidos com a sustentabilidade e o desenvolvimento local e regional.
        </p>
        <img title="Campus" src="/images/campus.png" className="md:h-72 lg:h-96 rounded-xl object-cover place-self-center xl:place-self-auto" />
      </div>
    </section>
  )
}