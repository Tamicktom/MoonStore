//* Libraries imports
import { FacebookLogo, WhatsappLogo, InstagramLogo, TiktokLogo } from "phosphor-react";


export const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-center w-full gap-5 px-4 py-6 rounded-t-lg bg-b-700 lg:flex-row lg:items-center lg:px-32 lg:gap-20 lg:pb-20 lg:pt-8">

      <div className="flex flex-col items-start justify-start gap-2 w-full max-w-[250px] lg:self-stretch">
        <p className="text-xl text-white">Siga-nos</p>
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
      </div>

      <FooterSection title="Contato">
        <Anchor href="#">Sobre nós</Anchor>
        <Anchor href="#">Nossos serviços</Anchor>
        <Anchor href="#">Politicas de privacidade</Anchor>
      </FooterSection>

      <FooterSection title="Endereço">
        <p className="text-xs leading-4 text-white opacity-75">
          CEP 29312-122<br />
          Rua Godofredo Adiverci, 9081<br />
          Bairro Monte Cristo<br />
          Cachoeiro de Itapemirim/ES
        </p>
      </FooterSection>

      <FooterSection title="Ajuda">
        <Anchor href="#">FAQ</Anchor>
        <Anchor href="#">Entrega</Anchor>
        <Anchor href="#">Devolução</Anchor>
        <Anchor href="#">Acompanhar entrega</Anchor>
        <Anchor href="#">Opções de pagamento</Anchor>
      </FooterSection>
    </footer>
  );
}

const FooterSection = ({ children, title }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-2 max-w-[250px] lg:self-stretch">
      <p className="text-base leading-5 text-white text-opacity-90">
        {title}
      </p>
      <div className="flex flex-col items-start gap-[2px]">
        {children}
      </div>
    </div>
  );
};

const Anchor = ({ children, href }) => {
  return (
    <a href={href}>
      <p className="text-xs leading-4 text-white opacity-75">
        {children}
      </p>
    </a>
  );
};