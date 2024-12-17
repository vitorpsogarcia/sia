export function Location() {
  return (
    <div className="w-full flex flex-col col-span-2">
      <h4 className="text-2xl font-bold w-full pb-6">Conheça o IFPR - Campus Paranavaí</h4>
      <iframe
        title="Localização do Campus"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.169110595475!2d-52.4543259!3d-23.0542609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949296a233a74981%3A0x8aed8519780a4c71!2sIFPR%20-%20Instituto%20Federal%20do%20Paran%C3%A1%20-%20Campus%20Paranava%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1734392670643!5m2!1spt-BR!2sbr"
        className="border-2 border-brand/80 w-full h-96 rounded-xl"
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}