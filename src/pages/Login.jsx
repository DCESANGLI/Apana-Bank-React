import "./user.style.css";

let Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div class="container1 my-3">
          <h2>Bank Account Login</h2>
          <form id="registrationForm">
            

            <div class="form-group">
              <label>Email Address</label>
              <input type="email" id="email" placeholder="Enter email" />
              <div class="error" id="emailError"></div>
            </div>

           
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
              />
              <div class="error" id="passwordError"></div>
            </div>

            <button class="button1" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
