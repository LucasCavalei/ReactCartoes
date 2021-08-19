import Axios from "axios";
import React,{useState} from "react";
import Header from "./Header";
import {useParams} from "react-router-dom";
import "../cardUsuario.css";

    function CardUsuario(){
        const {id} = useParams();
    const [card,setCard] = useState([]);

    
        const deleteCard= ()=>{
            Axios.delete(`http://localhost:8080/cards/singlecard/${id}`);
        
        }

        const fetchCard =async ()=>{
        const res= await Axios.get(`http://localhost:8080/cards/singlecard/${id}`)
            setCard(res.data);
         }
        fetchCard();
    return(
       <>
       <Header />
                  
            <div className="card-principal">
            <img src={`http://localhost:8080/${card.imagePath}`}  />
        <div class="desc">
        <p>{card.name}  de {card.ano}</p>
        <p>{card.desc}</p>
        <button onClick={deleteCard}>Excluir</button>
        </div>
         </div>
  </>
    );
}
export default CardUsuario;
