import { useState } from 'react';
import {sendContactForm} from './contact.api.js'
function ContactForm() {
  
  // variables 
  const [first,setfirst] = useState("");
  const [last,setLast] = useState("");
  const [email,setemail] = useState("");
  const [location,setLocation] = useState(null);
  const [mailsubject,setmailSubject]= useState("");
  const [content,setContent] = useState("");
  
  // error, loading
  const [error,seterror]  = useState(null);
  const [sending,setSending] = useState(null);

const handleFirst=(event)=>{
  setfirst(event.target.value);

}
const handleLast=(event)=>{
  setLast(event.target.value);

}
 
const handlemail=(event)=>{
  setemail(event.target.value);

}
 
 
const handleSubject=(event)=>{

  setmailSubject(event.target.value);

}
 
const handleContent=(event)=>{

  setContent(event.target.value);
}
 
  // on submit

  const handleSubmit = async(event)=>{
    event.preventDefault();
      setSending(true);
      const value = {
        first,
        last,
        email,
        mailsubject,
        content
      }
      console.log(value)
      
      try{
        await fetch("../../api/contact",{
          method: "POST",
          headers:{
            'Accept': 'application/json, text/plain, */*',
            "Content-type" : "application/json"
          },
          body:JSON.stringify(value)
        }).then((res)=>{
          if(res.status==200){
          setSending(false);
          alert('response send');
          setfirst('')
          setLast('')
          setemail('')
          setContent('')
          setmailSubject('')
        }
      });
      }
      catch(error){
        seterror(error.message);
        alert(error);
      }
      
    }
      // Reset state variables to their initial value
     
  
  
  // const router = useRouter()
  // const { firebase } = useFirebase()

  // const handleSubmit = async (event) => {
  //   event.preventDefault()

  //   const formData = new FormData(event.target)
  //   const data = Object.fromEntries(formData)

  //   try {
  //     await firebase.database().ref('contact-form').push(data)
  //     router.push('/success')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
// console.log(first);
// console.log(last);
// console.log(email);
// console.log(mailsubject);
// console.log(content);
  return (
    <div className='border border-solod border-myblue py-8  w-2/6 rounded-4xl text-center text-white my-12 mx-auto'>
    <form  className=" form-wrap" >
      <input type="text" name="first-name " required className=' my-4 active:border-myblue active:border-4 active:border-solid focus:outline-none required:border-red-500 rounded p-2 text-black w-1/3 mx-1 inline'placeholder='First Name *' value={first} onChange={handleFirst} />
      <input type="text" name="last-name" required className='focus:outline-none inline my-4  rounded p-2 text-black w-1/3 'placeholder='Last Name *' value={last} onChange={handleLast}/>


      <input type="email" name="email" required className=' focus:outline-none block my-4  rounded p-2 text-black w-2/3  mx-auto'placeholder="Email *" value={email} onChange={handlemail}/>

      <input type="text" name="subject" required className='focus:outline-none block my-4  rounded p-2 text-black w-2/3  mx-auto' placeholder='Subject *' value={mailsubject} onChange={handleSubject}/>
       
      <textarea name="content" className='block my-4 focus:outline-none rounded p-2 text-black w-2/3  mx-auto h-32' placeholder='Context *' value={content} onChange={handleContent}></textarea>
      <button type="submit" onClick={(event)=>handleSubmit(event)} className='submit font-bold bg-myblue p-2 m-4 text-white rounded w-2/3' >Submit</button>
    </form>

    <style jsx>
      {`




      .form-input:focus{
        appearance:none;
        background-color:  rgb(67, 69, 63);


      }


      `}
    </style>
    </div>
  )
}

export default ContactForm
