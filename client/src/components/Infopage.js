
import React from "react";
import Header from "./Header";
import bemvindo from "../images/imagem-principal.png";
import "../cardUsuario.css";


    function Infopage(){
    return(
         <div className="info-container">
         <Header />
        <img src={bemvindo} style={{width: 500, height: 400, top:100}} />         
        <p>Salve suas melhores lembranças em pequenos cartões de imagem em apenas alguns cliques</p>         
        </div>
    );
}
export default Infopage;
