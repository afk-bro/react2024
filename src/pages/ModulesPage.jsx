import React from 'react'

import modules from '../../modules.json'
import ModuleListings from '../components/ModuleListings'

const ModulesPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
        <ModuleListings />
    </section>
  )
}

export default ModulesPage