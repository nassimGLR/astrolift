import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LibraryGrid = () => {
  const items = [
    {
      id: 1,
      title: "Solar System",
      image: "/api/placeholder/200/200",
      link: "/solar-system"
    },
    {
      id: 2,
      title: "Deep Space",
      image: "/api/placeholder/200/200",
      link: "/deep-space"
    },
    {
      id: 3,
      title: "Nebulas",
      image: "/api/placeholder/200/200",
      link: "/nebulas"
    },
    {
      id: 4,
      title: "Black Holes",
      image: "/api/placeholder/200/200",
      link: "/black-holes"
    },
    {
      id: 5,
      title: "Galaxies",
      image: "/api/placeholder/200/200",
      link: "/galaxies"
    },
    {
      id: 6,
      title: "Space Tech",
      image: "/api/placeholder/200/200",
      link: "/space-tech"
    }
  ];

  const handleCardClick = (link) => {
    console.log(`Navigating to: ${link}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-white mb-8 tracking-wider">Space Explorer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card 
              key={item.id}
              className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 bg-slate-800 border-slate-700 transform perspective-1000"
              onClick={() => handleCardClick(item.link)}
            >
              <CardContent className="p-0">
                <div className="relative group aspect-square">
                  <div className="w-full h-full relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <h3 className="font-medium text-base text-white tracking-wide">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryGrid;