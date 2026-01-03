import React from 'react'

const ContactPage = () => {
  return (
  <div className="bg-white text-gray-800">

    <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Build Safer Waters Together
        </h1>
        <p className="max-w-2xl text-lg opacity-90">
          Reach out to LakeRider and Alert24 to collaborate, learn more, or
          explore smart maritime safety solutions.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            <strong>LakeRider</strong> operates across Andhra Pradesh and
            Telangana, offering safe and enjoyable boating experiences.
          </p>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            In collaboration with <strong>Alert24</strong>, we aim to enhance
            maritime safety using smart life jackets with real-time GPS tracking
            and emergency alert systems.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <strong>Operating Regions:</strong><br />
              Andhra Pradesh & Telangana
            </p>

            <p>
              🦺 <strong>Safety Partner:</strong><br />
              Alert24 Smart Life Jackets
            </p>

            <p>
              🌊 <strong>Focus:</strong><br />
              Marine safety, rescue technology, and smart boating experiences
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow">
          <h3 className="text-2xl font-semibold mb-6">
            Contact Form
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help you"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Our Coastal Presence
        </h2>

        <p className="text-gray-600 max-w-3xl mb-8">
          Alert24's mission focuses heavily on coastal safety, especially along
          Andhra Pradesh's 973.7 km coastline — a lifeline for fishing
          communities and maritime industries.
        </p>

        
      </div>
    </section>

    {/* CTA */}
    <section className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Interested in Smart Maritime Safety?
        </h2>
        <p className="opacity-90 mb-6">
          Let's collaborate to make waters safer for everyone.
        </p>
        <a href="https://www.alert24.co.in/" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold ] transition">
          Visit Alert24
        </a>
      </div>
    </section>

  </div>
);
};
export default ContactPage