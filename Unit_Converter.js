

alert('Enter feet to convert from Feet To Inch or Enter kilo To convert from Kilo To Gram');


var a = prompt('Enter feet or kilo')

if (a == 'feet') {

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

else if(a=='kilo'){

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
else
{
    document.getElementById('Kilo-container').style.display = 'none';
    document.getElementById('inch-container').style.display = 'none'; 
}