import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      type: "Catering",
      text: "Voor meerdere bedrijven gewerkt te hebben moet ik zeggen dat Fourparties er met kop en schouder boven uit steekt. Naast de professionele aanpak, maar toch fijne manier van communicatie is het ook zo dat de werknemer er zich erg gewaardeerd voelt. Zoeken naar een baan in de horeca, dan kan het zoeken denk ik stoppen!",
      author: "Koen",
      rating: 5,
      active: false
    },
    {
      type: "Facility Services",
      text: "Fourparties is een erg fijne werkplek. Alles is goed geregeld en je krijgt goed betaald met ruimte om te groeien.",
      author: "Justus",
      rating: 4,
      active: false
    },
    {
      type: "Catering",
      text: "Voor meerdere bedrijven gewerkt te hebben moet ik zeggen dat Fourparties er met kop en schouder boven uit steekt. Naast de professionele aanpak, maar toch fijne manier van communicatie is het ook zo dat de werknemer er zich erg gewaardeerd voelt. Zoeken naar een baan in de horeca, dan kan het zoeken denk ik stoppen!",
      author: "Koen",
      rating: 5,
      active: true // Highlighted card
    },
    {
      type: "Logistics",
      text: "Superleuk uitzendbureau om te werken! Diverse klussen, leuke en verschillende collega's, waardoor het nooit heel saai wordt. Je hebt erg veel vrijheid. Ze kun je zelf je beslissing waarheid opgeven en je werktijden bepalen. Hard werken wordt beloond door middel van een salarisschalen systeem.",
      author: "Antonella",
      rating: 4,
      active: false
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="py-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl text-[#1F4B43] font-medium">
          What People Say About Us
        </h2>
        <div className="flex gap-4">
           {/* Navigation Arrows */}
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            ←
          </button>
          <button className="w-12 h-12 rounded-full bg-[#1F4B43] text-white flex items-center justify-center hover:bg-[#15342F] transition-colors">
            →
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-hidden">
        {testimonials.map((item, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-[20px] min-w-[350px] flex-1 flex flex-col justify-between ${
              item.active 
                ? 'bg-[#0E4B5B] text-white' 
                : 'bg-white text-[#1F4B43] border border-gray-100 shadow-sm'
            }`}
          >
            <div>
              <span className={`text-xs px-3 py-1 rounded-full inline-block mb-4 ${
                item.active ? 'bg-white/20 text-white' : 'bg-[#1F4B43]/10 text-[#1F4B43]'
              }`}>
                {item.type}
              </span>
              <p className={`text-sm italic leading-relaxed mb-6 ${
                  item.active ? 'text-white/90' : 'text-gray-600'
              }`}>
                "{item.text}"
              </p>
            </div>
            
            <div className="flex justify-between items-center border-t border-current/10 pt-4">
              <span className="font-semibold">{item.author}</span>
              <div className="flex gap-0.5">
                {renderStars(item.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
