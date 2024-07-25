import React from 'react'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ModulesPage from './pages/ModulesPage'
import NotFoundPage from './pages/NotFoundPage'
import ModulePage, { moduleLoader } from './pages/ModulePage'
import SignUpPage from './pages/SignUpPage'
import AddJobPage from './pages/AddJobPage'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import EditJobPage from './pages/EditJobPage'


const App = () => {

  // CRUD section
  //POST job request
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  // DELETE job request
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

    // UPDATE job request
    const updateJob = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      })
      return
    }
  // Router Section
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout />} >
      <Route index element={ <HomePage /> } />
      <Route path='/users/signup' element={ <SignUpPage /> } />
      <Route path='/modules' element={ <ModulesPage /> } />
      <Route path='/modules/:id' element={ <ModulePage /> } loader={ moduleLoader }/>
      <Route path='/jobs' element={ <JobsPage /> } />
      <Route 
        path='/jobs/:id' 
        element={ <JobPage 
        deleteJob={ deleteJob }/> } 
        loader={ jobLoader } 
      />
      <Route 
        path='/jobs/add' 
        element={ <AddJobPage 
        addJobSubmit={ addJob }/> }
      />
      <Route 
        path='/jobs/edit/:id' 
        element={ <EditJobPage 
        updateJobSubmit={ updateJob }/> } 
        loader={ jobLoader } 
      />
      <Route path='/*' element={ <NotFoundPage /> } />
    </Route>
  )
)

  return (

    <RouterProvider router={router} />

  )
}

export default App