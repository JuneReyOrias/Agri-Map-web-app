import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Homepage = () => {
      // Initialize AOS
      AOS.init({
        duration: 1000,  // Animation duration in milliseconds
        once: true,      // Ensure the animation happens once
      });
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      return new Promise((resolve) => {
        const existingScript = document.getElementById('googleMapsScript');

        if (!existingScript) {
          const script = document.createElement('script');
          script.src =
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMstylquYwo8gAuOrkrF5IsN6K8gbgV6I&libraries=drawing,geometry';
          script.id = 'googleMapsScript';
          script.async = true;
          script.defer = true;

          script.onload = resolve;
          document.body.appendChild(script);
        } else {
          resolve();
        }
      });
    };

    const initMap = () => {
      const center = { lat: 6.9214, lng: 122.0790 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center,
        mapTypeId: 'satellite',
      });

      const districts = [
        {
          name: 'Ayala',
          marker: { lat: 6.9644218, lng: 121.9567898 },
          coords: [
            { lat: 6.97132040, lng: 122.04652050 },
            { lat: 6.91422330, lng: 122.04259350 },
            { lat: 6.93918050, lng: 121.99149330 },
            { lat: 6.95444220, lng: 121.97260620 },
            { lat: 6.95460740, lng: 121.94963870 },
            { lat: 6.98468740, lng: 121.92536660 },
            { lat: 7.01553780, lng: 121.91815730 },
            { lat: 7.04240260, lng: 121.96503610 },
          ],
        },
        {
          name: 'Tumaga',
          marker: { lat: 6.9441081, lng: 122.0797168 },
          coords: [
            { lat: 6.91679420, lng: 122.04976660 },
            { lat: 6.90959970, lng: 122.09905880 },
            { lat: 6.91562290, lng: 122.15599570 },
            { lat: 6.94488880, lng: 122.15346670 },
            { lat: 6.97470260, lng: 122.13622620 },
            { lat: 6.98015820, lng: 122.12308980 },
            { lat: 6.98635110, lng: 122.09793580 },
            { lat: 6.97501250, lng: 122.05084590 },
          ],
        },
        {
          name: 'Culianan',
          marker: { lat: 6.9810968, lng: 122.1491062 },
          coords: [
            { lat: 6.97971720, lng: 122.12777860 },
            { lat: 6.97512640, lng: 122.13632400 },
            { lat: 6.94353560, lng: 122.15477880 },
            { lat: 6.93565800, lng: 122.16158490 },
            { lat: 6.95181910, lng: 122.18601410 },
            { lat: 6.97477830, lng: 122.18287870 },
            { lat: 7.00262090, lng: 122.19136060 },
            { lat: 7.02418570, lng: 122.13656970 },
          ],
        },
        {
          name: 'Manicahan',
          marker: { lat: 7.0238731, lng: 122.1884372 },
          coords: [
            { lat: 7.03193430, lng: 122.11952090 },
            { lat: 7.01334980, lng: 122.18029760 },
            { lat: 7.00429210, lng: 122.19114980 },
            { lat: 7.02947700, lng: 122.20449990 },
            { lat: 7.04017600, lng: 122.19879670 },
            { lat: 7.06653370, lng: 122.20314940 },
            { lat: 7.10446930, lng: 122.24965270 },
            { lat: 7.13053120, lng: 122.17414380 },
          ],
        },
        {
          name: 'Curuan',
          marker: { lat: 7.2124289, lng: 122.2006677 },
          coords: [
            { lat: 7.13078560, lng: 122.18179700 },
            { lat: 7.10986940, lng: 122.24257790 },
            { lat: 7.16262060, lng: 122.25824150 },
            { lat: 7.20811340, lng: 122.24334880 },
            { lat: 7.23488440, lng: 122.27742280 },
            { lat: 7.29370850, lng: 122.29007620 },
            { lat: 7.32184730, lng: 122.16967970 },
            { lat: 7.22294900, lng: 122.13993920 },
          ],
        },
        {
          name: 'Vitali',
          marker: { lat: 7.3719649, lng: 122.2844777 },
          coords: [
            { lat: 7.31586520, lng: 122.19226190 },
            { lat: 7.29462630, lng: 122.28847710 },
            { lat: 7.33765830, lng: 122.29485760 },
            { lat: 7.31610470, lng: 122.33388710 },
            { lat: 7.39230370, lng: 122.39160550 },
            { lat: 7.39611330, lng: 122.33855120 },
            { lat: 7.46689460, lng: 122.33834040 },
            { lat: 7.41140100, lng: 122.20406620 },
          ],
        }
      ];

      const colors = ['#00aa00', '#55007f', '#ffff00', '#ff5500', '#ff00ff', '#ff0000'];

      districts.forEach((district, index) => {
        const color = colors[index % colors.length];

        new window.google.maps.Marker({
          position: district.marker,
          map,
          title: district.name,
          label: {
            text: 'D',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
          },
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: '#57B9FF',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#fff',
            scale: 16,
          },
        });

        new window.google.maps.Polygon({
          paths: district.coords,
          strokeColor: color,
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35,
          map,
        });
      });
    };

    loadGoogleMaps().then(() => {
      if (window.google && window.google.maps) {
        initMap();
      }
    });
  }, []);

  return (
    <section id="Home" className="bg-[linear-gradient(#095437,_#01663b)] bg-center bg-no-repeat bg-blend-multiply">

    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        data-aos="fade-up" // AOS fade-up animation
      >
        Zambo AgriMap
      </h1>
      <p
        className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        data-aos="fade-left" // AOS fade-left animation
      >
        Zambo AgriMap is an innovative geo-mapping tool designed specifically for Zamboanga City.
        It provides detailed agricultural data and spatial information, enabling stakeholders to make informed
        decisions about land use, crop planning, and resource allocation.
      </p>

      {/* Map Container */}
      <div className="flex justify-center items-center mt-10">
        <div
          ref={mapRef}
          id="map"
          className="w-[80%] h-[400px] rounded-lg shadow-lg"
          data-aos="zoom-in" // AOS zoom-in animation for the map
        ></div>
      </div>
    </div>

  </section>
  );
};

export default Homepage;
