//Declarando variables
const cambioLogin = document.getElementById('login-change');
const loginLS = localStorage.getItem('login');
const guardarLogin = () => {
    if(loginLS){
        cambioLogin.className += ' dropdown';
        cambioLogin.innerHTML = loginLS;
    } else {
        cambioLogin.innerHTML = loginChange;
    }
}
guardarLogin();
const formularioLogin = document.querySelector('.formulario__login');
const formularioRegister = document.querySelector('.formulario__register');
const contenedorLoginRegister = document.querySelector('.contenedor__login-register');
const cajaTraseraLogin = document.querySelector('.caja__trasera-login');
const cajaTraseraRegister = document.querySelector('.caja__trasera-register');
const btnIniciarSesion = document.getElementById('btn__iniciar-sesion');
const btnRegistrarse = document.getElementById('btn__registrarse');
const formRegister = document.getElementById('formRegister');
const nombre = document.getElementById('nombre');
const mail = document.getElementById('mail');
const pass = document.getElementById('password');
const btnLogin = document.getElementById('login');
const btnRegistro = document.getElementById('registro');
const parrafo = document.getElementById('warnings');
const formLogin = document.getElementById('formLogin');
const mailRegistrado = document.getElementById('mailRegistrado');
const passRegistrado = document.getElementById('passRegistrado');
let parrafo2 =  document.getElementById('warnings2');
const errexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const usuarios =JSON.parse(localStorage.getItem('usuarios')) || [];




//Ejecutando funciones

btnIniciarSesion.addEventListener('click', anchoLogin);
btnRegistrarse.addEventListener('click', anchoRegister);
window.addEventListener('resize', anchoPagina);
formRegister.addEventListener('submit', register);
formLogin.addEventListener('submit', login);





    //FUNCIONES

function anchoPagina(){

    if (window.innerWidth > 850){
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display = "block";
    }else{
        cajaTraseraRegister.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioRegister.style.display = "none";   
    }
}

anchoPagina();


function anchoLogin(){
    if (window.innerWidth > 850){
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "10px";
        formularioRegister.style.display = "none";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
    }else{
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioRegister.style.display = "none";
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display = "none"
    }
}
    
function anchoRegister(){
    if (window.innerWidth > 850){
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    }else{
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.display = "none";
        cajaTraseraLogin.style.display = "block";
        cajaTraseraLogin.style.opacity = "1";
    }
}
    
function register (e){
    let warnings = '';
    const usuarioRegistrado = usuarios.find(user => user.mail === mail.value);
    e.preventDefault();
    parrafo.style.color = 'red';
    let entrar = false;
    if(nombre.value === ''){
        warnings += `Ingrese un nombre <br>`;
        entrar = true;
    }
    if(!errexEmail.test(mail.value)){
        warnings += `Email invalido <br>`;
        entrar = true;
    }
    if(pass.value.length < 6){
        warnings += `Constraseña invalida <br>`;
        entrar = true;
    }
    if(usuarioRegistrado){
        warnings += `Este correo ya esta registrado`
        entrar = true;
    }
    if(entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = '';
        usuarios.push({nombre: nombre.value, mail: mail.value, pass: pass.value});
        parrafo.style.color = 'green';
        parrafo.innerHTML = `¡Registrado correctamente! <br>`;
        setTimeout(() => {
            anchoLogin();
        }, 1000);
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function login (e){
    let warnings = '';
    const usuarioRegistrado = usuarios.find(usuario => usuario.mail === mailRegistrado.value);
    passCorrecta = usuarios.find(usuario => usuario.pass === passRegistrado.value && usuario.mail === mailRegistrado.value);
    parrafo2.style.color = 'red';
    let entrar = false;
    e.preventDefault();

    if(!usuarioRegistrado){
        warnings += `Email incorrecto <br>`;
        entrar = true;
    }
    if(!passCorrecta){
        warnings += `Contraseña incorrecta`;
        entrar = true;
    }
    if(entrar){
        parrafo2.innerHTML = warnings;
    } else {
        parrafo2.innerHTML =  '';
        parrafo2.style.color = 'green';
        parrafo2.innerHTML = `¡Bienvenido ${usuarioRegistrado.nombre}!`;
        setTimeout(() => {
            document.getElementById('cierre').click();
            cambioLogin.className += ' dropdown';
            cambioLogin.innerHTML = `
                <a class=" dropdown-toggle" href="#" id="navbarDropdown cierre" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${usuarioRegistrado.nombre}
                </a>
                <div class="dropdown-menu text__aling2" aria-labelledby="navbarDropdown">
                    <a data-bs-toggle="modal" href="#exampleModalCenter">
                    Perfil
                    </a>
                    <a class="dropdown-item" href="#">Configuracion</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" id="cerrar-sesion">Cerrar sesion</a>
                </div>`

                localStorage.setItem('login', cambioLogin.innerHTML);

            }, 1000)
    }
}
document.getElementById('cerrar-sesion').addEventListener('submit', cerrarSesion);

function cerrarSesion () {
    cambioLogin.innerHTML = loginChange;
}