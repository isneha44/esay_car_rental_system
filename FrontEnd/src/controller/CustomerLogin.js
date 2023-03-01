getAllCustomers();
$("#btnSingup").click(function (){

    let id = $("#user").val();
    let email = $("#email").val();
    let password = $("#pass").val();
    let license = $("#dlicense").val();
    let contact = $("#contact").val();
    let address = $("#address").val();

    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            id:id,
            email:email,
            password:password,
            license:license,
            contact:contact,
            address:address
        }),
        success:function (data){
            console.log(data);
            getAllCustomers();
            clearcustomer();
        }
    });
});

// update
$("#btnCustomerUpdate").click(function (){
    let id = $("#txtUserId").val();
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let license = $("#txtlicense").val();
    let contact = $("#txtContact").val();
    let address = $("#txtAddress").val();


    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/customer',
        method: 'put',
        async:true,
        contentType: 'application/json',
        data: JSON.stringify({
            id:id,
            email:email,
            password:password,
            license:license,
            contact:contact,
            address:address
        }),

        success:function (data){
            console.log(data);
            getAllCustomers();
            clearcustomer1();
        }
    });
});

// delete
$("#btnCustomerDelete").click(function () {
    let id = $("#txtUserId").val();

    let option=confirm(`Do You Want to Delete Customer ? id:${id}`);
    if (option) {
        $.ajax({
            url: `http://localhost:8080/pos/api/v1/customer/?id=${id}`,
            method: 'delete',
            async: true,
            contentType: 'application/json',

            success: function (data) {
                console.log("deleted");
                getAllCustomers();
                clearcustomer1();
                // clearcar();
                if (window.confirm('Your Account Successfully Deleted , Please Sing Up Again !'))
                {
                    window.location.href='index.html';
                };
            }
        })
    }

})

// search
$("#btnCustomerSearch").click(function (){
    let id=$("#txtUserId").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/customer/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtEmail").val(data.email);
            $("#txtPassword").val(data.password);
            $("#txtlicense").val(data.license);
            $("#txtContact").val(data.contact);
            $("#txtAddress").val(data.address);
        }
    })
});

$("#txtUserId").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id=$("#txtUserId").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/customer/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#txtEmail").val(data.email);
                $("#txtPassword").val(data.password);
                $("#txtlicense").val(data.license);
                $("#txtContact").val(data.contact);
                $("#txtAddress").val(data.address);
            }
        })
    }
})

// getall
function getAllCustomers(){
    $("#tblCustomer").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer',
        method:'get',
        async:true,

        success:function (data,textState, xhr){
            for (var customer of data) {
                console.log(customer);
                let row=`<tr><td>${customer.id}</td><td>${customer.email}</td><td>${"******"}</td><td>${customer.license}</td><td>${customer.contact}</td><td>${customer.address}</td></tr>`;
                $("#tblCustomer").append(row);
            }
        }
    });
}

function clearcustomer() {
    $("#user").val("");
    $("#email").val("");
    $("#pass").val("");
    $("#dlicense").val("");
    $("#contact").val("");
    $("#address").val("");
}

function clearcustomer1() {
    $("#txtUserId").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtlicense").val("");
    $("#txtContact").val("");
    $("#txtAddress").val("");
}

$("#user").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#email').focus();
    }
});

$("#email").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#pass').focus();
    }
});

$("#pass").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#dlicense').focus();
    }
});

$("#dlicense").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#contact').focus();
    }
});

$("#contact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#address').focus();
    }
});

$("#address").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnSingup').focus();
    }
});

$("#txtUserId").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtEmail').focus();
    }
});

$("#txtEmail").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtPassword').focus();
    }
});

$("#txtPassword").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtlicense').focus();
    }
});

$("#txtlicense").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtContact').focus();
    }
});

$("#txtContact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtAddress').focus();
    }
});

let cusIDRegEx=/^(C-)[0-9]{1,3}$/;
$("#user").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#email').focus();
    }
    let inputID=$("#user").val();
    if (cusIDRegEx.test(inputID)){
        $("#user").css('border','1px solid green');
        $("#suser").text("");
    }else{
        $("#user").css('border','1px solid red');
        $("#suser").text('Invalid User ID (C-001)');
    }
});

let cusEmailRegEx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
$("#email").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#pass').focus();
    }
    let inputID=$("#email").val();
    if (cusEmailRegEx.test(inputID)){
        $("#email").css('border','1px solid green');
        $("#semail").text("");
    }else{
        $("#email").css('border','1px solid red');
        $("#semail").text('Invalid Email');
    }
});

// let pass = $("#pass").val();
// $("#rpass").on('keyup',function (event) {
//
//     if (event.key=="Enter"){
//         $('#dlicense').focus();
//     }
//
//     let rpass = $("#rpass").val();
//
//     if (pass.test(rpass)) {
//         $("#rpass").css('border','1px solid green');
//         $("#spassword2").text("");
//     } else {
//         $("#rpass").css('border','1px solid red');
//         $("#spassword2").text('Yours passwords do not match');
//     }
// });

let contact=/^[0-9]{1,10}$/;
$("#contact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#address').focus();
    }
    let inputID=$("#contact").val();
    if (contact.test(inputID)){
        $("#contact").css('border','1px solid green');
        $("#scontact").text("");
    }else{
        $("#contact").css('border','1px solid red');
        $("#scontact").text('Invalid Contact Number');
    }
});

//signup
// $("#signIn").click(function (){
//     let id=$("#user1").val();
//     let pass=$("#pass1").val();
//     $.ajax({
//         url:`http://localhost:8080/pos/api/v1/customer/`,
//         method:'get',
//         async:true,
//         contentType:'application/json',
//         success:function (data){
//             console.log(data);
//             location.href = "reserve.html";
//             alert("yo yo")
//             // $("#txtUserId").val(data.id);
//             // $("#txtEmail").val(data.email);
//             // $("#txtPassword").val(data.password);
//             // $("#txtlicense").val(data.license);
//             // $("#txtContact").val(data.contact);
//             // $("#txtAddress").val(data.address);
//         }
//     })
//     // alert("Success !");
// });

