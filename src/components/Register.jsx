import React from 'react';
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <h2>Formulario de Registro</h2>
            <Link to='/login'><button>LOGIN</button></Link>
            
        </div>
    );
}

export default Register;
