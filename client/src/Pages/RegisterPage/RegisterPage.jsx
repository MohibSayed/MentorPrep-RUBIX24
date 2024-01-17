import React , {useState}from "react";
import axios from "axios";
import "./RegisterPage.css";
const Login = (props) => {
  console.log(props);

  const [user, setUser] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    Profession: "",
    interest: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(user);
    try {
      // Assuming your server endpoint for mentee registration is "/api/mentee/register"
      const response = await axios.post("/api/mentee/register", user);

      // Handle success, you can log the response or redirect the user
      console.log(response.data);

    } catch (error) {
      // Handle error, you can log the error or display an error message to the user
      console.error("Registration failed:", error.message);
    }
  };


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register yourself to match your fundamentals! </p>
        <p className="message">Signup now and get full access to our app. </p>
        {/* <div className="flex"> */}
         

          {/* <label>
            <input name="lastName" required contentEditable={false} placeholder="" type="text" className="input" value={props.user.lastName} onChange={handleInputChange}/>
            <span>Lastname</span>
          </label> */}
        {/* </div> */}

        <label>
          <input name="email" required contentEditable={false} placeholder="" type="email" className="input" value={props.user.emailAddresses[0].emailAddress} onChange={handleInputChange}/>
          <span>Email</span>
        </label>
        <label>
            <input name="username" required placeholder=""  type="text" className="input"  onChange={handleInputChange}/>
            <span>UserName</span>
          </label>

        <label>
          <input name="country" required placeholder="" type="text" className="input" onChange={handleInputChange}/>
          <span>Country</span>
        </label>
        <label>
          <input name="city" required placeholder="" type="city" className="input" onChange={handleInputChange}/>
          <span>City</span>
        </label>
        <label>
          <input name="phone" required placeholder="" type="city" className="input" onChange={handleInputChange}/>
          <span>Phone Number</span>
        </label>
        <label>
          <input name="Profession" required placeholder="" type="city" className="input" onChange={handleInputChange}/>
          <span>Profession</span>
        </label>
        <label>
          <input name="interest" required placeholder="" type="city" className="input" onChange={handleInputChange}/>
          <span>Interest</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          This form is mandatory to recomment certain actions
        </p>
      </form>
    </div>
  );
};

export default Login;
