import React, { useState } from 'react'

const Usestate = () => {
  const [FormData, setFormData] = useState({
    Username: "",
    Email: "",
    PhoneNumber: ""
  }
  );
  const handlevent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setFormData((prev) => {
      return { ...prev, [name]: value };

    });
  };

  return (
    <div>
      <form>
        Name:<input type='text'
          placeholder='Username'
          name='Username'
          value={FormData.Username}
          //  onChange={setFormData=(e)=>{e.target.valaue}}
          onChange={handlevent}
        />
        Email:<input type='Email'
          placeholder='Email'
          name='Email'
          value={FormData.Email}
          //  onChange={setFormData=(e)=>{e.target.valaue}}
          onChange={handlevent}
        />
        PhoneNumber:<input type='number'
          placeholder='PhoneNumber'
          name='Number'
          value={FormData.Number}
          //  onChange={setFormData=(e)=>{e.target.valaue}}
          onChange={handlevent}
        />
      </form>
    </div>
  )
}

export default Usestate