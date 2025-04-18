import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="AboutUs"
        className="bg-center bg-no-repeat bg-[url('/images/agriculture.jpg')] bg-gray-700 bg-blend-multiply"
        data-aos="fade-up"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Welcome to AgriMap
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At AgriMap, we believe in the power of sustainable agriculture to transform communities and nourish the world. 
            Since 2023, we've been committed to delivering smart, data-driven solutions that empower farmers, boost productivity, 
            and protect our environment.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-green-50 dark:bg-gray-900">
        <div className="py-12 px-4 mx-auto max-w-screen-xl">
          {/* Main Card */}
          <div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-10 mb-12 shadow-sm"
            data-aos="fade-up"
          >
            <div className="bg-green-100 text-green-900 text-sm font-semibold inline-block px-3 py-1 rounded-md mb-3 dark:bg-gray-700 dark:text-green-400">
              About AgriMap
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Empowering Agriculture Through Innovation
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl">
              AgriMap is a cutting-edge agricultural mapping platform that harnesses GIS technology to provide comprehensive, real-time 
              insights into Zamboanga City's agricultural landscape. From farmer profiles to crop yield monitoring, our platform fosters 
              data-driven decisions for a sustainable and resilient future.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-10 shadow-sm"
              data-aos="fade-up"
            >
              <div className="bg-blue-100 text-blue-900 text-sm font-semibold inline-block px-3 py-1 rounded-md mb-3 dark:bg-gray-700 dark:text-blue-400">
                Our Mission
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Cultivating Sustainability Through Technology
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                AgriMap is on a mission to revolutionize agriculture by promoting smart, sustainable practices that balance high productivity 
                with environmental care. We aim to create a future where farming supports food security and protects our ecosystems for 
                generations to come.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-10 shadow-sm"
              data-aos="fade-up"
            >
              <div className="bg-yellow-100 text-yellow-900 text-sm font-semibold inline-block px-3 py-1 rounded-md mb-3 dark:bg-gray-700 dark:text-yellow-400">
                Our Vision
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                A Resilient Future for Zamboanga's Rice Industry
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                We envision a thriving, sustainable rice industry in Zamboanga City that integrates innovation, supports local farmers, and 
                safeguards natural resources. AgriMap aims to become a model of modern agriculture—boosting local economies, ensuring food 
                security, and preserving the land we cultivate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
