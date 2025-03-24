
export function Navbar() {
  return (
    <nav className="w-full p-4 bg-white text-blue-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">WordWave AI</h1>
        <div className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </div>
      </div>
    </nav>
  );
}
