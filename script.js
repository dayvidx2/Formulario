function crearUsuario(
nombre,apellido,tipodocumento,numerodocumento,correo,fechanacimiento,pais,ciudad,numerocelular) {

    const Usuariocreado = {
        id : Date.now(),
        nombreCompleto: `${nombre} ${apellido}`,
        documento:{
            tipo: tipodocumento,
            numero: numerodocumento
        },
        Correo: correo,
        fecha_nacimiento: fechanacimiento,
        residencia:{
            Pais: pais,
            Ciudad: ciudad
        },
        Numerocelular: numerocelular
    }
    return Usuariocreado
}

// --- Reto 1 ---

function resultadoIgualdadDebil(a,b){
    return a == b;
}

// ---Reto 2 ---

function resultadoDesigualdadDebil(a,b){
    return a != b; 
}

// --- Reto 3 ---

function resultadoIgualdadEstricta(a,b){
    return a === b;
}

// --- Reto 4 ---

function resultadoDesigualdadEstricta(a,b){
    return a !== b;
}

// --- Reto 5 ---

function sonIgualesConCoercion(a,b){
    return a == b;
}

function convertirValor(valor, tipo) {

    if (tipo === "number") {
        return Number(valor);
    }

    if (tipo === "boolean") {
        return valor.toLowerCase() === "true";
    }

    if (tipo === "string") {
        return String(valor);
    }
}

const formulario = document.querySelector('form');

formulario.addEventListener('submit',function(event){ 

    event.preventDefault();
    
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const tipodocumento = document.getElementById('tipo').value;
    const numerodocumento = document.getElementById('numero').value;
    const correo = document.getElementById('correo').value;
    const fechanacimiento = document.getElementById('fecha').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const numerocelular = document.getElementById('celular').value;
    const politicadatos = document.getElementById('check').value;

    // --- Valores de los retos ---
    const valorA = document.getElementById('valorA').value;
    const tipoA = document.getElementById('tipoA').value;

    const valorB = document.getElementById('valorB').value;
    const tipoB = document.getElementById('tipoB').value;

    const a = convertirValor(valorA, tipoA);
    const b = convertirValor(valorB, tipoB)
    
    const Usuariocreado = crearUsuario(nombre,apellido,tipodocumento,numerodocumento,correo,fechanacimiento,pais,ciudad,numerocelular,politicadatos);

    // --- Ejecutar retos ---
    
    const resultadoComparacion ={
        igualdadDebil: resultadoIgualdadDebil(a, b),

         desigualdadDebil: resultadoDesigualdadDebil(a, b),

         igualdadEstricta: resultadoIgualdadEstricta(a, b),

         desigualdadEstricta: resultadoDesigualdadEstricta(a, b),

         igualesConCoercion: sonIgualesConCoercion(a, b)
    } 

    // Agregar los resultados al objeto
    Usuariocreado.resultadoComparacion = resultadoComparacion;


    // Convertir el objeto a JSON
    const usuarioJSON = JSON.stringify(Usuariocreado);


    // Guardar en Local Storage
    localStorage.setItem(
        Usuariocreado.id,
        usuarioJSON
    );


    // Mostrar resultados en consola
    console.log("Registro creado:");
    console.log(Usuariocreado);
    console.log("Resultados de los retos:");
    console.log(resultadoComparacion);
    });


