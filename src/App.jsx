import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/login/ProtectedRoute'
import { authenticate } from './lib/api/login'
import { Blogs } from './pages'
import AboutClinic from './pages/AboutClinic'
import BlogDetail from './pages/BlogDetail'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import ServicePage from './pages/ServicePage'



const queryClient = new QueryClient()

function App() {


  const item=localStorage.getItem('access_token')
  console.log(item)
  
    useEffect(() => {
      authenticate()
      .then(res=>{console.log(res.data)})
      
      .catch((err) => {
        console.log(err)
      })
    }, [])

  return (
  <QueryClientProvider client={queryClient}>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage /> } />
        <Route path='/home' element={<LandingPage /> } />
        <Route path='/services' element={ <ServicePage />  } />
        <Route path='/aboutclinic' element={<AboutClinic /> } />
      
     
          {
            item ?(
              <Route path='/blogs' element={<Blogs />} />
            ):
            (
              <Route path='/login' element={<Login />} />
            )
          }
       
        <Route path='/blogs/:blogID' element={<BlogDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
       
      </BrowserRouter>
      
     {/* */}
     {/**/}
     {/* */}
     
    </div>
  </QueryClientProvider>
  )
}

export default App
