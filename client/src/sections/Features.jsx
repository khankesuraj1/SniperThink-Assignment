import { useEffect, useState } from 'react';

function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/api/features')
      .then(res => res.json())
      .then(setFeatures)
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

