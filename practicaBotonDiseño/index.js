window.onload = function () {

    let boton = document.getElementById('boton');
    let bdg = document.querySelector('#bdg');
    let n = 0;


    boton.addEventListener('click', function () {
        n++;
        bdg.innerHTML = n;
        let alerta = document.querySelector('#alerta');

        if (n == 50) {
            alerta.style.display = 'contents';
            boton.disabled = true;
            let x = document.querySelector('#cerrar');
            x.addEventListener('click', clickear);
        }
    })
    //esta es la funcion del click
    function clickear() {
        alerta.style.display = 'none';
        boton.disabled = false;
        n = 0;
        bdg.innerHTML = n;
    }
}


