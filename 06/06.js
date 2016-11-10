
function fizzbuzz(n){
    let result_A = n % 3;
    let result_B = n % 5;
    if(result_A == 0 && result_B == 0){
        return "fizz" + "buzz";
    }

    if(result_A == 0){
        return "fizz";
    }
    if(result_B == 0){
        return "buzz";
    }

    else{
        return n;
    }
}