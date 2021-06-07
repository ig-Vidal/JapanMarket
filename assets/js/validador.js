$('#formulario').validate({ 
    "rules": {
        "txtEmail": {
            required: true,
            email: true,
        },
        "txtNombre": {
            required: true,
            minlength: 4
        },
    },
    messages: {
        "txtEmail": {
            email: 'El email no cumple el formato de un correo'
        
        }       
    }
});