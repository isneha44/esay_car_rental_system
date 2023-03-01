getAllCars();
$("#btnCarAdd").click(function (){
    let carId = $("#txtcarcode").val();
    let brand = $("#txtbrand").val();
    let category = $("#txtcategory").val();
    let transmission = $("#txttransmission").val();
    let fuelType = $("#txtfueltype").val();
    let dailyRate = $("#txtdailyrate").val();
    let monthlyRate = $("#txtmonthlyrate").val();
    let freeKmforDay = $("#txtfreeday").val();
    let freeKmforMonth = $("#txtfreemoth").val();
    let priceforExtraKm = $("#txtextrafee").val();
    let available = $("#txtavailable").val();
    let registrationNumber = $("#txtregnumber").val();
    let color = $("#txtcolor").val();

   $.ajax({
       url:'http://localhost:8080/pos/api/v1/car',
       method:'post',
       async:true,
       contentType:'application/json',
       data:JSON.stringify({
           carId:carId,
           brand:brand,
           category:category,
           transmission:transmission,
           fuelType:fuelType,
           dailyRate:dailyRate,
           monthlyRate:monthlyRate,
           freeKmforDay:freeKmforDay,
           freeKmforMonth:freeKmforMonth,
           priceforExtraKm:priceforExtraKm,
           available:available,
           registrationNumber:registrationNumber,
           color:color
       }),

       success:function (data){
           console.log(data);
           getAllCars();
           clearcar();
       }
   });
    alert("Car Successfully Added !");
});

$("#btnCarUpdate").click(function (){
    let carId = $("#txtcarcode").val();
    let brand = $("#txtbrand").val();
    let category = $("#txtcategory").val();
    let transmission = $("#txttransmission").val();
    let fuelType = $("#txtfueltype").val();
    let dailyRate = $("#txtdailyrate").val();
    let monthlyRate = $("#txtmonthlyrate").val();
    let freeKmforDay = $("#txtfreeday").val();
    let freeKmforMonth = $("#txtfreemoth").val();
    let priceforExtraKm = $("#txtextrafee").val();
    let available = $("#txtavailable").val();
    let registrationNumber = $("#txtregnumber").val();
    let color = $("#txtcolor").val();

    let option=confirm(`Do You Want to Update Car ? id:${carId}`);
    if (option) {

        $.ajax({
            url: 'http://localhost:8080/pos/api/v1/car',
            method: 'put',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify({
                carId: carId,
                brand: brand,
                category: category,
                transmission: transmission,
                fuelType: fuelType,
                dailyRate: dailyRate,
                monthlyRate: monthlyRate,
                freeKmforDay: freeKmforDay,
                freeKmforMonth: freeKmforMonth,
                priceforExtraKm: priceforExtraKm,
                available:available,
                registrationNumber: registrationNumber,
                color: color
            }),

            success: function (data) {
                console.log(data);
                getAllCars();
                clearcar();
                alert("Car Successfully Updated !");
            }
        });
    }
});


$("#btnCarSearch").click(function (){
    let id = $("#txtcarcode").val();
   $.ajax({
       url:`http://localhost:8080/pos/api/v1/car/${id}`,
       method:'get',
       async:true,
       contentType:'application/json',

       success:function (data){
           console.log(data);
           $("#txtbrand").val(data.brand);
           $("#txtcategory").val(data.category);
           $("#txttransmission").val(data.transmission);
           $("#txtfueltype").val(data.fuelType);
           $("#txtdailyrate").val(data.dailyRate);
           $("#txtmonthlyrate").val(data.monthlyRate);
           $("#txtfreeday").val(data.freeKmforDay);
           $("#txtfreemoth").val(data.freeKmforMonth);
           $("#txtextrafee").val(data.priceforExtraKm);
           $("#txtavailable").val(data.available);
           $("#txtregnumber").val(data.registrationNumber);
           $("#txtcolor").val(data.color);
       }
   });
});

$("#btnCarDelete").click(function () {
    let carId = $("#txtcarcode").val();

    let option=confirm(`Do You Want to Delete Car ? id:${carId}`);
    if (option) {
        $.ajax({
            url: `http://localhost:8080/pos/api/v1/car/?id=${carId}`,
            method: 'delete',
            async: true,
            contentType: 'application/json',

            success: function (data) {
                console.log("deleted");
                getAllCars();
                clearcar();
                alert("Car Successfully Deleted !");
            }

        })
    }

})


$("#txtcarcode").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id = $("#txtcarcode").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/car/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',

            success:function (data){
                console.log(data);
                $("#txtbrand").val(data.brand);
                $("#txtcategory").val(data.category);
                $("#txttransmission").val(data.transmission);
                $("#txtfueltype").val(data.fuelType);
                $("#txtdailyrate").val(data.dailyRate);
                $("#txtmonthlyrate").val(data.monthlyRate);
                $("#txtfreeday").val(data.freeKmforDay);
                $("#txtfreemoth").val(data.freeKmforMonth);
                $("#txtextrafee").val(data.priceforExtraKm);
                $("#txtavailable").val(data.available);
                $("#txtregnumber").val(data.registrationNumber);
                $("#txtcolor").val(data.color);
            }
        });
    }
});

// $("#btnCarLoad").click(function (){
//     getAllCars();
// });

function getAllCars(){
    $("#tblCar").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/car',
        method:'get',
        async:true,

        success:function (data){
            for (let cars of data) {
                let row=`<tr><td>${cars.carId}</td><td>${cars.brand}</td><td>${cars.category}</td><td>${cars.transmission}</td><td>${cars.fuelType}</td><td>${cars.dailyRate}</td><td>${cars.monthlyRate}</td><td>${cars.freeKmforDay}</td><td>${cars.freeKmforMonth}</td><td>${cars.priceforExtraKm}</td><td>${cars.available}</td><td>${cars.registrationNumber}</td><td>${cars.color}</td></tr>`;
                $("#tblCar").append(row);
            }
        }
    });
}

function clearcar() {
      $("#txtcarcode").val("");
      $("#txtbrand").val("");
      $("#txtcategory").val("");
      $("#txttransmission").val("");
     $("#txtfueltype").val("");
     $("#txtdailyrate").val("");
     $("#txtmonthlyrate").val("");
     $("#txtfreeday").val("");
     $("#txtfreemoth").val("");
     $("#txtextrafee").val("");
     $("#txtavailable").val("");
     $("#txtregnumber").val("");
    $("#txtcolor").val("");
}
$("#txtcarcode").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtbrand').focus();
    }
});

$("#txtbrand").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtcategory').focus();
    }
});

$("#txtcategory").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txttransmission').focus();
    }
});
$("#txttransmission").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfueltype').focus();
    }
});
$("#txtfueltype").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtdailyrate').focus();
    }
});
$("#txtdailyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtmonthlyrate').focus();
    }
});
$("#txtmonthlyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreeday').focus();
    }
});
$("#txtfreeday").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreemoth').focus();
    }
});
$("#txtfreemoth").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtextrafee').focus();
    }
});
$("#txtextrafee").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtavailable').focus();
    }
});
$("#txtavailable").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtregnumber').focus();
    }
});
$("#txtregnumber").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtcolor').focus();
    }
});
$("#txtcolor").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnCarAdd').focus();
    }
});

let carIDRegEx=/^(Car-)[0-9]{1,3}$/;
$("#txtcarcode").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtbrand').focus();
    }
    let inputID=$("#txtcarcode").val();
    if (carIDRegEx.test(inputID)){
        $("#txtcarcode").css('border','1px solid green');
        $("#lblcarcode").text("");
    }else{
        $("#txtcarcode").css('border','1px solid red');
        $("#lblcarcode").text('Invalid Car Code (Car-001)');
    }
});

let dailyRateRegEx=/^[0-9]{1,10}$/;
$("#txtdailyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtmonthlyrate').focus();
    }
    let inputID=$("#txtdailyrate").val();
    if (dailyRateRegEx.test(inputID)){
        $("#txtdailyrate").css('border','1px solid green');
        $("#lbldailyrate").text("");
    }else{
        $("#txtdailyrate").css('border','1px solid red');
        $("#lbldailyrate").text('Daily rate must be a number');
    }
});

let monthlyRateRegEx=/^[0-9]{1,10}$/;
$("#txtmonthlyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreeday').focus();
    }
    let inputID=$("#txtmonthlyrate").val();
    if (monthlyRateRegEx.test(inputID)){
        $("#txtmonthlyrate").css('border','1px solid green');
        $("#lblmonthlyrate").text("");
    }else{
        $("#txtmonthlyrate").css('border','1px solid red');
        $("#lblmonthlyrate").text('Monthly rate must be a number');
    }
});

let freeDayRegEx=/^[0-9]{1,10}$/;
$("#txtfreeday").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreemoth').focus();
    }
    let inputID=$("#txtfreeday").val();
    if (freeDayRegEx.test(inputID)){
        $("#txtfreeday").css('border','1px solid green');
        $("#lblfreeday").text("");
    }else{
        $("#txtfreeday").css('border','1px solid red');
        $("#lblfreeday").text('Free km for a day must be a number');
    }
});

let freeMonthRegEx=/^[0-9]{1,10}$/;
$("#txtfreemoth").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtextrafee').focus();
    }
    let inputID=$("#txtfreemoth").val();
    if (freeMonthRegEx.test(inputID)){
        $("#txtfreemoth").css('border','1px solid green');
        $("#lblfreemoth").text("");
    }else{
        $("#txtfreemoth").css('border','1px solid red');
        $("#lblfreemoth").text('Free km for a month must be a number');
    }
});

let extraFeeRegEx=/^[0-9]{1,10}$/;
$("#txtextrafee").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtavailable').focus();
    }
    let inputID=$("#txtextrafee").val();
    if (extraFeeRegEx.test(inputID)){
        $("#txtextrafee").css('border','1px solid green');
        $("#lblextrafee").text("");
    }else{
        $("#txtextrafee").css('border','1px solid red');
        $("#lblextrafee").text('Price for extra km must be a number');
    }
});
let availableRegEx=/^[0-9]{1,10}$/;
$("#txtavailable").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtregnumber').focus();
    }
    let inputID=$("#txtavailable").val();
    if (availableRegEx.test(inputID)){
        $("#txtavailable").css('border','1px solid green');
        $("#lblavailable").text("");
    }else{
        $("#txtavailable").css('border','1px solid red');
        $("#lblavailable").text('Price for extra km must be a number');
    }
});
