import React ,{useState,useEffect} from "react";
import Header from "./Header";
import Axios from "axios";
//import firebase from "./firebase";
import "../listaCards.css";


function ListaCards() {
   
  
  const [card, setCard] = useState([]);                                                

      useEffect(()=>{

          // Make a request for a user with a given ID

          Axios.get('http://localhost:8080/cards')
    .then(function (response) {
      setCard(response.data);
      console.log(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });      
  },[])

       return (
      <>
       <Header />
        {card.map(card =>(
            <a href={`/singlecard/${card._id}`}>
            <div className="card">
            <div className="content">
            
            
               
                
                  
              <img id="demo" src={`http://localhost:8080/${card.imagePath}`}  />
            
           </div>

            </div>
            </a>
        ))}
            
      </>
      
    );
      
}   

export default ListaCards;
