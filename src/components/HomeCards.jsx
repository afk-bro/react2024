import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>For Students</h2>
            <p className='mt-2 mb-4'>
                Unlock your English potential, join today!
            </p>
            <Link
              to='/student'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Exercises
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Teachers</h2>
            <p className='mt-2 mb-4'>
              Find the perfect excercises to help drive home your lessons!
            </p>
            <Link
              to='/teacher'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Browse Modules
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;