document.getElementById("tombol");
addEventListener("click", nomor);

function nomor() {
    var array = [1, 2, 3, 4, 5];
    var max, min;
    var a = "";

    for (let i = 0; i < array.length; i++) {
        a += "Angka " + array[i] + " : ";
        sum = 0;
        for (let j = 0; j < array.length; j++) {
            if (j == i)
                j++;
            if (j > 4)
                break;
            a += array[j];
            if (j < 4)
                a += " + ";
            sum += array[j];
        }
        a += " = " + sum + "\n";
        if (i == 0) {
            min = sum;
            max = sum;
        } else if (min > sum) {
            min = sum;
        } else if (max < sum) {
            max = sum;
        }
    }
    a += "\nNilai Minimum = " + min + "\n";
    a += "Nilai Maximum = " + max + "\n";
    document.getElementById("disini").innerText = a;
}