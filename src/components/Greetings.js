function Greetings(props){
  
    
    if(props.lang === "de"){
        return(
            <div className = "de">Hallo {props.children}</div>
        )
            
        }
    

    else if(props.lang === "fr"){
        return(    
            <div className = "fr">Bonjour {props.children}</div>
        )
        }

    

    else if(props.lang === "en"){
        return(    
            <div className = "en">Hello {props.children}</div>
        )
        }
    

    else if(props.lang === "es"){
        return(
            <div className = "es">Hola {props.children}</div>
        )
        }
    
}