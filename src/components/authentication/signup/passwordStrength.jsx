
import { useState } from "react";
 function PasswordStrength() {
    const[strength,setStrength]=useState()
  const calculateStrength = (password) => {
    if(password.length<8&&password.length!==0)
    {setStrength(1)}
    const regex = [/[A-Z]/, /[a-z]/, /[0-9]/, /[$@$!%*#?&]/];
    let passed = 0;

    regex.forEach((pattern) => {
      if (pattern.test(password)) {
        passed++;
      }
    });
    if(password.length>=8||password.length==0){
    switch (passed) {
      case 1:
        setStrength(1);
        break;
      case 2:
        setStrength(2);
        break;
      case 3:
        setStrength(3);
        break;
      case 4:
        setStrength(4);
        break;
      default:
        setStrength(0);
        break;
    }
   
  };
 }


  return{strength,calculateStrength}
};

export default PasswordStrength;
