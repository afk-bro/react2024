import { useState, useEffect } from 'react';
import ModuleListing from './ModuleListing';
import Spinner from './Spinner';

const ModuleListings = ({ isHome = false }) => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModules = async () => {
      const apiUrl = isHome ? '/api/modules?_limit=3' : '/api/modules';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Modules' : 'Browse Modules'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {modules.map((module) => (
              <ModuleListing key={module.id} module={module} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default ModuleListings;