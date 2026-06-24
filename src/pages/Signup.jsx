import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png"

const Signup=({setIsLoggedIn})=> {
  return (
    <Template 
      title="Join the millions learning to code
      witj StudyNotion for free"
      desc1="Build skills for today, tommorow, and beyond."
      desc2="Education to future-proof your carrer."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
