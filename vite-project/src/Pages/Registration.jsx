import React from 'react'
import {Link} from "react-router-dom"
import '../Style/Register.css'
import img1 from '../assets/img1.png'
import { auth } from '../firebase'
import {  createUserWithEmailAndPassword  , updateProfile} from "firebase/auth";
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
const Registration =  () => {

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
     const res = await  createUserWithEmailAndPassword(auth, email, password)
         // Upload the file to Firebase Storage
      const storageRef = ref(storage, `avatars/${displayName}`);
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const photoURL = await getDownloadURL(storageRef);

      // Update user profile with display name and photo URL
      await updateProfile(res.user, {
        displayName,
        photoURL
      });

      const docRef = await addDoc(collection(db, "users"), {
       name:displayName,
       gmail:email,
       files:photoURL
       

      });
    
      console.log("Document written with ID: ", docRef.id);


    } catch (err) {
      console.log(err)
      
    }
    
      
  
  
      
   

  }


  
  return (

    

    <div className='main'>

    <div className='main2'>

       
       <h1>Chating</h1>
        
        <div className='main3'>
          <h3>Register</h3>
        <form  onSubmit={handleSubmit} >
        <input type="text" className='name input'  placeholder='Name' />
        <input type="email" className='email input' placeholder='Email' />
        <input type="password"  className='password input' placeholder='Password'/>
        <input type="file" style={{display:"none"}}  id='file'/>
        <label htmlFor="file">
          <img src={img1} alt="" />
          <span>Add an Avatar</span>


        </label>


        <button className='btn'>Signup</button>
        {/* {loading && "Uploading and compressing the image please wait..."}
      {err && <span>Something went wrong</span>} */}
          </form>
         <p>You do have an account ? <Link to={"/Login"}>Login</Link> </p>
      
        </div>

      
    </div>
  
</div>
  )
}

export default Registration