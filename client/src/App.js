import React from 'react';
import './App.css';
import ListaCards from "./components/Listacards";
import Infopage from './components/Infopage';
import NovoCard from './components/NovoCard';
import Home from "./components/Home";
import { Switch,  BrowserRouter as Router ,Route } from 'react-router-dom';
import CardUsuario from './components/CardUsuario';

//import firebase from "./firebase";

function App() {
   

       return (
         
         
         <Router>
          
         <Switch>
        
      <Route path='/info' exact component={Infopage} />
      <Route path='/new' exact component={NovoCard} />
      <Route path="/" exact component={ListaCards} />
      <Route path="/singlecard/:id" exact component={CardUsuario} />
      {/* pra lembrar que o correto é esse <Route path="/singlecard/:id" exact component={CardUsuario} />*/}  
      
        </Switch>
       </Router>
           );
      
}   

export default App;
