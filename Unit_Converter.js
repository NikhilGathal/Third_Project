

alert('Enter inch to convert Inch To Feet and Enter kilo To convert Kilo To Gram');


var a = prompt('Enter Unit You want to convert ')

console.log(a)


if (a == 'inch') {

    document.getElementById('Kilo-container').style.display = 'none';

    var feet = document.getElementById('feet')

    var inch = document.getElementById('inch')

    feet.addEventListener('input', function () {
        let f = this.value;
        let i = f * 12;
        inch.value = i;
    }
    );


    inch.addEventListener('input', function () {
        let i = this.value;
        let f = i / 12;
        if (!Number.isInteger(f)) {
            f = f.toFixed(2)
        }
        feet.value = f;
    }
    );

}

else if(a == 'kilo'){

    document.getElementById('inch-container').style.display = 'none'; 

    var kilo = document.getElementById('Kilo')

    var gram = document.getElementById('Gram')

    kilo.addEventListener('input', function () {
        let k = this.value;
        let g = k * 1000;
        gram.value = g;
    }
    );


    gram.addEventListener('input', function () {
        let k = this.value;
        let g = k / 1000;
        if (!Number.isInteger(g)) {
            g = g.toFixed(2)
        }
        kilo.value = g;
    }
    );

}