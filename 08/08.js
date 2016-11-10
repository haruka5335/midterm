

function isLeapYear(yearlnAd){
    let year = yearlnAd;
    if(year % 4 ==0 && year % 100 >= 1){
        return true;
    }

    if(year % 4 ==0 && year % 100 == 0 && year % 400 >= 1){
        return false;
    }

    if(year % 4 == 0 && year % 400 == 0){
        return true;
    }
    else{return false;}
    }
