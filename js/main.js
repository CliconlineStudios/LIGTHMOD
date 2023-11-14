let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("sharelink").style.display = "none";
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}


function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();     
        
}


function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}


//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
  
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
   

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

 
  
// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        
// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  let items = document.getElementById("numer2").textContent;
   if (items == 0 ){
    console.log('noenvia')
   }else {
    let allTasks = "";
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for (let i = 0; i < tasks.length; i++) {
      allTasks +=  "Raza:" + tasks[i].title + " Un " + tasks[i].description + " / " + "\n";
    }
//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "593996079530";
let cliente = document.querySelector("#cliente").value;
let Ubicacion = document.querySelector("#Ubicacion").value;
let venta = document.querySelector("#venta").value;
let resp = document.querySelector("#respuesta");
let cantidad = index2;
let productos = allTasks ;

resp.classList.remove("fail");
resp.classList.remove("send");

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
      *Light Mod*%0A
      *Datos del Carrito*%0A
      *Cliente*%0A
      ${cliente}%0A
      *Ubicacion*%0A
      ${Ubicacion}%0A
      *Forma de Pago*%0A
      ${venta}%0A
      *Cantidad*%0A
      ${cantidad}%0A
      *Pedido*%0A
      ${productos}%0A`;

if (cliente === "" || Ubicacion === "" || venta === "" ) {
  resp.classList.add("fail");
  resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
  return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = `Tu Pedido Fue Enviada, ${cliente}`;
window.open(url);
clearLocalStorage();
clearTasks();

   }
    
  });
          
  function save(){
    let url = `https://drive.google.com/u/0/uc?id=1DqW2tGa2OhflXNlJL7t5D9ryyOS5mnX0&export=download`;
    window.open(url); 
   };


          function ftuser() {
              Swal.fire({
                  title: 'Tecnología y Domótica',
                  text: 'Decoración de Interiores',
                  imageUrl: 'img/ligthmod.png',
                  imageWidth: 200,
                  confirmButtonText: 'Añadir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
          function abrirpagos(){
            let urla = `https://ligthmod.blogspot.com/p/opciones-de-pago.html`;
            window.open(urla); 
           };
    
    
           function verpagos(){
            let urlsp = `https://ligthmod.blogspot.com/p/opciones-de-pago.html`;
            window.open(urlsp); 
           };
    
    
          function msjpagos() {
            Swal.fire({
                title: 'Opciones de Pago',
                icon: 'success',
                html:
               '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://ligthmod.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ver nro. Cuenta',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  verpagos();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Información ',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
          
           
          };
          
          function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Tarjeta Digital',
            text: 'Link Copiado a Portapapeles',
            footer: 'CliconlineStudios'
            });
          
           
          };
    
    
    
    const $content = document.getElementById('textareacopy');
          $btncopy = document.getElementById ('btcopi');
          $title = document.getElementById ('titlelink')
    
          $btncopy.addEventListener('click', e => {
            $content.select();
            document.execCommand('copy')
            msj2();
          });
    
        
// share tarjeta

const shareData2 = {
    title: 'LIGTHMOD',
    text: 'Enviado desde Cliconline App.Tarjeta Digital LIGTHMOD',
    url: 'https://ligthmod.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://ligthmod.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
    }; 

    function confi() {
      Swal.fire({
          title: 'Sigue los Pasos',
          text: '1. Conecta el bluetto 2. conectate a tu red wifi 2.4ghz 3. prende la ubicacion de tu dispostivo table o celular',
          imageUrl: 'img/ligthmod.png',
          imageWidth: 200,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };

    function alerta() {
        Swal.fire({
        showCloseButton: true,
        icon: 'success',
        text: 'Se Habilitara Próximamente ',
        footer: 'LIGTH MOD'
        });
      
       
      };

      var agregar = ``;
  
      let amountProduct = document.querySelector('.count-product');
      
      //ligth mod stock>
      
      
      function pekines() {
        document.getElementById('imgc').value =  ``;
        document.getElementById('title').value =  `PEKINÉS`;
        document.getElementById('description').value = `Perro`;
        cotizar2();
        
          }   

            
      function pomerania() {
        document.getElementById('imgc').value =  ``;
        document.getElementById('title').value =  `POMERANIA`;
        document.getElementById('description').value = `Perro`;
        cotizar2();
        
          }

          

          function msjcarrito() {
            Swal.fire({
                icon: 'success',
                showConfirmButton: false,
                text: 'Agregado al Carrito',
                timer: 500
              });
          
           
          }
        
        
          function cotizar2() {
            Swal.fire({
                title: 'Mascota',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Añadir al Carrito',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  saveTask();
                  msjcarrito();
                }else if (result.dismiss) {
                    document.getElementById('formTask').reset();
                  }
              })
          
            
          };
          
        
          function saveTask(e) {
            let imgc = document.getElementById('imgc').value;
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
          
          
            let task = {
              imgc,
              title,
              description
            };
          
            if(localStorage.getItem('tasks') === null) {
              let tasks = [];
              tasks.push(task);
              localStorage.setItem('tasks', JSON.stringify(tasks));
            } else {
              let tasks = JSON.parse(localStorage.getItem('tasks'));
              tasks.push(task);
              localStorage.setItem('tasks', JSON.stringify(tasks));
            }
          
            getTasks();
            document.getElementById('formTask').reset();
          
          }
          
          var index = 0; 
          
          function deleteTask(title) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            for(let i = 0; i < tasks.length; i++) {
              if(tasks[i].title == title) {
                tasks.splice(i, 1);
                document.getElementById("numer").textContent = i ;
                document.getElementById("numer2").textContent = i ;
           
              }
            }
            
            localStorage.setItem('tasks', JSON.stringify(tasks));
            getTasks();
          }
          
          
          var index2 = '';
          
          function getTasks() {
            if(localStorage.getItem('tasks') === null) {
              console.log('sinproductos')
            } else {
              let tasks = JSON.parse(localStorage.getItem('tasks'));
              let tasksView = document.getElementById('tasks');
              tasksView.innerHTML = '';
              for(let i = 0; i < tasks.length; i++) {
                let imgc = tasks[i].imgc;
                let title = tasks[i].title;
                let description = tasks[i].description;
                index2 = i + 1;
                document.getElementById("numer").textContent = index2  ;
                document.getElementById("numer2").textContent = index2 ;
                tasksView.innerHTML += `<div class="cardp">
                    <div class="card-body">
                     <img src="${imgc}" alt="">
                      <p class="items">${description} - ${title}
                      <a href="javascript:deleteTask('${title}')"><span class="fa fa-trash"></span ></a>
                      </p>
                   
                    </div>
                  </div>`;
               
              }
            }
            
          };
        
          
        function whatsapp() {
          
            let allTasks = "";
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        
        for (let i = 0; i < tasks.length; i++) {
          allTasks +=  "Raza:" + tasks[i].title + " Descripción " + tasks[i].description + " / " + "\n";
        }
        
               clearLocalStorage();
               clearTasks();
        };
        
          
          
          
          
           
          function clearLocalStorage() {
            localStorage.clear()
            ;
          
          }
          
          function clearTasks() {
            localStorage.removeItem('tasks');
            location.reload();
            getTasks();
          
          }
          
        
          getTasks();
          
        