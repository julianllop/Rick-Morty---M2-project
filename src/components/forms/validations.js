const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = ({ username, password }) => {
    const errors = {};

    if (!regexEmail.test(username)) {
        errors.username = "El username debe ser un correo electrónico";
    }
    if (!username) {
        errors.username = "El username no puede estar vacio";
    }
    if (username.length > 35) {
        errors.username =
            "El username debe tener un largo menor a 35 caracteres";
    }

    ///////////////////////////////////////////////////////

    if (!password) {
        errors.password = "El password no puede estar vacio";
    }
    if (password.length < 6) {
        errors.password =
            "El password debe tener mas de 6 caracteres";
    }
    if (password.length > 10) {
        errors.password =
            "El password debe tener menos de 10 caracteres";
    }

    return errors
};
