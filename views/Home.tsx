import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Home = () => {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    // Esse é o comando que realmente vai buscar no banco
    const buscarDados = async () => {
      const { data } = await supabase.from('places').select('*');
      if (data) setLugares(data);
    };
    buscarDados();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lugares do meu Banco:</h1>
      {lugares.length === 0 ? (
        <p>Ainda não pesquei nada do banco...</p>
      ) : (
        lugares.map((l) => (
          <div key={l.id} className="p-4 border border-coral mb-2">
            {l.name}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
