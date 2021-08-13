import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import Header from './Header';
import "../listaCards.css";

function NovoCard(){

const [name, setName] = useState("");
const [ano, setAno] =useState(0);
const [desc, setDesc] =useState("");
const [image, setImage] = useState(null);
const adicionar  =(e)=>{    
    e.preventDefault();
            
    const data = new FormData();
    data.append("name", name);
    data.append("ano", ano);
    data.append("desc",desc);

    for(var x = 0; x<image.length; x++) {
        data.append('imagePath', image[x])
    }

    Axios.post("http://localhost:8080/cards",data )
    .then(res=>console.log(res)).catch(err=>console.log(err));
 }

       return(
        <div class="form-container">  
        <Header />
        <form onSubmit={adicionar} enctype="multpart/form-data">
        <div className="form-group">
        <h2>Fotografia</h2><br></br>
        <input type="file" onChange={e=>setImage(e.target.files)} />
        </div>
        <div className="form-group">
        <h2>Titulo</h2><br></br>
        <input type="text" onChange={e=> setName(e.target.value)} />
        </div>
        <div className="form-group">
        <h2>Ano</h2><br></br>
        <input type="number" onChange={e=>setAno(e.target.value)} />
        <h2>Descrição</h2><br></br>
        <textarea type="text" onChange={e=>setDesc(e.target.value)} />
        </div>
        <button type="submit"> Adcionar</button>
        </form>
        </div>
    )
}
export default NovoCard;