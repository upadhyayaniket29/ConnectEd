import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">About Us</h2>

      <p className="text-lg leading-relaxed mb-6 text-center">
        <span className="font-semibold">ConnectEd</span> is an EdTech platform built to empower students, developers, and tech enthusiasts by providing access to curated resources, learning paths, real-world projects, and a supportive community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">🚀 Our Mission</h3>
          <p className="text-gray-700">
            To bridge the gap between education and industry by equipping learners with modern tech skills, hands-on experience, and mentorship.
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">🎯 Our Vision</h3>
          <p className="text-gray-700">
            To become the go-to learning and collaboration platform for students across the globe who aim to grow, build, and innovate.
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">👨‍💻 What We Offer</h3>
          <p className="text-gray-700">
            Access to resources, team collaborations, technical events, project showcases, and career guidance tailored to each learner’s growth journey.
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">🌐 Our Community</h3>
          <p className="text-gray-700">
            We foster a vibrant, inclusive tech community where learners from different backgrounds collaborate, inspire, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
