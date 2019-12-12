document.getElementById("tombol");
addEventListener("click", drawLine);


//console.log(kata);

function drawLine() {
    var kata = document.getElementById("kata").value;
    var size = kata.length;
    var a = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j == i)
                a += kata[j];
            else
                a += "___";
        }
        a += "\n";
    }
    document.getElementById("disini").innerText = a;
}