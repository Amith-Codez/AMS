const regBtn = document.getElementById("reg-button");
// console.log(regBtn);

regBtn.addEventListener("click",function(){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    if(name==="" || email==="" || pass==="" || cpass===""){
        alert("All fields are required");
        return;
    }
    else{
        if(pass!==cpass){
            alert("Password doesn't match");
            return;
        }
       
    }
    const user = {
        name : name,
        email : email,
        pass : pass
    }

   let users = JSON.parse(localStorage.getItem("users")) || [];
   users.push(user);
   console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
     alert("Registration Successfull");
    window.location.href = "login.html";
})



