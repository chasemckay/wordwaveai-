
export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4">
      {[
        { name: "Free", price: "$0", features: ["5 articles/mo", "Basic support"] },
        { name: "Basic", price: "$9.99/mo", features: ["Unlimited articles", "Priority support"] },
        { name: "Pro", price: "$19.99/mo", features: ["SEO tools", "Export options", "Everything in Basic"] }
      ].map((plan, i) => (
        <div key={i} className="bg-white text-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-3xl font-bold mb-4">{plan.price}</p>
          <ul className="mb-4 space-y-1">
            {plan.features.map((f, j) => <li key={j}>✓ {f}</li>)}
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Choose Plan</button>
        </div>
      ))}
    </div>
  );
}
