document.addEventListener('DOMContentLoaded', () =>{
    //Obtener la imagen
    const imagenHero = document.querySelector('.hero');

    //inicializar las variables
    let i = 0;
    let tiempo = 0;

    //Arreglos con imagenes de fondo 

   
/*
    setInterval(() => {
        imagenHero.style.backgroundPositionY = '-' +tiempo+ 'px';

        if(tiempo > 200){
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";

            if(i === imagenes.length - 1){
                i = 0;

            }else{
                i++;
            }
            //console.log (imagenes[i]);
        }
            tiempo ++;

        tiempo += 1;
        //console.log(tiempo); 
    }, 100)
*/
    
    //Boton flotante en el footer
    const btnFlotante = document.querySelector('.btn-flotante');
    console.log(btnFlotante)
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault()

        //Prevenimos el default, pero ejecutamos el siguiente código

        const footer = document.querySelector('#footer');
        
        if(footer.classList.contains('activo') ){
            //si lo contiene ejecuta este codigo
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
            
        }else{
            // si no lo contiene, ejecuta este codgio
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }
    })
});

