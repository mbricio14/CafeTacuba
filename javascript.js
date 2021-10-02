function validacionDatos() {
    var name =
        document.forms["RegForm"]["Name"];
    var email =
        document.forms["RegForm"]["EMail"];
    var phone =
        document.forms["RegForm"]["Telephone"];
    var what =
        document.forms["RegForm"]["Song"];

    if (name.value == "") {
        window.alert("Ingrese su nombre.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
            "Ingrese su correo electrónico.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
            "Ingrese su teléfono a 8 dígitos.");
        phone.focus();
        return false;
    }

    if (what.selectedIndex < 1) {
        alert("Por favor eliga su canción preferida");
        what.focus();
        return false;
    } else {
        window.alert(
            "Gracias por mandar su información, su envío ha sido exitoso."
        );
        submit.focus();
        return false;
    }

    return true;
}