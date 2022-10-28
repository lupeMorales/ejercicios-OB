import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h2>Formulario LOGIN</h2>
            <Link to='/register'><button>SING UP</button></Link>
        </div>
    );
}

export default Login;
