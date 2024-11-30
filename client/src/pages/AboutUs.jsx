import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-indigo-700 text-white py-16">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Empowering your fitness journey with personalized plans, progress tracking, and a supportive community to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To inspire and empower individuals to lead healthier lives by providing innovative tools and personalized fitness plans.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted fitness companion, helping millions worldwide achieve their wellness goals through technology and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon="🔥"
              title="Personalized Plans"
              description="Get workout and diet plans tailored to your fitness level and goals."
            />
            <Feature
              icon="📊"
              title="Progress Tracking"
              description="Track your workouts, monitor progress, and celebrate achievements."
            />
            <Feature
              icon="🤝"
              title="Community Support"
              description="Join a community of like-minded individuals to stay motivated."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Amit Sharma"
              role="Fitness Coach"
              image="https://via.placeholder.com/150"
            />
            <TeamMember
              name="Sadia Farzana"
              role="Nutrition Expert"
              image="https://via.placeholder.com/150"
            />
            <TeamMember
              name="Yasin Bashar"
              role="Software Developer"
              image="https://via.placeholder.com/150"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Component
const Feature = ({ icon, title, description }) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Team Member Component
const TeamMember = ({ name, role, image }) => {
  return (
    <div className="p-8 bg-gray-100 shadow-lg rounded-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-600">{role}</p>
    </div>
  );
};

export default AboutUs;
