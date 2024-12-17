import { Globe } from "lucide-react";
import { SocialMedia } from "./ui/social-media";

export function Contato() {
  return (
    <section id="contato">
      <h3 className="text-2xl font-bold w-full pb-10">Contato</h3>
      <div className="grid md:grid-cols-2 px-4">
        <p>
          <span className="font-semibold">Coordenadora de Pesquisa e Extensão</span>
          <br />
          Vanessa Guimarães Alves Olher
          <br />
          <a className="text-brand hover:text-hover-brand" href="mailto:copex.paranavai@ifpr.edu.br">copex.paranavai@ifpr.edu.br</a>
          {' '}|
          <a className="text-brand hover:text-hover-brand" href="mailto: vanessa.olher@ifpr.edu.br"> vanessa.olher@ifpr.edu.br</a>
          <br />(44) 3482-0109
        </p>
        <div className="flex gap-4 pt-4 w-full flex-row-reverse justify-between md:justify-normal">
          <SocialMedia
            link="https://www.facebook.com/ifprparanavai/?locale=pt_BR"
            icon={<svg className="scale-150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="14.906" height="32" viewBox="0 0 14.906 32"><path d="M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z"/></svg>}
            className="bg-blue-700 rounded-lg hover:bg-blue-800 fill-white"
          />
          <SocialMedia
            link="https://www.instagram.com/ifpr_pvai/"
            icon={<img src="icons/instagram.svg" alt="Instagram" className="w-6 h-6 scale-150 fill-white" />}
            className="bg-pink-600 rounded-lg hover:bg-pink-700 fill-white"
          />
          <SocialMedia
            link="https://ifpr.edu.br/paranavai/"
            icon={<Globe className="scale-150" />}
            className="bg-brand rounded-lg hover:bg-hover-brand fill-white"
          />
        </div>
      </div>
    </section>
  )
}