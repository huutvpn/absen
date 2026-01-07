const siswa = [
"Adilanurhasanah","Ahmad Rendi","Anis","Arsah","Arsih",
"Desi Ferbariani","Ikbalmaulana","Iman Sulaiman",
"Muhamad Fadel Alafsad","Muhamad Firman",
"Muhamad Fikri Kurniawan","M Gojali","Nazwa",
"Reza Syaputra","Salsabila","Siti Aenul Istikomah",
"Syifa Nurfitriani","Siska Adianti","Silma Kafah",
"Siti Uswatun Hasanah"
];

const bulanSelect = document.getElementById("bulan");
const tahunSelect = document.getElementById("tahun");

for (let i = 1; i <= 12; i++)
  bulanSelect.innerHTML += `<option value="${i}">${i}</option>`;

for (let y = 2024; y <= 2030; y++)
  tahunSelect.innerHTML += `<option value="${y}">${y}</option>`;

function loadAbsen() {
  const tbody = document.getElementById("absen");
  tbody.innerHTML = "";

  siswa.forEach((nama, i) => {
    tbody.innerHTML += `
    <tr>
      <td>${i+1}</td>
      <td>${nama}</td>
      <td><input type="radio" name="a${i}"></td>
      <td><input type="radio" name="a${i}"></td>
      <td><input type="radio" name="a${i}"></td>
      <td><input type="radio" name="a${i}"></td>
    </tr>`;
  });

  hitungRekap();
}

function hitungRekap() {
  const rekap = document.getElementById("rekap");
  rekap.innerHTML = "";

  siswa.forEach(nama => {
    rekap.innerHTML += `
    <tr>
      <td>${nama}</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>`;
  });
}

function exportCSV() {
  let csv = "Nama,Hadir,Izin,Sakit,Alpha\n";
  document.querySelectorAll("#rekap tr").forEach(tr => {
    let row = [];
    tr.querySelectorAll("td").forEach(td => row.push(td.innerText));
    csv += row.join(",") + "\n";
  });

  let blob = new Blob([csv], { type: "text/csv" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "rekap_absen_bulanan.csv";
  a.click();
}
