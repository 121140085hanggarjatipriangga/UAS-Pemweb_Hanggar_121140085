function tambahData() {
    if (validasiForm()) {
        var nama = document.getElementById("nama").value;
        var penulis = document.getElementById("penulis").value;
        var detail = document.getElementById("detail").value;
        var tanggal = document.getElementById("tanggal").value;
        var jenis = document.getElementById("jenis").value;

        var fotoInput = document.getElementById("foto");
        var foto = fotoInput.files[0];

        var formData = new FormData();
        formData.append("nama", nama);
        formData.append("detail", detail);
        formData.append("tanggal", tanggal);
        formData.append("jenis", jenis);
        formData.append("penulis", penulis);
        formData.append("foto", foto);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "tambahdata.php", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                tampilkanData();
            }
        };

        xhr.send(formData);
    }
}

function tampilkanData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ambildata.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            tampilkanDataDiTabel(data);
        }
    };

    xhr.send();
}

function tampilkanDataDiTabel(data) {
    var tabel = document.getElementById("tabelBerita").getElementsByTagName('tbody')[0];
    tabel.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var newRow = tabel.insertRow(tabel.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);

        cell1.innerHTML = data[i].nama;
        cell2.innerHTML = data[i].detail;
        cell3.innerHTML = data[i].tanggal;
        cell4.innerHTML = data[i].jenis;
        cell5.innerHTML = data[i].penulis;
        cell6.innerHTML = `<img src="${data[i].foto}" alt="${data[i].nama}" style="max-width: 100px;">`;

        cell7.innerHTML = `<button class="hapusDataButton" data-id="${data[i].id}">Hapus</button>`;

        cell7.querySelector('.hapusDataButton').addEventListener('click', function (event) {
            var id = event.target.getAttribute("data-id");
            hapusData(id);
        });

    }
}

function hapusData(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "hapusdata.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            tampilkanData();
        }
    };

    xhr.send("id=" + id);
}

function validasiForm() {
    var nama = document.getElementById("nama").value;
    var penulis = document.getElementById("penulis").value;
    var detail = document.getElementById("detail").value;
    var jenis = document.getElementById("jenis").value;

    if (nama.trim() === "" || jenis.trim() === "" || detail.trim() === ""|| penulis.trim() === "") {
        alert("Harap isi semua field!");
        return false;
    }

    var fotoInput = document.getElementById("foto");

    if (fotoInput.files.length === 0) {
        alert("Pilih foto!");
        return false;
    }

    return true;
}

function resetForm() {
    document.getElementById("pariwisataForm").reset();
}

function simpanInfoSession() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "simpaninfo.php", true);
    xhr.send();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
    return sessionStorage.getItem(key);
}

function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
}

document.getElementById("beritaForm").addEventListener("submit", function (event) {
    tambahData();
    event.preventDefault();

    setLocalStorage("last_action", new Date().getTime());
});

document.addEventListener("DOMContentLoaded", function () {
    tampilkanData();
});

document.getElementById("resetFormButton").addEventListener("click", function () {
    resetForm();

    setCookie("last_action", new Date().getTime(), 1);
});

