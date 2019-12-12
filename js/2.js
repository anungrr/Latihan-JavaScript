document.getElementById("tombol");
addEventListener("click", menghitungKembalian);

function menghitungKembalian(belanja, bayar) {
    belanja = document.getElementById("belanja").value;
    bayar = document.getElementById("bayar").value;
    lembar50 = 0;
    lembar20 = 0;
    lembar10 = 0;
    lembar5 = 0;
    lembar2 = 0;
    lembar1 = 0;
    koin = 0;
    total = "";

    if (bayar > belanja) {
        kembalian = bayar - belanja;

        lembar50rb = kembalian % 50000;
        a = kembalian / 50000;

        lembar20rb = lembar50rb % 20000;
        b = lembar50rb / 20000;

        lembar10rb = lembar20rb % 10000;
        c = lembar20rb / 10000;

        lembar5rb = lembar10rb % 5000;
        d = lembar10rb / 5000;

        lembar2rb = lembar5rb % 2000;
        e = lembar5rb / 2000;

        lembar1rb = lembar2rb % 1000;
        f = lembar2rb / 1000;

        koin = lembar1rb % 500;
        g = lembar1rb / 500;

        total += Math.floor(a) + "X lembar Rp.50000\n";
        total += Math.floor(b) + "X lembar Rp.20000\n";
        total += Math.floor(c) + "X lembar Rp.10000\n";
        total += Math.floor(d) + "X lembar Rp.5000\n";
        total += Math.floor(e) + "X lembar Rp.2000\n";
        total += Math.floor(f) + "X lembar Rp.1000\n";
        total += Math.floor(g) + "X lembar Rp.500\n";
    } else if (bayar < belanja) {
        total += "Maaf uang anda kurang\n";
    }
    document.getElementById("disini").innerText = total;
}