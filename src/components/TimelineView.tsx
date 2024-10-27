import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const timelineEvents = [
  {
    title: 'Startet hos Gravstellerne',
    date: 'September 2023',
    description: 'Fullstack utvikler',
    icon: <FaBriefcase />,
  },
  {
    title: 'Begynte hos Elkjøp',
    date: 'Januar 2023',
    description: 'Service Advisor',
    icon: <FaCalendarAlt />,
  },
  // Add more events here
];

const TimelineView = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Tidslinje</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-primary"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
              >
                {/* Dot Indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-primary rounded-full"></div>

                {/* Event Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg max-w-md relative hover:bg-primary hover:text-white transition-colors duration-300">
                  {/* Icon */}
                  <div className="absolute -left-12 top-2 text-primary text-2xl">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineView;