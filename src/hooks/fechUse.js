import React from "react";
import CarList from "../components/CarList";
export default async function  requisaoAnunciantes() {
    
  try{
      const resposta = await fetch('http://localhost:5000/anunciante');
      const json = await resposta.json()
      return json
    }catch(error){
  }
}


