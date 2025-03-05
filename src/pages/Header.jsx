import {Link} from 'react-router-dom';

let Header = () => {
    return (
        <>
        <section>
        <nav class="navbar navbar-expand-lg bg-primary   bg-opacity-75">
            
                
            
            
            <div class="container-fluid">
                <a class="navbar-brand fs-4 " href="#">
                    <h1 class="text-white"> Apna Bank </h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <div class="d-flex">
                        <Link to="/signup" class="btn btn-lg btn-outline-dark text-white m-2" type="button">Sign Up</Link>
                        <button class="btn btn-lg  btn-outline-dark text-white m-2" type="button">Login</button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
   
        </>
    )
}

export default Header;