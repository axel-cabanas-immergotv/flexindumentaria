//Declarando variables
const loginElemento = document.getElementById('login');
const usuario =  JSON.parse(localStorage.getItem('usuario'));
const usuarios =JSON.parse(localStorage.getItem('usuarios')) || [];
const botonLogin = '<a class=" header__items" data-bs-toggle="modal" href="#staticBackdrop">Login</a>';

const crearBtnUsuario = (usuario) => {
    return `
        <a class=" dropdown-toggle" href="#" id="navbarDropdown cierre" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${usuario.nombre}
        </a>
        <div class="dropdown-menu text__aling2" aria-labelledby="navbarDropdown">
            <a data-bs-toggle="modal" href="#exampleModalCenter">
            Perfil
            </a>
            <a  href="#">Configuracion</a>
            <div class="dropdown-divider"></div>
            <a  href="#" id="cerrar-sesion">Cerrar sesion</a>
        </div>
    `;
};

const cerrarSesion = () => {
    debugger
    localStorage.removeItem('usuario');
    loginElemento.innerHTML = botonLogin;
};

const guardarLogin = () => {
    if(usuario){
        loginElemento.className = 'dropdown';
        loginElemento.innerHTML = crearBtnUsuario(usuario);
    } else {
            const formularioLogin = document.querySelector('.formulario__login');
            const formularioRegister = document.querySelector('.formulario__register');
            const contenedorLoginRegister = document.querySelector('.contenedor__login-register');
            const cajaTraseraLogin = document.querySelector('.caja__trasera-login');
            const cajaTraseraRegister = document.querySelector('.caja__trasera-register');
            const btnIniciarSesion = document.getElementById('btn__iniciar-sesion');
            const btnRegistrarse = document.getElementById('btn__registrarse');
            const formRegister = document.getElementById('formRegister');
            const formLogin = document.getElementById('formLogin');
            const parrafo = document.getElementById('warnings');
            let parrafo2 =  document.getElementById('warnings2');
            const nombre = document.getElementById('nombre');
            const mail = document.getElementById('mail');
            const pass = document.getElementById('password');
            const btnLogin = document.getElementById('login');
            const btnRegistro = document.getElementById('registro');
            const mailRegistrado = document.getElementById('mailRegistrado');
            const passRegistrado = document.getElementById('passRegistrado');
            const errexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            loginElemento.innerHTML = botonLogin;

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
                        debugger
                            document.getElementById('cierre').click();
                            loginElemento.className = 'dropdown';
                            loginElemento.innerHTML = crearBtnUsuario(usuarioRegistrado);
                            localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado));
                            const btnCerrarSesion = document.getElementById('cerrar-sesion');
                            
                            btnCerrarSesion.addEventListener('click', cerrarSesion);

                    }, 1000)
                }
            }
    }
    
}
guardarLogin();

