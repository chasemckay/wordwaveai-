
export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-blue-50 text-blue-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div><h3 className="text-xl font-semibold">Fast Generation</h3><p>Generate content in seconds.</p></div>
          <div><h3 className="text-xl font-semibold">SEO Optimized</h3><p>Get content that ranks better.</p></div>
          <div><h3 className="text-xl font-semibold">Customizable</h3><p>Tune tone and style to match your brand.</p></div>
        </div>
      </div>
    </section>
  );
}
