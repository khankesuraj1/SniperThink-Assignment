import { useEffect, useState } from 'react';

function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/pricing')
      .then(res => res.json())
      .then(setPlans)
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl bg-white hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="text-left space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-gray-600">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
