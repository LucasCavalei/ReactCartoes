import React from "react";
import "../header.css";
import azul from "../images/azulbom3.jpg";
import logo from "../images/logopalmeira.png";

function Header(){


    return(
        <>
        <div className="header">
        <img id="cabecalho "src={azul} />
        <img src={logo}  style={{top:0}}/>
               <ul>   
    <li><a href="/info">Informações</a></li>
    <li><a href="/">Cartões </a></li>
    <li><a href="/new">Novo    </a></li>   
    
    </ul>
        </div>

        </>
    )
}
export default Header;