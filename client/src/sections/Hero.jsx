import { useEffect, useState } from 'react';

function Hero() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('/api/slides')
      .then(res => res.json())
      .then(setSlides);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <div key={idx} className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
          <h1 className="text-4xl font-bold">{slide.title}</h1>
          <p className="text-lg text-gray-600">{slide.subtitle}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">{slide.cta}</button>
          <img src={slide.image} alt={slide.title} className="mt-6 max-w-md" />
        </div>
      ))}
    </div>
  );
}

export default Hero;
