

let card = document.querySelector("#card");
let cvc = document.querySelector("#cvc");
let amount = document.querySelector("#amount");
let name = document.querySelector("#name");
let lastname = document.querySelector("#lastname");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let postalCode = document.querySelector("#postalCode");
//let opcionesPago = document.querySelectorAll(".form-check-input")
let mensaje = document.querySelector("#mensaje");
let submit = document.querySelector(".btn-primary")

let alertaError = document.querySelector("#alertaError")

/*const expresiones = {
    card: /^(?:\d[ -]*?){13,16}$/, 
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    cvc: /^.{3,4}$/, 
    amount: /^[0-9]*$/,
    city: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    postalcode: /^[0-9]*$/,
    message: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}


*/



function validar(evento) {
    evento.preventDefault()
    let hasError = false;


    if (card.value == "") {
        card.classList.add('is-invalid', 'bg-danger-subtle');
        hasError = true;
    } else {
        card.classList.remove('is-invalid', 'bg-danger-subtle');
    }

    if (cvc.value == "") {
        cvc.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        cvc.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (amount.value == "") {
        amount.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        amount.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (name.value == "") {
        name.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        name.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (lastname.value == "") {
        lastname.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        lastname.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (city.value == "") {
        city.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        city.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (state.value == "Pick a state") {
        state.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        state.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (postalCode.value == "") {
        postalCode.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        postalCode.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (mensaje.value == "") {
        mensaje.classList.add("is-invalid", 'bg-danger-subtle');
        hasError = true;
    } else {
        mensaje.classList.remove("is-invalid", 'bg-danger-subtle');
    }

    if (hasError) {
        alertaError.classList.remove("d-none");
        alertaError.classList.add("d-block");
        submit.classList
    } else {
        alertaError.classList.add("d-none");
        alertaError.classList.remove("d-block");
    }

}









let registerForm = document.querySelector('#formulario')
registerForm.addEventListener('submit', validar)
