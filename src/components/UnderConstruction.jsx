import { Wrench } from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-8">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-8">
          <Wrench className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Under Construction
        </h1>
        
        <p className="text-gray-600 text-lg mb-8">
          We&apos;re working hard to bring you something amazing. 
          <br />
          Check back soon!
        </p>
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Notify Me
        </button>
      </div>
    </div>
  );
}