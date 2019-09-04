/* const mahasiswa = {
    nama: "Wahyu Adi Putra",
    nba: "09.00.30387",
    email: "Wahyu Adi Putra"
}

console.log(JSON.stringify(mahasiswa)); */

/* let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}

xhr.open('GET', 'coba.json', true);
xhr.send(); */

//coba dengan jquery

$.getJSON('coba.JSON', function (data) {
    console.log(data);
});