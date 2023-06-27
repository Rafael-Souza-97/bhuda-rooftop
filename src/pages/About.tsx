import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className=" bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="container md:px-4 py-2 ">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Sobre</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="text-center md:text-lg text-gray-700 leading-relaxed mb-4">
            Bem-vindo ao <span className='text-primary'>Bhuda Rooftop</span>!
          </p>
          <p className="text-justify md:text-lg text-gray-700 leading-relaxed">
            Localizado na cobertura de um prédio, oferecemos uma experiência
            única onde você pode desfrutar de vistas deslumbrantes do pôr do sol enquanto saboreia deliciosas refeições e 
            drinks especiais.
          </p>
          <p className="text-justify md:text-lg text-gray-700 leading-relaxed mt-4">
            Nosso espaço é perfeito para uma variedade de eventos, incluindo aniversários, confraternizações, casamentos
            e formaturas. Oferecemos uma atmosfera sofisticada e um ambiente descontraído para que você possa celebrar
            momentos especiais com estilo.
          </p>
          <p className="text-justify md:text-lg text-gray-700 leading-relaxed mt-4">
            Nosso cardápio vegetariano oferece opções saborosas e criativas para aqueles que apreciam uma culinária
            baseada em vegetais frescos e ingredientes de alta qualidade. Além disso, também oferecemos pratos com carnes,
            peixes e frango, atendendo a diversos gostos e preferências.
          </p>
          <p className="text-justify md:text-lg text-gray-700 leading-relaxed mt-4">
            Nossos bartenders experientes estão prontos para criar drinks exclusivos e oferecer uma ampla seleção de bebidas para complementar sua experiência gastronômica.
          </p>
          <p className="text-justify md:text-lg text-gray-700 leading-relaxed mt-4">
            Se você está procurando um espaço para eventos, nosso local é perfeito para sediar ocasiões especiais. 
            Oferecemos instalações modernas, uma equipe dedicada e um serviço impecável para garantir que seu evento seja
            um sucesso.
          </p>
          <p className="text-justify md:text-lg text-gray-700 leading-relaxed mt-4">
            Agradecemos sua visita e esperamos recebê-lo em breve no <span className='text-primary'>Bhuda Rooftop</span>. Para fazer uma 
            reserva ou obter mais informações sobre nossos serviços, entre em contato conosco pelo telefone <span className="font-barlow">(31) 99996-6507</span>.
          </p>

          <p className="text-md md:text-lg text-gray-700 mt-8">
            Este software foi desenvolvido por <a href="https://github.com/Rafael-Souza-97" target="_blank" rel="noreferrer"><span className="cursor-pointer font-medium text-black font-barlow">Rafael Souza</span></a>.
          </p>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
