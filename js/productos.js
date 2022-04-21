const productos = [
    { 
    id: '1', 
    nombre: 'Pantalon Nike', 
    precio: 5000, 
    cantidad: 1 , 
    img: '../assets/galeria4.jpg' 
    },
    
    { 
    id: '2', 
    nombre: 'Remera Jordan', 
    precio: 6500, cantidad: 1 , 
    img: '../assets/galeria2.jpg' 
    },
    
    { 
    id: '3', 
    nombre: 'Remera Reebok', 
    precio: 4000, 
    cantidad: 1 , 
    img: '../assets/galeria10.jpg' 
    },
    
    { 
    id: '4', 
    nombre: 'Pantalon Adidas', 
    precio: 14000, 
    cantidad: 1 , 
    img: '../assets/galeria5.jpg' 
    },
    
    { 
    id: '5', 
    nombre: 'Musculosa Nike', 
    precio: 3600, 
    cantidad: 1 , 
    img: '../assets/galeria6.jpg' 
    },
    
    { 
    id: '6', 
    nombre: 'Buzo Puma', 
    precio: 8000, 
    cantidad: 1 , 
    img: '../assets/galeria7.jpg' 
    },
]

const loginChange = `
<a class=" header__items" id="login" data-bs-toggle="modal" href="#staticBackdrop">Login</a>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" id="cierre" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="contenedor-logeo">
          <div class="contenedor__todo">
            <div class="caja__trasera">
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar en la página</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button id="btn__registrarse">Regístrarse</button>
                </div>
            </div>
            
            <!--Formulario de Login y registro-->
            <div class="contenedor__login-register">
                <!--Login-->
                <form action="" class="formulario__login" id="formLogin">
                    <h2>Iniciar Sesión</h2>
                    <input type="text" id="mailRegistrado" placeholder="Correo Electronico">
                    <input type="password" id="passRegistrado" placeholder="Contraseña">
                    <button>Entrar</button>
                    <p id="warnings2"></p>
                </form>

                <!--Register-->
                <form action="" class="formulario__register" id="formRegister">
                    <h2>Crea una cuenta</h2>
                    <input id="nombre" type="text" placeholder="Nombre">
                    <input id="mail" type="text" placeholder="Correo Electronico">
                    <input type="password" id="password" placeholder="Contraseña">
                    <button id="registro">Regístrarse</button>
                    <p id="warnings"></p>
                </form>
            </div>
          </div>
        </div>
        
      </div>
      <video src="../assets/bg-video.mp4" muted autoplay loop></video>
  </div>
</div>
`