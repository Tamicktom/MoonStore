//* Libraries imports
import { FacebookLogo, WhatsappLogo, InstagramLogo, TiktokLogo } from "phosphor-react";


export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center w-full gap-5 px-4 py-6 rounded-t-lg bg-b-700">

      <FooterSection>
        <p className="text-xl text-white ">Siga-nos</p>
        <div className="flex flex-row items-start gap-4">
          <a href="#">
            <FacebookLogo size={32} color="white" opacity={0.8} />
          </a>
          <a href="#">
            <WhatsappLogo size={32} color="white" opacity={0.8} />
          </a>
          <a href="#">
            <InstagramLogo size={32} color="white" opacity={0.8} />
          </a>
          <a href="#">
            <TiktokLogo size={32} color="white" opacity={0.8} />
          </a>
        </div>
      </FooterSection>

      <FooterSection>
        <p className="text-base leading-5 text-white text-opacity-90">
          Contato
        </p>
        <div className="flex flex-col items-start gap-[2px]">
          <p>Sobre nós</p>
          <p>Nossos serviços</p>
          <p>Politicas de privacidade</p>
        </div>
      </FooterSection>

    </footer>
  );
}

const FooterSection = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      {children}
    </div>
  );
};