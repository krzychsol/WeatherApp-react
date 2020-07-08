import React from 'react';


const Form = props => {
    return ( 
        <>
        
        
        <form>
        <h2>Sprawdź aktualną pogodę w wybranym mieście</h2>
            <input 
            type="text" 
            value={props.value}
            onChange={props.change}
            placeholder="Wpisz miasto"
            />
           
        </form>
        
        </>
     );
}
 
export default Form;