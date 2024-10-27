import { FaLanguage, FaCode } from 'react-icons/fa'; // For icons

import { languages } from '@/data/languages';

const LanguagesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Språk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              {language.type === 'spoken' ? (
                <FaLanguage className="text-primary text-4xl mb-4" />
              ) : (
                <FaCode className="text-primary text-4xl mb-4" />
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">{language.name}</h3>
              <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-blue-600 rounded-full"
                  style={{ width: `${language.proficiency}%` }}
                ></div>
              </div>
              <p className="text-gray-500">{language.level} ({language.proficiency}%)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;