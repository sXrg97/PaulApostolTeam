import Image from "next/image";

export const TransformationGallery = () => {
    const transformations = [
      { name: 'Paul', before: 120, after: 80, image: '/paul_slim.jpg' },
      { name: 'Rabia', loss: 10, image: '/rabia_slim.jpg' },
      // Add more transformations as needed
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((transformation, index) => (
          <div key={index} className="bg-black p-6 rounded-lg">
            <Image 
              src={transformation.image || "/placeholder.svg"} 
              alt={`Transformare ${transformation.name}`} 
              className="w-full h-64 object-cover mb-4 rounded"
              height={500}
              width={500}
            />
            <h3 className="text-xl font-bold mb-2">{transformation.name}</h3>
            {transformation.before && transformation.after ? (
              <p>A slăbit de la {transformation.before} kg la {transformation.after} kg</p>
            ) : (
              <p>A dat jos {transformation.loss} kg în prima lună!</p>
            )}
          </div>
        ))}
      </div>
    );
  };