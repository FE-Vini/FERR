import React from 'react';
import { MapPin, Clock, PenTool as Tool } from 'lucide-react';

const ServiceArea = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Servicebereich
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-10 h-10 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Deutschlandweit
            </h3>
            <p className="text-gray-600">
              Wir sind in ganz Deutschland für Sie im Einsatz
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-10 h-10 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              24/7 Verfügbarkeit
            </h3>
            <p className="text-gray-600">
              Rund um die Uhr für Notfälle erreichbar
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Tool className="w-10 h-10 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mobile Werkstatt
            </h3>
            <p className="text-gray-600">
              Vollausgestattete mobile Werkstätten für Vor-Ort-Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;