import React from 'react';
import { History, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Über uns
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6">
              Seit über 20 Jahren sind wir Ihr verlässlicher Partner in der Schienenfahrzeug-Instandhaltung. 
              Unsere Expertise und langjährige Erfahrung machen uns zu einem führenden Unternehmen in der Branche.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <History className="w-6 h-6 text-blue-900 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Langjährige Erfahrung</h3>
                  <p className="text-gray-600">Über 20 Jahre Expertise in der Branche</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-900 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Qualifiziertes Team</h3>
                  <p className="text-gray-600">Hochqualifizierte Fachkräfte für Ihre Anforderungen</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-blue-900 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Zertifizierte Qualität</h3>
                  <p className="text-gray-600">Höchste Standards und Zertifizierungen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80"
              alt="Team bei der Arbeit"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;