import "./user.style.css";

let SignUp = () => {
  return (
    <>
      <div class="container">
        <h2>Bank Account Registration</h2>
        <form id="registrationForm">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="name" placeholder="Enter full name" />
            <div class="error" id="nameError"></div>
          </div>

          <div class="form-group">
            <label>Date of Birth</label>
            <input type="date" id="dob" />
            <div class="error" id="dobError"></div>
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" id="email" placeholder="Enter email" />
            <div class="error" id="emailError"></div>
          </div>

          <div class="form-group">
            <label>Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Enter mobile number" />
            <div class="error" id="mobileError"></div>
          </div>

          <div class="form-group">
            <label>Permanent Address</label>
            <input type="text" id="address" placeholder="Enter address" />
            <div class="error" id="addressError"></div>
          </div>

          <div class="form-group">
            <label>Aadhaar/PAN Number</label>
            <input type="text" id="idNumber" placeholder="Enter Aadhaar/PAN" />
            <div class="error" id="idError"></div>
          </div>

          <div class="form-group">
            <label>Username</label>
            <input type="text" id="username" placeholder="Create a username" />
            <div class="error" id="usernameError"></div>
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

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
