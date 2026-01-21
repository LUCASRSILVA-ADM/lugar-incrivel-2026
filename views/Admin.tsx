
import React from 'react';

const Admin: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-poppins font-extrabold text-4xl mb-2 text-darkgray">Dashboard Admin</h1>
          <p className="text-gray-500">Gerencie todos os seus destinos e reservas aqui.</p>
        </div>
        <button className="bg-darkgray text-white px-6 py-2 rounded-xl font-bold hover:bg-coral transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Novo Lugar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-400 text-sm font-bold uppercase mb-2">Total de Lugares</p>
          <p className="text-4xl font-extrabold text-coral">42</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-400 text-sm font-bold uppercase mb-2">Visualizações</p>
          <p className="text-4xl font-extrabold text-darkgray">12.8k</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-400 text-sm font-bold uppercase mb-2">Reservas Ativas</p>
          <p className="text-4xl font-extrabold text-darkgray">156</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-400 text-sm font-bold uppercase mb-2">Receita (mês)</p>
          <p className="text-4xl font-extrabold text-darkgray">R$ 42k</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-poppins font-bold text-xl">Gerenciar Destinos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase text-xs">Destino</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase text-xs">Localização</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase text-xs">Preço/Dia</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase text-xs">Status</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase text-xs text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Praia do Sancho', loc: 'Fernando de Noronha, PE', price: 1500, status: 'Ativo' },
                { name: 'Gramado', loc: 'Gramado, RS', price: 800, status: 'Ativo' },
                { name: 'Jalapão', loc: 'Jalapão, TO', price: 1200, status: 'Rascunho' },
                { name: 'Pantanal', loc: 'Mato Grosso, MT', price: 1100, status: 'Ativo' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold">{item.name}</td>
                  <td className="px-6 py-4 text-gray-500">{item.loc}</td>
                  <td className="px-6 py-4 font-bold text-coral">R$ {item.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Ativo' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-500 hover:underline mr-4 font-bold">Editar</button>
                    <button className="text-red-500 hover:underline font-bold">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
