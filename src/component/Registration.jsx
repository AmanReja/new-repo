import React, { useRef } from 'react'

function Registration() {

    // const emailInp=document.querySelector("#inputEmail4")
    // const passInp=document.querySelector("#inputPassword4")

    const emailRef=useRef(null);
    const passRef=useRef(null);

    console.log(emailRef,passRef);

    function regData(){
         
        const storedata=[];

        
        

            const data={
                Email:emailRef.current.value,
                Pass:passRef.current.value
            }
            storedata.push(data)

            

        
            event.preventDefault();
            emailRef.current.value=""
            passRef.current.value=""
  console.log(data,storedata);
  
    
    }




  return (
    <>
      <form onSubmit={()=>{regData()}} className="row g-3">
  <div className="col-md-6">
    <label  htmlFor="inputEmail4" className="form-label">Email</label>
    <input ref={emailRef} type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input ref={passRef} type="password" className="form-control" id="inputPassword4"/>
  </div>
  
  

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
    </>
  )
}

export default Registration
