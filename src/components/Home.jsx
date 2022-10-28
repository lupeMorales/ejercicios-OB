import React from 'react';
import{Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>WELCOME</h1>
            <Link to='/login'>| LOGIN |</Link>
          <Link to='/register'>| SING UP |</Link>

        </div>
    );
}

export default Home;
