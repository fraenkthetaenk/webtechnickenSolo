checkInput = () =>{
    let inForm = document.getElementById("inputForm");

    if(inForm.checkValidity()){
     dataFile ={};
     dataFile["prename"]= document.getElementById("prenameIn").value;
     dataFile["lastname"]= document.getElementById("lastnameIn").value;
     dataFile["username"]= document.getElementById("usernameIn").value;
     dataFile["email"]= document.getElementById("emailIn").value;
     dataFile["password"] = document.getElementById("passwordIn").value;


    }
}

var passsword = document.getElementById("passwordIn");

passsword.addEventListener("input", function (event) {
  if (passsword.validity.patternMismatch) {
    passsword.setCustomValidity("You need to add at least one of these characters: ?!=#+-_%$§");
  } else {
    passsword.setCustomValidity("");
  }
});

