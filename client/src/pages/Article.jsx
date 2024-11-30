import React from "react";
import Navbar from "./Navbar"; // Ensure Navbar.js exists
import Footer from "./Footer"; // Ensure Footer.js exists

const Article = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-black to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Stay Informed & Inspired
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Explore expert insights, fitness tips, and success stories to help you achieve your wellness goals.
          </p>
        </div>
      </header>

      {/* Featured Articles Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </section>

      {/* Famous Fitness Experts Quotes Section */}
      <section className="container mx-auto py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Wisdom from Fitness Experts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertQuotes.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-black to-indigo-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
          <p className="mt-4 text-lg">
            Get the latest fitness tips and updates directly to your inbox.
          </p>
          <form className="mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-1/3 px-4 py-2 text-gray-800 rounded"
            />
            <button className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-white text-blue-600 rounded font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Static Articles Data
const articles = [
  {
    title: "5 Quick Exercises for Busy Professionals",
    description: "Stay fit even with a hectic schedule with these quick exercises.",
    image: "/exercise.jpg",
    date: "Nov 30, 2024",
  },
  {
    title: "The Ultimate Guide to Meal Prepping",
    description: "Learn how to meal prep effectively to stay on track with your goals.",
    image: "/healthy_meal.jpg",
    date: "Nov 28, 2024",
  },
  {
    title: "Overcoming Fitness Plateaus",
    description: "Feeling stuck? Here are strategies to push through plateaus.",
    image: "/fitness_plateus.jpg",
    date: "Nov 25, 2024",
  },
];

// Expert Quotes Data
const expertQuotes = [
  {
    name: "Tunde Oyeneyin",
    quote: "A goal is a wish. A standard holds you accountable.",
    image: "/expert2.jpg",
  },
  {
    name: "Jerry Rice",
    quote: "Today I will do what others won’t, so tomorrow I can accomplish what others can’t.",
    image: "/expert3.jpg",
  },
  {
    name: "Michael Phelps",
    quote: "“You dream. You plan. You reach. There will be obstacles. There will be doubters. There will be mistakes. But with hard work, with belief, with confidence and trust in yourself and those around you, there are no limits.”",
    image: "/expert4.webp",
  },
];

// ArticleCard Component
const ArticleCard = ({ title, description, image, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-4">{description}</p>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-gray-500 text-sm">{date}</span>
          <button className="text-blue-600 hover:underline font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

// ExpertCard Component
const ExpertCard = ({ name, quote, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h4 className="text-xl font-bold text-gray-800">{name}</h4>
      <p className="text-gray-600 mt-2 italic">"{quote}"</p>
    </div>
  );
};

export default Article;
