function isIt2Power(form) {
    var x = document.form.input.value;
    let dividedNumber = x/2;
    console.log(dividedNumber);

    while (dividedNumber > 1) {
        dividedNumber = dividedNumber / 2;
        console.log(dividedNumber);
    }

    if (dividedNumber == 1){
        result = true + ' : le nombre ' + x + ' est une puissance de 2';
    } else {
        result = false + " : le nombre " + x + " n'est pas une puissance de 2";
    }

    document.getElementById("isIt2Power").innerHTML = result;
}



