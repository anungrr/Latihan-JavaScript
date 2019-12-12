document.getElementById("tombol");
addEventListener("click", voucher);

function voucher(pilih, uang) {
    var bayar, diskon, kembalian;
    pilih = document.querySelector('input[name = "voucher"]:checked').value;
    uang = document.getElementById("uang").value;
    var disini = "";
    switch (pilih) {
        case '1':
            if (uang >= 20000) {
                diskon = 0.50 * uang;
                if (diskon > 20000) {
                    diskon = 20000;
                }
            } else
                diskon = 0;

            break;
        case '2':
            if (uang >= 50000) {
                diskon = 0.30 * uang;
                if (diskon > 40000) {
                    diskon = 40000;
                }
            } else
                diskon = 0;

            break;
        default:
            disini += "Maaf hanya tersedia 2 vocer \n";
            break;
    }

    bayar = uang - diskon;
    kembalian = uang - bayar;

    if (diskon == 0) {
        disini += "Maaf Vocer tidak bisa di pakai \n";
    }

    disini += "\n \n";
    disini += "Uang Yang Harus Di Bayar : " + bayar + "\n";
    disini += "Diskon : " + diskon + "\n";
    disini += "Kembalian : " + kembalian + "\n";
    document.getElementById("disini").innerText = disini;
}