import React from "react";
import './Home.scss';
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div className="Casa">
            <header>
                <div className="titulo">
                    <h1>Passa pra frente</h1>  
                    <Link to="/login"><button>Login</button></Link> 
                </div>
            </header>
        </div>
    );

}
export default Home;