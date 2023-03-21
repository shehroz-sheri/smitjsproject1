// let newName = document.getElementById('nameInHome');
// newName.innerHTML = document.cookie;

document.getElementById('nameInHome').innerHTML = localStorage.getItem("userName");



let output = document.getElementById('result-box');
document.getElementById('clear-btn-2').onclick = function () {
    output.innerHTML = "";
}


// Toast Function
function toast(msg, color) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            // background: "linear-gradient(to right, #00b09b, #96c93d)",
            background: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

var cities = ['Faisalabad ', 'Lahore ', 'Karachi ', 'Islamabad ', 'Burewala ', 'Sheikhupura ', 'Kashmir '];

document.getElementById('add-city').onclick = function () {
    output.innerHTML = null;
    // do {
    //     var name = prompt("enter your city name");
    //     var inputField = name;
    // }
    // while (!inputField) {

    //     inputField = inputField.toLowerCase();
    //     let firstInputField = inputField.charAt(0).toUpperCase();
    //     let finalInputField = firstInputField + inputField.substr(1);
    //     for (let i = 0; i < cities.length; i++) {
    //         if (finalInputField == cities[i]) {
    //             var msg = '"' + finalInputField + '"' + ' is already in the list';
    //             let color = "linear-gradient(to right, #b01a00, #a65446)";
    //             toast(msg, color);
    //             return;
    //         }
    //     }
    //     cities.push(finalInputField);
    //     var msg = '"' + finalInputField + '"' + ' has been added in the list';
    //     let color = "linear-gradient(to right, #00b09b, #96c93d)";
    //     toast(msg, color);
    // }









    var name = prompt("enter your city name");
    var inputField = name;
    var color = "linear-gradient(to right, #b01a00, #a65446)";
    if (!inputField) {
        var msg = 'Please enter city name.';
        toast(msg, color);
        return;
    }
    if (inputField.length < 3) {
        var msg = 'Please enter a city in proper format.';
        toast(msg, color);
        return;
    }

    inputField = inputField.toLowerCase();
    let firstInputField = inputField.charAt(0).toUpperCase();
    let finalInputField = firstInputField + inputField.substr(1);
    for (let i = 0; i < cities.length; i++) {
        if (finalInputField == cities[i]) {
            var msg = '"' + finalInputField + '"' + ' is already in the list';
            let color = "linear-gradient(to right, #b01a00, #a65446)";
            toast(msg, color);
            return;
        }

    }
    cities.push(finalInputField);
    var msg = '"' + finalInputField + '"' + ' has been added in the list';
    color = "linear-gradient(to right, #00b09b, #96c93d)";
    toast(msg, color);



}

document.getElementById('print-cities').onclick = function () {
    output.innerHTML = "";
    let serialNumber = 1;
    for (let i = 0; i < cities.length; i++) {
        output.innerHTML += serialNumber + ') ' + cities[i] + '<br>';
        serialNumber++;
    }
    console.log(cities);
}