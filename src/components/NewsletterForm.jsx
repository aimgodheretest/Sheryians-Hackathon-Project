import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the subscription logic here
    console.log("Subscribed with:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      {subscribed ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          Thank you for subscribing! You'll hear from us soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
