var hr = 00;
var min = 00;
var second = 00;
var milli = 00;

var t;

let startimer = () => {

    if (milli<=100){
        milli++;
        document.getElementById('milli').innerHTML = print(milli)
    } else{
        milli=0;
        second++;
        document.getElementById('milli').innerHTML = print(milli)

    }

    if (second <= 59) {
       
        document.getElementById('sec').innerText = print(second)
    } else {
        second = 0;
        min++;
        document.getElementById('sec').innerHTML = print(second)
    } if (min <= 59) {
        document.getElementById('min').innerHTML = print(min)
    } else {
        min = 0;
        hr++;
        document.getElementById('hr').innerHTML =print(hr)

    } if (hr <= 24) {
        document.getElementById('hr').innerHTML = print(hr)
    } else {
        stop();
    }



}

let start = () => {
    t = setInterval(startimer, 10)
    
}

let pause = () => {
    clearInterval(t);
    
}

let reset = () => {
    clearInterval(t);
    hr=0;
    min=0;
    second=0;
    milli=0;
    document.getElementById('hr').innerHTML='00'
    document.getElementById('min').innerHTML='00'
    document.getElementById('sec').innerHTML='00'
    document.getElementById('milli').innerHTML='00'
    

}

let print = (val) =>{
    if(val<=9){
        return '0'+ val;
    } else{
        return val;
    }
}