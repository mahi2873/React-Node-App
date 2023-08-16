import {useState} from "react"

import image from "../assets/images/contact_image/contact_photo.jpg";

const Contact = () => {

    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [message,setMessage] = useState([]);

// Handling message *posting message to database*
    const handleMessage = async(e)=>{

        const messageInfo = {

            name: name,
            email: email,
            message: message

        }

        e.preventDefault();


            let result = await fetch('http://localhost:5000/sendMessage',{

                method:"POST",
                headers: {

                    "Content-Type": "application/json"

                },
                body: JSON.stringify(messageInfo)

            })

            result = await result.json();

            if(result){

                alert("Message Sent Successfully");

            }
            else{

                alert("Error while sending a message");
            }



        }



  return (
    <>
{/* Contact Us component */}
<div class="container shadow bg-light my-4">
<div class="row text-center">
    <h2 class="mt-3" style={{textShadow: "2px 2px 5px gray"}}>Contact Us</h2>
    <div class="col-md p-4 mb-3">
        <img class="shadow" src={image} alt=""/>
    </div>
    <div class="col-md p-5 mt-4 me-5">
        
        <form>
            <div class="mb-3">
              <label for="name" class="form-label float-start">Name</label>
              <input type="text" class="form-control w-100" id="name" aria-describedby="nameHelp" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label float-start">Email address</label>
                <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>

            <div class="mb-3">
                <label for="text-area" class="form-label float-start">Message</label>
                <textarea type="text" class="form-control w-100" id="text-area" aria-describedby="textareaHelp" value={message} onChange={(e)=>{setMessage(e.target.value)}}>Enter your message     
                </textarea>
            </div>
            
            
            <button type="submit" class="btn btn-warning fw-bold w-100" onClick={handleMessage}>Submit</button>
          
        </form>


    </div>
</div>

</div>

    </>
  )
}
export default Contact