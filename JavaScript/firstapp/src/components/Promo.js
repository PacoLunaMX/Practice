function Promo(props){
    return(
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
            </div>
            <div>
                <h2>Suscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
            <div>
                <h1>
                {props.children}
                </h1>
            </div>
        </div>

    );
}

export default Promo;