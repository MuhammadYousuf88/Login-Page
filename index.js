function input(){
    let input1=document.getElementById("inp1").value;
    let password=document.getElementById("password").value;
    let input3=document.getElementById("inp3").value;
    let eyeicon=document.getElementById("eyeicon");

  

    document.write("Your Name is "+ input1 + "<br />")
    document.write("You Have Entered the Password "+ password + "<br />")
    document.write("Your Email Address "+ input3 + "<br />")
}

eyeicon.onclick = function(){
        if(password.type == "password"){
            password.type= "text";
        }
        else{
            password.type="password";
        }
    }