import React , {useState} from 'react';
import NewColorForm from './NewColorForm';
import uuid from 'react-uuid';
import {Link , Switch , Route} from 'react-router-dom';

const ColorList = () => {

//    const INITIAL_STATE = [{
//       color: "",
//       id : ''
//    }]

    const checkLocalStorage = () => {
        let keys = Object.keys(sessionStorage);
        if (keys.length === undefined){
            return {
                color : '',
                id : ''
            }
        }
        let values = Object.values(sessionStorage);
        let startingState = [];
        for (let i = 0; i < keys.length; i++) {
            let a = keys[i]
            let b = values[i]
            startingState.push({color : a , id : b})
        }
        return startingState;
    }

    const INITIAL_STATE = checkLocalStorage();

   const [colors , setColors] = useState(INITIAL_STATE);

   const addColor = (newColor) => {
       let colorAdded = {...newColor , id : uuid()}
        sessionStorage.setItem(colorAdded.color , colorAdded.id)
       setColors(colors => [...colors , {...colorAdded }])
       

   }


   return(
       <div>
           <NewColorForm addColor = {addColor} />
           <div>
               {colors.map(c => <div color = {c.color} key = {c.id}>
               <Link to={`/colors/${c.color}`}>{c.color}</Link>
               </div>)}
           </div>
       </div>
   )
   

}


export default ColorList