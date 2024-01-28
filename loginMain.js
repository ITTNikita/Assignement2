function saveData(){


  let name,email,password;
  //name=document.getElementById('name').value;
  email=document.getElementById('email').value;
  password=document.getElementById('password').value;
  alert(email+password);

  // localStorage.setItem("name",name);
  // localStorage.setItem("email",email);
  // localStorage.setItem("password",password);

  let user_record=new Array();
  user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
  if(user_record.some((v)=>{
    return v.email==email &v.password==password;
  })){
    alert('login successfully');
    let current_user=user_record.filter((x)=>{
        return x.email==email&x.password==password;
    })[0]

    localStorage.setItem("name",current_user.name);
    localStorage.setItem("email",current_user.email);
    window.location.href="gallerPage.html";
  }
  else{
    alert('invalid email or password');
  }
}
