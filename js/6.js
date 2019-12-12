document.getElementById("tombol");
addEventListener("click", buyEgg);

function buyEgg(x, y) {
    x = document.getElementById("tgl").value;
    y = document.getElementById("uang").value;
    var telur, lusin, sisa, bonus, total, kembalian;
    var ganjil, prima, kel5;
    var a = "";
    sisa = 0;
    telur = Math.floor(y / 2500);
    lusin = Math.floor(telur / 12);
    kembalian = y % 2500;

    if (kembalian < 12)
        sisa = kembalian;

    if (x > 0 && x <= 31) {

        prima = 1;
        for (let i = 2; i < x; i++) {
            if (x % i == 0)
                prima = 0;
        }

        if (x % 2 == 1)
            ganjil = 1;

        bonus = 0;
        if (prima == 1) {
            bonus = lusin * 2;
        } else if (ganjil != prima) {
            bonus = lusin * 3;
        }

        kel5 = 0;
        for (let i = 0; i <= x; i++) {
            if (x % 5 == 0) {
                kel5 = 1;
            }
        }

        if (kel5 == 0) {
            if (bonus % 2 == 0) {
                bonus = bonus * 10;
            } else {
                bonus = bonus * 5;
            }
        }

        total = telur + bonus + sisa;
        a += "Total Semua Telur	: " + total + " Telur \n";
        a += "Dan Kembalian		: " + kembalian + " Rupiah \n";

    } else {
        a = "Maaf tidak ada Tanggal segitu \n";
    }
    document.getElementById("disini").innerText = a;
}