import image from "../assets/images/contact_image/contact_photo.jpg";

const Contact = () => {
  return (
    <>
    {/* Contact Us page */}
<div class="container shadow bg-light my-4">
<div class="row text-center">
    <h2 class="mt-3" style={{textShadow: "2px 2px 5px gray"}}>Contact Us</h2>
    <div class="col-md p-4 mb-3">
        <img class="shadow" src={image} alt=""/>
    </div>
    <div class="col-md p-5 mt-4 me-5">
        {/* Contact Us form  *Starting*/}
        <form>
            <div class="mb-3">
              <label for="name" class="form-label float-start">Name</label>
              <input type="text" class="form-control w-100" id="name" aria-describedby="nameHelp" placeholder="Enter your name"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label float-start">Email address</label>
                <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your E-mail"/>
              </div>

            <div class="mb-3">
                <label for="text-area" class="form-label float-start">Message</label>
                <textarea type="text" class="form-control w-100" id="text-area" aria-describedby="textareaHelp">Enter your message     
                </textarea>
            </div>
            {/* Contact Us form *Ending*/}
            
            <button type="submit" class="btn btn-warning fw-bold w-100">Submit</button>
          
        </form>


    </div>
</div>

</div>

    </>
  )
}
export default Contact