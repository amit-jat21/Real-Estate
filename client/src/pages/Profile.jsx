/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
 import { useRef } from 'react';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase';




function Profile() {
  const {currentUser}= useSelector((state)=>state.user)
  const fileref = useRef(null)
  const [file,setfile] = useState(undefined)
  const [filePerc,setFileperc]= useState(0)
  const [fileUploadError,setFileUploadError] = useState(false)
  const [formData,setFormData]= useState({})

  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  },[file]);

const handleFileUpload =(file)=>{
const storage = getStorage(app)
const filename =  new Date().getTime()+ file.name;
const storageRef = ref(storage,filename);
const uploadTask = uploadBytesResumable(storageRef,file)





uploadTask.on('state_changed',(snapshot)=>{
  const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  setFileperc(Math.round(progress))
  

},
  (error)=>{
    setFileUploadError(true)

  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
      setFormData({...formData,avatar:downloadURL})
    })
  }
)
}


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'></h1>

      <form className='flex flex-col gap-4 '>

      <input onChange={(e)=>setfile(e.target.files[0])} type='file' ref={fileref} hidden accept='image/*'></input>
           <img  onClick={()=>fileref.current.click()} src={formData.avatar || currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center mt-2'/>
                
           <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>


           <input type='text' placeholder='username'  id='username'  className='border p-3 rounded-lg'></input>

           <input type='text' placeholder='email' id='email' className='border p-3 rounded-lg'></input>
           <input type='text' placeholder='password' id='password' className='border p-3 rounded-lg'></input>
           <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:80'>update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <button className='text-white cursor-pointer bg-red-600 p-1 my-3 rounded-md font-semibold hover:opacity-80 disabled:80'>Delete Account</button>
        <button className='text-white cursor-pointer bg-blue-600	 p-1 my-3 rounded-md font-semibold hover:opacity-80 disabled:70'>Sign Out</button>
      </div>
    </div>
  )
}
export default Profile
