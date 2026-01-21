
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you would fetch by ID from Supabase
  const place = {
    id: id,
    name: 'Paraíso de Cristal',
    description: 'Um refúgio exclusivo cercado por águas azul-turquesa e areias brancas intocadas. Ideal para quem busca desconexão total da rotina urbana e contato direto com a natureza preservada. Oferecemos infraestrutura completa de eco-resort com gastronomia local orgânica.',
    image: 'https://picsum.photos/id/20/1200/600',
    location: 'Ilhas Paradisíacas, Oceano Pacífico',
    price: 2400,
    rating: 5.0,
    category: 'Luxo'
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-bold text-coral hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Voltar para a busca
        </button>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-6 h-[400px] md:h-[500px]">
              <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src="https://picsum.photos/id/21/400/300" className="rounded-2xl cursor-pointer hover:opacity-80 transition-opacity h-24 w-full object-cover shadow-md" />
              <img src="https://picsum.photos/id/22/400/300" className="rounded-2xl cursor-pointer hover:opacity-80 transition-opacity h-24 w-full object-cover shadow-md" />
              <img src="https://picsum.photos/id/23/400/300" className="rounded-2xl cursor-pointer hover:opacity-80 transition-opacity h-24 w-full object-cover shadow-md" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="bg-coral bg-opacity-10 text-coral px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">
                {place.category}
              </span>
              <h1 className="font-poppins font-extrabold text-4xl md:text-5xl mb-2">{place.name}</h1>
              <p className="text-gray-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {place.location}
              </p>
            </div>

            <div className="flex items-center gap-6 mb-8 py-6 border-y border-gray-200">
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Avaliação</p>
                <p className="font-extrabold text-xl flex items-center justify-center gap-1">
                  <span className="text-yellow-500">★</span> {place.rating}
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Duração Mínima</p>
                <p className="font-extrabold text-xl">3 Noites</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Pessoas</p>
                <p className="font-extrabold text-xl">2-4</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-poppins font-bold text-2xl mb-4">Sobre este lugar</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {place.description}
              </p>
            </div>

            <div className="mt-auto bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-gray-400 text-sm font-bold">A partir de</p>
                <p className="font-poppins font-extrabold text-3xl text-coral">R$ {place.price} <span className="text-sm text-gray-400 font-normal">/ dia</span></p>
              </div>
              <button className="bg-coral text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1">
                Reservar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
