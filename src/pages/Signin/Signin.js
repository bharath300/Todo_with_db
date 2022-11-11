import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "./signin.css";

function Signin() {
  const navigate = useNavigate();

  function submitform() {
    localStorage.setItem("flag", true);
    navigate("/add");
  }

  return (
    <>
      <div className="Signinparent">
        <div class="signin">
          <h1>SIGN IN</h1>

          <div class="name">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </div>
          <br></br>
          <div class="pwd">
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />{" "}
          </div>
          <br></br>
          <Button variant="contained" onClick={submitform}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Signin;
