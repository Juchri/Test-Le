window.onload = function subject1() {

    sumOfPrimeNumbersBeforme1000 = 0;

    for (x=1; x < 1000; x++){
        if( x % 3 == 0 || x % 5 == 0){
            sumOfPrimeNumbersBeforme1000 = sumOfPrimeNumbersBeforme1000 + x;
        }
    }

    document.getElementById("rightNumber").innerHTML = sumOfPrimeNumbersBeforme1000;
    console.log(sumOfPrimeNumbersBeforme1000); // response: "233168"
}

