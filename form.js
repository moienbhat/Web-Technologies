function test(){
    var n = document.getElementById("name").value;
   var e = document.getElementById("email").value;
   var p = document.getElementById("phone").value;
   var pass = document.getElementById("password").value;
   var cpass = document.getElementById("confirm_password").value;



   if(n == "" || e == "" || p == "" || pass == "" || cpass == ""){
       alert("Please fill all fields");
       return false;
   }
   if (p.length < 10 || p.length > 10){
       alert("Phone number must be 10 digits");
       return false;
   }

   if(isNaN(p)){
       alert("Phone number must contain numbers only");
       return false;
   }

   if(pass != cpass){
       alert("Passwords do not match");
       return false;
   }

   return true;
}