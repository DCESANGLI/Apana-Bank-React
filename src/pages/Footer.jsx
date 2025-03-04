let Footer = () => {
  return (
    <>
      <footer class="bg-primary text-white text-center py-3 mt-4 bg-opacity-75">
        <div class="container mt-4">
          <div class="row text-center">
            <div class="col-md-4" onclick="handleClick('Home')">
              <i class="fa-solid fa-house"></i>
              <a href="">
                <h4 style={{"color": "white"}}>Home</h4>
              </a>
            </div>
            <div class="col-md-4" onclick="handleClick('History')">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <a href="">
                <h4 style={{"color": "white"}}>History</h4>
              </a>
            </div>
            <div class="col-md-4" onclick="handleClick('User')">
              <i class="fa-solid fa-user"></i>
              <a href="">
                <h4 style={{"color": "white"}}>User</h4>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
