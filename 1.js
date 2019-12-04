var ini = document.getElementById("disini");
document.getElementById("tombol").
addEventListener("click", nomor);

function nomor() {
    var array = [1, 2, 3, 4, 5];
    var max, min;

    for (let i = 0; i < array.length; i++) {
        document.getElementById("disini").innerHTML = "Angka " + array[i] + " : ";
        sum = 0;
        for (let j = 0; j < array.length; j++) {
            if (j == i)
                j++;
            if (j > 4)
                break;
            document.getElementById("disini").innerHTML = array[j];
            if (j < 4)
                document.getElementById("disini").innerHTML = " + ";
            sum += array[j];
        }
        document.getElementById("disini").innerHTML = " = " + sum + "</br>";

        if (i == 0) {
            min = sum;
            max = sum;
        } else if (min > sum) {
            min = sum;
        } else if (max < sum) {
            max = sum;
        }
    }
    document.getElementById("disini").innerHTML = "Nilai Minimum = " + min + "</br>";
    document.getElementById("disini").innerHTML = "Nilai Maximum = " + max + "</br>";
}
// ini.innerHTML = nomor;