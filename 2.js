function menghitungKembalian(belanja, bayar) {
    lembar50 = 0;
    lembar20 = 0;
    lembar10 = 0;
    lembar5 = 0;
    lembar2 = 0;
    lembar1 = 0;
    koin = 0;

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

        document.write(a + "X lembar Rp.50000");
        document.write(b + "X lembar Rp.20000");
        document.write(c + "X lembar Rp.10000");
        document.write(d + "X lembar Rp.5000");
        document.write(e + "X lembar Rp.2000");
        document.write(f + "X lembar Rp.1000");
        document.write(g + "X lembar Rp.500");
    } else if (bayar < belanja) {
        document.write("Maaf uang anda kurang");
    }
}