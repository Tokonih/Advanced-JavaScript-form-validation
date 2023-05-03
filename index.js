function validation(){
     let input = document.getElementsByClassName("input"),
     obj = {},
     error = false;
   
    for(let i=0; i<input.length; i++){
        if(input[i].value=="" || input[i].value == null){
            input[i].nextElementSibling.innerHTML = input[i].previousElementSibling.innerHTML + " is required"
            error=true
        }else{
            input[i].nextElementSibling.innerHTML="";

            obj[input[i].name] = input[i].value

        }
    }

    if (error == false){
        let output = ` <div>
        <h1>user information</h1>
        <div><p>First Name</p><p>${obj.firstname}</p></div>
        <div><p>Last Name</p><p>${obj.lastname}</p></div>
        <div><p>Email</p><p>${obj.email}</p></div>
        <div><p>Phone Number</p><p>${obj.phone}</p></div>
        <div><p>Gender</p><p>${obj.gender}</p></div>
        <div><p>Password</p><p>${obj.password}</p></div>
    </div>`
    document.getElementById("details").innerHTML=output
    }
}


document.getElementById("btn").onclick = function(e){
    e.preventDefault()
    validation()
}