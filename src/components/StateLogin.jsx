import { isEmail, hasMinLength, isNotEmpty } from '../util/validation'
import Input from "./Input";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const { 
    value: emailValue, 
    handleInputBlur: handleEmailBlur, 
    handleInputChange: handleEmailChange,
    hasError: emailHasError
   } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

   const { 
    value: passwordValue, 
    handleInputBlur: handlePasswordBlur, 
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError
   } =useInput('', (value)=>hasMinLength(value,6));
  // const [enteredValues,setEnteredValues]=useState({
  //   email:'',
  //   password:''
  // });
  // const [didEdit, setDidEdit] = useState({
  //   email:false,
  //   password:false
  // // })
  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  // const passwordIsInvalid = didEdit.password && !enteredValues.password.trim().length < 6;
  // function handleInputChange(identifier,eventvalue){
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [identifier]:eventvalue
  //   }));
  //   setDidEdit((prevEdit => ({
  //     ...prevEdit,
  //     [identifier]:false
  //   })));
  // }

  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return;
    }
  }

  // function handleInputBlur(identifier){
  //   setDidEdit((prevEdit => ({
  //     ...prevEdit,
  //     [identifier]:true
  //   })));
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" onBlur={handleEmailBlur}
          onChange={handleEmailChange} value={emailValue}
          errorMsg={emailHasError && 'Please enter a valid email!'} />

        <Input label="Password" id="password" type="password" name="password" onBlur={handlePasswordBlur}
          onChange={handlePasswordChange} value={passwordValue}
          errorMsg={passwordHasError && 'Please enter a valid password!'} />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
