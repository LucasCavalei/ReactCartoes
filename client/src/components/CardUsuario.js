import Axios from "axios";
import React,{useState,useEffect} from "react";
import Header from "./Header";
import {useParams} from "react-router-dom";
import "../cardUsuario.css";

    function CardUsuario(){
        const {id} = useParams();//importante
    const [card,setCard] = useState([]);

    useEffect(()=>{
        const fetchCard =async ()=>{
        const res= await Axios.get(`http://localhost:8080/cards/singlecard/${id}`)
            setCard(res.data);
                }
        fetchCard();
        },[]);




    return(
  <>
         <Header />
                  
            <div className="card-principal">
            <img src={`http://localhost:8080/${card.imagePath}`}  />
        <div class="desc">
        <p>{card.name}  de {card.ano}</p>
        <p>{card.desc}</p>
        </div>
         </div>
         

  </>
    );
}
export default CardUsuario;
