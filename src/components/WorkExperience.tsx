import { FaBriefcase } from 'react-icons/fa';

type WorkExperienceProps = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

const WorkExperience = ({ title, company, duration, description }: WorkExperienceProps) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg md:max-w-sm lg:max-w-md mx-auto">
      <div className="flex items-center space-x-3 mb-3">
        <FaBriefcase className="text-primary" size={24} /> {/* Primary color for icon */}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-foreground text-sm mb-1">{company}</p> {/* Foreground color for text */}
      <p className="text-gray-500 text-sm italic mb-3">{duration}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default WorkExperience;