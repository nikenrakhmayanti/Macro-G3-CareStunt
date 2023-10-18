// JavaScript untuk menangani penilaian bintang yang dapat diklik
var ratings = document.querySelectorAll(".rating");

ratings.forEach(function (rating) {
  var stars = rating.querySelectorAll(".fa-star");

  stars.forEach(function (star, index) {
    star.addEventListener("click", function () {
      for (var i = 0; i <= index; i++) {
        stars[i].classList.add("checked");
      }
      for (var i = index + 1; i < stars.length; i++) {
        stars[i].classList.remove("checked");
      }
    });
  });
});
// Perhitungan Gizi
document.getElementById("btnHitung").addEventListener("click", function () {
  // Ambil nilai dari input
  var jenisKelamin = document.getElementById("jenisKelamin").value;
  var beratBadan = parseFloat(document.getElementById("beratBadan").value);
  var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
  var umur = parseInt(document.getElementById("umur").value);

  // Lakukan perhitungan (contoh perhitungan sederhana)
  var kaloriMinimal = 0;
  var totalKalori = 0;
  if (jenisKelamin === "pria") {
    // Perhitungan untuk pria
    kaloriMinimal =
      66.5 + 13.75 * beratBadan + 5.003 * tinggiBadan - 6.755 * umur;
  } else if (jenisKelamin === "wanita") {
    // Perhitungan untuk wanita
    kaloriMinimal =
      655.1 + 9.563 * beratBadan + 1.85 * tinggiBadan - 4.676 * umur;
  }

  // Menampilkan hasil perhitungan di kotak hasil
  document.getElementById("kaloriMinimal").value = kaloriMinimal.toFixed(2);

  // Menghitung total kalori harian (misalnya, dengan menambahkan 300 kalori)
  totalKalori = kaloriMinimal + 300;

  // Menampilkan total kalori harian di kotak hasil
  document.getElementById("totalKalori").value = totalKalori.toFixed(2);
});

// Tombol Reset (input dan hasil)
document.getElementById("btnReset").addEventListener("click", function () {
  document.getElementById("nama").value = "";
  document.getElementById("jenisKelamin").value = "pria";
  document.getElementById("beratBadan").value = "";
  document.getElementById("tinggiBadan").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("kaloriMinimal").value = "";
  document.getElementById("totalKalori").value = "";
});

// Tombol Reset (kebutuhan kalori)
document
  .getElementById("btnResetKebutuhanKalori")
  .addEventListener("click", function () {
    document.getElementById("kaloriMinimal").value = "";
    document.getElementById("totalKalori").value = "";
  });
