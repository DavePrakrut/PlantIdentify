import PlantUploader from '../components/PlantUploader';

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      {/* Centered Container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Plant Identifier
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Upload an image of a plant and discover its secrets!
        </p>
        <PlantUploader />
      </div>
    </main>
  );
}
