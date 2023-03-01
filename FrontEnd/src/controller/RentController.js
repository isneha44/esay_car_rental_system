function curruntDate() {
    let today = new Date().toISOString().slice(0, 10);
    $("#rseDate").text(today);

}

curruntDate();
loadAllCars();
loadAllDrivers();
// getTotal();

$("#cusID").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id=$("#cusID").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/customer/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#cusEmail").text(data.email);
            }
        })
    }
});

$("#cmbCarCode").on("change",function (){
    let carId=$("#cmbCarCode").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/car/${carId}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#lblvehBrand").text(data.brand);
            $("#lblvehTrans").text(data.transmission);
            $("#lblvehAvailable").text(data.available);
            $("#lbldalyRate").text(data.dailyRate);
            $("#lbldalyFreeKm").text(data.freeKmforDay);
            $("#lblmonthlyRate").text(data.monthlyRate);
            $("#lblmonthlyFreeKm").text(data.freeKmforMonth);
            $("#lblextraprice").text(data.priceforExtraKm);

        },
        error:function (response){
            alert("Customer Not Found...");
        }
    });
});

function loadAllCars() {
    $("#cmbCarCode").children().remove();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/car',
        method: 'get',
        async: true,

        success: function (data) {
            $('#cmbCarCode').append("<option>--Select--</option>");
            for (let all of data) {
                let row = `<option>${all.carId}</option>`;
                $("#cmbCarCode").append(row);
            }
        }
    });
}

//cmd disable
var checkbox = document.querySelector("#flexRadioDefault1");
var input = document.querySelector("#cmbDriverId");

var toogleInput = function(e){
  input.disabled = !e.target.checked;
};

toogleInput({target: checkbox});
checkbox.addEventListener("change", toogleInput);

// driver load
function loadAllDrivers() {
    $("#cmbDriverId").children().remove();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/driver',
        method: 'get',
        async: true,

        success: function (data) {
            $('#cmbDriverId').append("<option>--Select--</option>");
            for (let all of data) {
                let row = `<option>${all.id}</option>`;
                $("#cmbDriverId").append(row);
            }
        }
    });
}

$("#cmbDriverId").on("change",function (){
    let id=$("#cmbDriverId").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/driver/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#lblDriverName").text(data.name);
            $("#lblDContact").text(data.contact);
             
             
        },
        error:function (response){
            alert("Customer Not Found...");
        }
    });
});

// function getTotal() {
//     let date1=$("#pickup").val();
//     let date2=$("#return").val();
//     var label = $('#lbldalyRate').text()
//
//     let diffDays = date2 - date1;
//     let total=diffDays*label;
//     alert("helo");
//     console.log(label);
//     $("#total").text(total);
// }

