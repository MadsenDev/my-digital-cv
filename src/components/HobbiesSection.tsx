import { hobbies } from '@/data/hobbies';

const HobbiesSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Hobbier & Interesser</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col items-center transition-colors duration-300 transform hover:scale-105"
              >
                <IconComponent className="text-primary text-4xl mb-3 transition-colors duration-300 group-hover:text-white" />
                <span className="text-lg font-semibold">{hobby.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;