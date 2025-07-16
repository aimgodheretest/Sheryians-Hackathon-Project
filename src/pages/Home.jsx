import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import NewsletterForm from "../components/NewsletterForm";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My World
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Content Creator | Entrepreneur | Influencer
          </p>
          <SocialIcons />
          <button className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
            Explore My Work
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who Am I?</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/assets/images/influencer.jpg"
                alt="Influencer"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Hi, I'm [Name], a digital content creator from India with over 5
                million followers across platforms.
              </p>
              <p className="text-lg mb-4">
                I create content about lifestyle, fashion, and personal
                development to help you live your best life.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                My Story →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Latest Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content cards would go here */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={`/assets/images/content-${item}.jpg`}
                  alt={`Content ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Content Title {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Short description about this content piece...
                  </p>
                  <button className="text-purple-600 font-semibold hover:text-purple-800">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join My Community</h2>
          <p className="text-xl mb-8">
            Get exclusive content, updates, and offers directly to your inbox
          </p>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
