import React from 'react'

import bgimage from '../assets/images/prof_lady.jpg'

const Card = ({ children, bg = 'bg-gray-100' }) => {
    return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
  };


export default Card
