import axios from "axios"


export const getBlogs = async () => {
    const res = await axios.get('https://best-care-hospital-backend.vercel.app/', {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  }
export const getSpecificBlog = async (uid) => {
    const res = await axios.get(`https://best-care-hospital-backend.vercel.app/blogs/${uid}`, {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  }
// export const postComment = ({uid,comment:comment}) => {
//     return  axios.post(`https://best-care-hospital-backend.vercel.app/comments`,{uid,comment:comment}, {
//       headers: { 'Content-Type': 'application/json' },
//     })

//   }
export const postComment = ({uid,comment:comment}) => {
    return  axios.post(`https://best-care-hospital-backend.vercel.app/comments`,{uid,comment:comment}, {
      headers: { 'Content-Type': 'application/json' },
    })

  }
 
  export const getSpecificBlogComments = async (uid) => {
    const res = await axios.get(`https://best-care-hospital-backend.vercel.app/comments/${uid}`, {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data.comments
  }