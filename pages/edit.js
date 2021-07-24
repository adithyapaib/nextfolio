import React from 'react'

export default function edit() {
    function submit()
   {
       let editthis = {
           name: document.getElementById("name").value,
       }
       console.log(editthis);
   }

    return (
        <div className="edit">
            <h1>Enter your details</h1>
            <form action="">
                <label htmlFor="Name" id="name">Name</label>
                <input type="text" />
                <label htmlFor="Designation">Desgination</label>
                <input type="text" />
                <label htmlFor="Email">Email</label>
                <input type="email" />
                <label htmlFor="about">About me</label>
                <input type="text" />
                <label htmlFor="color">Color scheme</label>
                <input type="color" name="" id="" />
                <button type="submit" onClick={submit}>Submit</button>
            </form>
            
        </div>
        
    )
}
