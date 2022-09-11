function Result({resultVal}){

    return(
        <input 
        style={{
                display:"block", 
                margin:"auto",
                height:"2rem",
                fontSize:"1.6rem",
                textAlign:"center"
            
            }}  
        value={resultVal} 
        disabled/>
    )
};

export default Result;