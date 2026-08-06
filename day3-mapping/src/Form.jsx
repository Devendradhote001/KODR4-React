import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "sdjgfjdsgfsjdfg",
    email: "we3sdfsdf",
    mobile: 33443,
  });

  console.log(formData);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
      >
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label htmlFor="">Name</label>
            <input
              value={formData.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="">Email</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="xyz@gmail.com"
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="">Mobile</label>
            <input
              value={formData.mobile}
              name="mobile"
              onChange={handleChange}
              type="number"
              placeholder="345xxxx67"
            />
          </div>{" "}
          <br /> <br />
          <button>Submit</button>
        </fieldset>{" "}
      </form>
    </div>
  );
};

export default Form;
