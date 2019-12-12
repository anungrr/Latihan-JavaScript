document.getElementById("tombol");
addEventListener("click", generate);

function generate() {
    var x = document.getElementById("input").value;
    var i, j, k, n;
    var seri = "";
    for (i = 0; i < x; i++) {
        for (j = 0; j < 4; j++) {
            for (k = 0; k < 4; k++) {
                n = Math.floor(Math.random() * 2);
                if (n == 0) {
                    seri += Math.floor(Math.random() * 10);
                    //document.getElementById("disini").innerHTML = a;
                } else if (n == 1) {
                    seri += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
                    // document.getElementById("disini").innerHTML = c;
                }
            }
            if (j != 3) {
                seri += " - ";
            }
            if (j == 3) {
                seri += "\n";
            }
        }
    }
    document.getElementById("disini").innerText = seri;
}