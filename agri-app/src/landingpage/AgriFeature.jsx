import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Map,
  UserCog,
  Leaf,
} from 'lucide-react';

const testimonials = [
  {
    heading: 'Production Insights Dashboard',
    icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />,
    message:
      'Real-time Yield Tracking: Monitor and track crop yields in real-time through an intuitive dashboard. Historical Production Data: Access historical data to analyze trends and make informed decisions. Crop-Specific Insights: Provide detailed insights into the production of specific crops.',
  },
  {
    heading: 'Agri Parcel Mapping Feature',
    icon: <Map className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />,
    message:
      'The Agri Parcel Mapping feature allows users to create and manage geospatial boundaries of individual farmer parcels within each district of Zamboanga City. Through an interactive map interface, users can draw polygons representing rice fields or agricultural lots and assign them to specific farmers.',
  },
  {
    heading: 'Customizable Farm Profiles',
    icon: <UserCog className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2" />,
    message:
      'Personalized Information Hub: Allow farmers to create customizable profiles for their farms. Documented Practices: Enable farmers to document and track their agricultural practices over time. Resource Utilization Reports: Provide reports on resource utilization efficiency for each farm.',
  },
  {
    heading: 'Farmers Practices',
    icon: <Leaf className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-2" />,
    message:
      'The Farmers Practices feature records key agricultural activities per farmer and parcel, including land preparation, planting, irrigation, input usage, and harvesting methods. Each entry is tagged by crop type, season, and location.',
  },
];

const AgriFeature = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">AGRI-MAP Features</h2>
        <hr className="mt-4 border-t-2 w-24 border-blue-500 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-8"
          >
            <blockquote className="text-center">
              <div className="flex items-center justify-center mb-2">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.heading}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.message}</p>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AgriFeature;
