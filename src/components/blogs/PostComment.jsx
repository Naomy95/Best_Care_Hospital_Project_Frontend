import React, { useState } from 'react'
import SubmitButton from '../buttons/SubmitButton'
import { postComment } from '../../lib/api/blogs'

const PostComment = ({uid}) => {
    const [message,setMessage]=useState('')
    const postComments=()=>{
        const username=localStorage.getItem('username')
          const date=new Date().toDateString()
          const comment={name:username,message:message, date:date}
          console.log(comment)
          postComment({uid,comment:comment}).then(res=>{console.log(res.data); window.location.reload(true)})
          
    }

  return (
    <div className='pt-10 flex flex-col'>
        <textarea className='border-[2px] w-1/2' placeholder='Leave a Comment' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <SubmitButton onClick={postComments}/>
    </div>
  )
}

export default PostComment