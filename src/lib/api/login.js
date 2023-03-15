import axios from "axios"


export const login = (input) => {
    
    return axios.post('https://best-care-hospital-backend.vercel.app/login', input, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  export const authenticate = () => {
    const token=localStorage.getItem('access_token')
  
    
    return axios.post('https://best-care-hospital-backend.vercel.app/profile',{},{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
          'Content-Type': 'application/json',
        })
      }
    