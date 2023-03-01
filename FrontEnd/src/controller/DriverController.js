getAllDriver();
$("#btnDAdd").click(function (){

    let id = $("#txtdriverID").val();
    let name = $("#txtname").val();
    let address = $("#txtaddress").val();
    let contact = $("#txtcontact").val();

    $.ajax({
        url:'http://localhost:8080/pos/api/v1/driver',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            id:id,
            name:name,
            address:address,
            contact:contact
        }),
        success:function (data){
            console.log(data);
            getAllDriver();
            clearDriver();
        }
    });
});

$("#btnDSearch").click(function (){
    let id=$("#txtdriverID").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/driver/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtname").val(data.name);
            $("#txtaddress").val(data.address);
            $("#txtcontact").val(data.contact);
        }
    })
});

$("#txtdriverID").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id = $("#txtdriverID").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/driver/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#txtname").val(data.name);
                $("#txtaddress").val(data.address);
                $("#txtcontact").val(data.contact);
            }
        })
    }
});

$("#btnDUpdate").click(function (){
    let id = $("#txtdriverID").val();
    let name = $("#txtname").val();
    let address = $("#txtaddress").val();
    let contact = $("#txtcontact").val();

    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/driver',
        method: 'put',
        async:true,
        contentType: 'application/json',
        data: JSON.stringify({
            id:id,
            name:name,
            address:address,
            contact:contact
        }),

        success:function (data){
            console.log(data);
            getAllDriver();
            clearDriver();
        }
    });
});

$("#btnDDelete").click(function () {
    let id = $("#txtdriverID").val();

    let option=confirm(`Do You Want to Delete Customer ? id:${id}`);
    if (option) {
        $.ajax({
            url: `http://localhost:8080/pos/api/v1/driver/?id=${id}`,
            method: 'delete',
            async: true,
            contentType: 'application/json',

            success: function (data) {
                console.log("deleted");
                alert("Driver Successfully Deleted !");
                getAllDriver();
                clearDriver();
            }

        })
    }

})

function getAllDriver(){
    $("#tblDriver").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/driver',
        method:'get',
        async:true,

        success:function (data,textState, xhr){
            for (var driver of data) {
                console.log(driver);
                let row=`<tr><td>${driver.id}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.contact}</td></tr>`;
                $("#tblDriver").append(row);
            }
        }
    });
}

function clearDriver() {
    $("#txtdriverID").val("");
    $("#txtname").val("");
    $("#txtaddress").val("");
    $("#txtcontact").val("");

}

$("#txtdriverID").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtname').focus();
    }
});

$("#txtname").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtaddress').focus();
    }
});

$("#txtaddress").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtcontact').focus();
    }
});
$("#txtcontact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnDAdd').focus();
    }
});

let driverIDRegEx=/^(D-)[0-9]{1,3}$/;
$("#txtdriverID").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtname').focus();
    }
    let inputID=$("#txtdriverID").val();
    if (driverIDRegEx.test(inputID)){
        $("#txtdriverID").css('border','1px solid green');
        $("#lbldriverID").text("");
    }else{
        $("#txtdriverID").css('border','1px solid red');
        $("#lbldriverID").text('Invalid Driver ID (D-001)');
    }
});

let dcontact=/^[0-9]{1,10}$/;
$("#txtcontact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnDAdd').focus();
    }
    let inputID=$("#txtcontact").val();
    if (dcontact.test(inputID)){
        $("#txtcontact").css('border','1px solid green');
        $("#lblcontact").text("");
    }else{
        $("#txtcontact").css('border','1px solid red');
        $("#lblcontact").text('Invalid Contact Number');
    }
});

