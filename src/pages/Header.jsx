

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
                        <button class="btn btn-lg btn-outline-dark text-white m-2" type="button">Sign Up</button>
                        <button class="btn btn-lg  btn-outline-dark text-white m-2" type="button">Login</button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    <footer class="bg-primary text-white text-center py-3 mt-4 bg-opacity-75">
        
        <div class="container mt-4">
            <div class="row text-center">
                <div class="col-md-4" onclick="handleClick('Home')">
                    <i class="fa-solid fa-house"></i>
                   <a href=""><h4 style="color: white;">Home</h4></a> 
                </div>
                <div class="col-md-4" onclick="handleClick('History')">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <a href=""><h4 style="color: white;">History</h4></a> 
                </div>
                <div class="col-md-4" onclick="handleClick('User')">
                    <i class="fa-solid fa-user"></i>
                    <a href=""><h4 style="color: white;">User</h4></a> 
                </div>
            </div>
        </div>
        
        
    </footer>
        
        </>
    )
}

export default Header;