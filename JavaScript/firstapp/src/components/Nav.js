function Nav(props){
    return(
        <nav className="main-nav">
            <h1>{props.title}</h1>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </nav>
    )

};


export default Nav; 