import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <section
        id="ContactUs"
        className="relative bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-cover bg-center bg-no-repeat bg-blend-multiply"
      >
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center z-10 relative">
          {/* Title */}
          <h1
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            data-aos="fade-up"
          >
            Get in Touch with AgriMap
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have questions, feedback, or want to collaborate with us to improve agricultural innovation? Reach out — we’d love to hear from you!
          </p>

          {/* Contact Info */}
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-3xl mx-auto text-left px-8 py-10 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              📍 <strong>Location:</strong> AgriMap Headquarters, Zamboanga City, Philippines
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              ✉️ <strong>Email:</strong>{' '}
              <a
                href="mailto:agrimap@zambo.gov.ph"
                className="text-green-700 hover:underline dark:text-green-400"
              >
                agrimap@zambo.gov.ph
              </a>
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              📞 <strong>Phone:</strong>{' '}
              <a
                href="tel:+639XXXXXXXXX"
                className="text-green-700 hover:underline dark:text-green-400"
              >
                +63 9XX XXX XXXX
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="w-full max-w-md mx-auto" data-aos="fade-up" data-aos-delay="300">
            <label
              htmlFor="contact-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="contact-email"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-green-600 focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Enter your email..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-800/80 to-transparent z-0" />
      </section>
    </>
  );
}

export default ContactUs;
