import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Safety on Water, Powered by Technology
          </h1>
          <p className="max-w-2xl text-lg opacity-90">
            LakeRider partners with Alert24 to redefine boating safety across
            Andhra Pradesh and Telangana using smart life-saving technology.
          </p>
        </div>
      </section>

      {/* ABOUT LAKERIDER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
          <strong>LakeRider</strong> is a boating experience platform operating
          across both Telugu states — Andhra Pradesh and Telangana. We provide
          safe, enjoyable, and technology-enabled boat rides across lakes,
          rivers, and coastal waters.
          <br /><br />
          Our core belief is simple:
          <span className="block mt-3 font-semibold text-blue-700">
            Every journey on water should be joyful — and every life should be protected.
          </span>
        </p>
      </section>

      {/* ALERT24 FOCUS */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">
            Our Safety Partner — Alert24
          </h2>

          <p className="max-w-3xl text-gray-600 text-lg leading-relaxed mb-10">
            <strong>Alert24</strong> is a maritime safety technology company with a
            powerful mission:
          </p>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
            <p className="text-xl font-semibold text-blue-700">
              “Saving lives through precision tracking and smart safety technology.”
            </p>
          </div>
        </div>
      </section>

      {/* COASTAL CONTEXT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Why This Matters — Andhra Pradesh Coastline
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">973.7 KM</h3>
            <p className="text-gray-600">
              One of India’s longest coastlines, supporting millions of livelihoods.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">70%+</h3>
            <p className="text-gray-600">
              Coastal population depends on fishing and allied industries.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">6–8%</h3>
            <p className="text-gray-600">
              Annual growth in marine fishing driven by technology and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">The Challenge at Sea</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Inadequate Safety</h3>
              <p className="text-gray-600">
                Traditional life jackets lack durability, intelligence, and
                long-term survival capability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Tracking Difficulties</h3>
              <p className="text-gray-600">
                Locating people in distress is nearly impossible without GPS-enabled gear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Delayed Rescue</h3>
              <p className="text-gray-600">
                Lack of real-time data causes critical rescue delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Alert24 Smart Life Jacket
        </h2>

        <p className="max-w-3xl text-gray-600 text-lg mb-10">
          The Alert24 Smart Life Jacket is not just safety equipment —
          it’s an intelligent rescue system designed for real-world maritime conditions.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-5 bg-blue-50 rounded-xl">
            📡 <strong>GPS Tracking</strong>
            <p className="text-sm mt-2 text-gray-600">
              Real-time location visibility
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl">
            🚨 <strong>Emergency Alerts</strong>
            <p className="text-sm mt-2 text-gray-600">
              Automatic distress signals
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl">
            🧭 <strong>Boat-to-Shore Tracking</strong>
            <p className="text-sm mt-2 text-gray-600">
              Faster rescue coordination
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl">
            ⏱️ <strong>Reduced Response Time</strong>
            <p className="text-sm mt-2 text-gray-600">
              Critical in saving lives
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">
            Alert24 — Sailors On Board
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "Teja Dadi – Founder",
              "Alen Thomas – CTO",
              "Bharani – Product",
              "Sairam K – Product",
              "D.M.S – Operations"
            ].map((member, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow">
                <p className="font-semibold">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested? Let’s Talk
          </h2>
          <p className="opacity-90 mb-6">
            Join us in making maritime safety smarter and more reliable.
          </p>
          <a href="https://www.alert24.co.in/" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold  transition">
                Visit Alert24
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
