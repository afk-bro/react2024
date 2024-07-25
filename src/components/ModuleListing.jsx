import { useState } from 'react';
import { FaMapMarker, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ModuleListing = ({ module }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = module.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{module.type}</div>
          <h3 className='text-xl font-bold'>{module.title}</h3>
        </div>

        <div className='mb-5'>{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <span><h4 className='text-blue-500 mb-2'>Difficulty: <p style={{color: 'orange'}}>{module.difficulty} </p> </h4> </span>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-green-700 mb-3'>
            <FaAward className='inline text-lg mb-1 mr-1' />
            {module.status}
          </div>
          <Link
            to={`/modules/${module.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ModuleListing;