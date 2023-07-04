export const validation = (values) => {
  const errors = {
    
  }

  const user_pattern = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const pwd_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  if(values.user === ""){
    errors.user = "Name is required";
  }else if(!user_pattern.test(values.user)){
    errors.user = "4 to 24 characters.Must begin with a letter.Letters, numbers, underscores, hyphens allowed.";
  }

  if(values.pwd === ""){
    errors.pwd = "Password is required";
  }else if(!pwd_pattern.test(values.pwd)){
    errors.pwd = "Must include uppercase and lowercase letter and a special character";
  }

  if(values.pwd_confirm === ""){
    errors.pwd_confirm = "Password confirmation is required";
  }else if(!pwd_pattern.test(values.pwd_confirm)){
    errors.pwd_confirm = "Must include uppercase and lowercase letter and a special character";
  }

  return (errors)
} 

