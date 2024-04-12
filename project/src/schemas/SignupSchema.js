import * as YUP from 'yup';

let SignupSchema = YUP.object({
  name : YUP.string().test("checkUppercase", "First Letter Should be Capital", (value)=>{
    // value = Tanya
    let arr = value.split("");
    let firstLetter = arr[0]; // T
    if(firstLetter.toUpperCase() == firstLetter)
    // (T == T)
    {
      return true;
    }else{
      return false;
    }

  }).required("Insert Your Full Name"),
  email : YUP.string().email("Incorrect Email Id").required("Insert Your Email Id"),
  password : YUP.string().test("strongpass", "Strong Password", (value)=>{
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(reg.test(value)==false)
    {
      return false;
    }
    else
    {
      return true;
    }

  }).required("Insert Your Password"),
  repassword : YUP.string().oneOf([YUP.ref('password')], "Password and Re-Password should be same").required("Insert Your Re-Password"),
  address : YUP.string().required("Insert Your Address"),
  gender : YUP.string().required("Select Your Gender"),
  state : YUP.string().required("Select Your State"),
  city : YUP.string().required("Select Your City"),
  contact : YUP.number().typeError("Insert Numbers Only").test("checkNum", "Contact Number should be between 10-12", (value)=>{
    
    if(value.toString().length >= 10 && value.toString().length <= 12){
      return true;
    }else{
      return false;
    }
  }).required("Insert Your Contact Number")
});

export default SignupSchema;