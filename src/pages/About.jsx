import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";

const About = () => {
  const milestones = [
    {
      year: "2015",
      title: "Started Creating Content",
      description: "Began sharing lifestyle tips on Instagram",
    },
    {
      year: "2017",
      title: "First 100k Followers",
      description: "Reached first major follower milestone",
    },
    {
      year: "2019",
      title: "Launched First Product",
      description: "Released an e-book that sold 10,000 copies",
    },
    {
      year: "2021",
      title: "Crossed 1M Followers",
      description: "Became one of the top influencers in India",
    },
    {
      year: "2023",
      title: "Started My Own Brand",
      description: "Launched a successful merchandise line",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Follower",
      quote:
        "Changed my perspective on personal growth completely. The content is so relatable and actionable!",
      image: "/assets/images/testimonial1.jpg",
    },
    {
      name: "Rahul Mehta",
      role: "Course Student",
      quote:
        "The digital marketing course helped me start my own business. Worth every rupee!",
      image: "/assets/images/testimonial2.jpg",
    },
    {
      name: "Neha Kapoor",
      role: "Client",
      quote:
        "Working with them was transformative. Their authenticity shines through everything they do.",
      image: "/assets/images/testimonial3.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">My Story</h1>
            <p className="text-xl md:text-2xl">
              From humble beginnings to becoming a digital creator
            </p>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
                <p className="text-lg mb-4">
                  Born and raised in [City], India, I started my journey as a
                  content creator in 2015 with nothing but a smartphone and a
                  passion for sharing my experiences.
                </p>
                <p className="text-lg mb-4">
                  What began as a hobby quickly turned into a full-fledged
                  career as my authentic approach resonated with thousands, then
                  millions of people across the country.
                </p>
                <p className="text-lg">
                  Today, I'm proud to have built a personal brand that stands
                  for positivity, growth, and making an impact through digital
                  media.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/assets/images/about-1.jpg"
                  alt="Early Days"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-purple-200 transform -translate-x-1/2"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute -top-3 -left-3 md:left-auto md:-right-3 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">
                  5M+
                </div>
                <h3 className="text-xl font-semibold mb-2">Followers</h3>
                <p className="text-gray-600">Across all social platforms</p>
              </div>

              <div className="bg-pink-50 p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-pink-600 mb-4">
                  100+
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Brand Collaborations
                </h3>
                <p className="text-gray-600">
                  With top Indian and international brands
                </p>
              </div>

              <div className="bg-yellow-50 p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  50K+
                </div>
                <h3 className="text-xl font-semibold mb-2">Students</h3>
                <p className="text-gray-600">
                  Taught through my courses and workshops
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What People Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join My Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're here to learn, get inspired, or collaborate, I'm
              excited to connect with you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
                Explore My Work
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
