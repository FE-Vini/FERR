import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from './ui/carousel';
import { Wrench, Activity, Train, Gauge, ArrowLeftRight, ClipboardCheck, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'notfall',
      title: 'Notfallreparaturen',
      description: 'Schnelle und professionelle Hilfe im Notfall, rund um die Uhr verfügbar.',
      icon: Wrench,
    },
    {
      id: 'ueberpruefung',
      title: 'Überprüfungen der laufenden Waggoninstandhaltung',
      description: 'Regelmäßige Inspektionen und Wartungsarbeiten für optimale Betriebssicherheit.',
      icon: Activity,
    },
    {
      id: 'radsatz',
      title: 'Mobiler Radsatzwechsel',
      description: 'Flexibler Service für Radsatzwechsel direkt vor Ort.',
      icon: Train,
    },
    {
      id: 'bremssysteme',
      title: 'Qualifizierung von Waggons mit automatischer Diagnose der Bremssysteme',
      description: 'Moderne Diagnosetechnik für maximale Sicherheit.',
      icon: Gauge,
    },
    {
      id: 'vermietung',
      title: 'Wir bereiten Waggons mobil für die Rückgabe aus der Vermietung vor',
      description: 'Professionelle Aufbereitung und Qualitätskontrolle vor der Rückgabe.',
      icon: ArrowLeftRight,
    },
    {
      id: 'pruefungen',
      title: 'Wagenprüfungen im Bereich P1-P3',
      description: 'Umfassende Prüfungen nach allen relevanten Standards.',
      icon: ClipboardCheck,
    },
    {
      id: 'verwaltung',
      title: 'Verwaltung von Radsätzen und deren Lagerung',
      description: 'Professionelles Management und sichere Lagerung Ihrer Radsätze.',
      icon: Database,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Unsere Dienstleistungen
        </h2>
        
        <Carousel className="relative">
          <CarouselContent className="-ml-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <CarouselItem key={service.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 h-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNavigation 
            alwaysShow
            classNameButton="bg-blue-900 hover:bg-blue-800 *:stroke-white"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;