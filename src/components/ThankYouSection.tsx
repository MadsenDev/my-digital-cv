import { FaEnvelope } from 'react-icons/fa';

const ThankYouSection = () => {
  return (
    <section className="py-16 bg-primary text-white relative">
      {/* Optional background pattern or image */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Takk for at du leste min CV!</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Jeg setter stor pris på at du tok deg tid til å bli kjent med min bakgrunn og erfaring. <br />
          Ta gjerne kontakt hvis du har noen spørsmål eller ønsker å diskutere et samarbeid.
        </p>

        {/* Contact button with icon */}
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:chris@madsens.dev"
            className="inline-flex items-center bg-white text-primary py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <FaEnvelope className="mr-2" /> Kontakt meg
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;