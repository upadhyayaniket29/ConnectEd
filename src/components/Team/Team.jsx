import React from 'react';

const teamMembers = [
  {
    name: 'Marc Andression',
    role: 'Co-founder & Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Virat Kohli',
    role: 'Full-Stack Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Firoz Khan',
    role: 'Backend Intern',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Amily rose',
    role: 'Graphics Intern',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Yuki Nakamura',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Carlos Martínez',
    role: 'Frontend Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Zara Ali',
    role: 'Marketing Strategist',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Luca Moretti',
    role: 'AI Research Intern',
    image: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

