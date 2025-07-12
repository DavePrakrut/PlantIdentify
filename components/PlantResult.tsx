export default function PlantResult({ 
  image, 
  result 
}: { 
  image: string, 
  result: string 
}) {
  return (
      <div className="bg-[#121212] text-white rounded-xl shadow-lg p-8 mt-8 w-full max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-6">
              🌿 Plant Identification Results 🌿
          </h2>
          
          <div className="flex flex-col items-center gap-6">
              <img 
                  src={image} 
                  alt="Uploaded plant" 
                  className="w-full max-w-md rounded-lg shadow-md border-2 border-green-500"
              />
              <p className="text-lg leading-relaxed text-gray-300 text-justify px-4">
                  {result}
              </p>
          </div>

          <div className="flex justify-center mt-6">
              <button 
                  onClick={() => window.location.reload()}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
              >
                  🌱 Identify Another Plant
              </button>
          </div>
      </div>
  );
}
