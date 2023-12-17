function tampilkanData() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", 'ambildata.php', true);

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

        var cellImg = newRow.insertCell(0);
        cellImg.innerHTML = `<div style="text-align: center;"><img src="${data[i].foto}" alt="${data[i].nama}" style="max-width: 400px;"></div>`;

        var cellData = newRow.insertCell(1);
        cellData.innerHTML = `
            <p><strong> ${data[i].nama}</strong></p>
            <p> ${data[i].detail}</p>
            <p> ${data[i].jenis}</p>
            <p> ${data[i].penulis}</p>
            <p> ${data[i].tanggal}</p>
            </div>
        `;
    }
}

function tampilkanDetail(index) {
    document.getElementById(`popup${index}`).style.display = "block";
}

function tutupPopup(index) {
    document.getElementById(`popup${index}`).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    tampilkanData();
});