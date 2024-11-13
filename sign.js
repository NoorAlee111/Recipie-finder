
document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("ConfirmPassword").value;
    var user = {
        email: email,
        password: password,
        ConfirmPassword:cpassword
      };
      console.log(JSON.parse(localStorage.getItem("users")));
    let users = localStorage.getItem("users");
    var flag=true;
    if (users) {
        users = JSON.parse(users);
        for(var i=0;i<users.length;i++)
        {
            if (users[i].password == password && users[i].email == email)
            {
                users.push(user);
                console.log( "Username already exists. Please choose a different username.") ;
                flag=false;
                break;
            }
        }
        if(flag==true)
        {
            users = [user];
            localStorage.setItem("users", JSON.stringify(users));
            console.log("Sign up successful! User data stored in local storage.");
        }
    }else{
        users = [user];
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Sign up successful! User data stored in local storage.");
    }
  });

  document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        email: email,
        password: password,
      };
 
    let users = localStorage.getItem("users");
    var flag=false;
    if (users) {
        users = JSON.parse(users);
        for(var i=0;i<users.length;i++)
        {
            if (users[i].password == password && users[i].email == email)
            {
                users.push(user);
                console.log( "Successfully Logged In..") ;
                flag=true;
                localStorage.setItem("loggedin", JSON.stringify(flag));
        
                break;
            }
        }
        if(flag==false)
        {
            console.log( "User not exists...Please Sign up") ;
                }}
                else{
                    console.log( "User not exists...Please Sign up") ;
                }
  });

