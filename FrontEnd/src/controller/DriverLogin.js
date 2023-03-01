$("#btnDdlogin").click(function (){
    let user = $("#user").val();
    let password = $("#pass").val();
    if (user === "driver" && password === "123"){
        location.href = "driver.html";
    
    }else {
        alert("Wrong Secret Code Or Password");

    }
});