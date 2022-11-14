import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import "./signin.css";

function Signin() {
  const navigate = useNavigate();
  const [value, setvalue] = useState("");
  const [password, setpass] = useState("");

  function submitform() {
    if((value==="") || (password ==="")){
      alert("please enter valid input")
    }
    else{
    localStorage.setItem("flag", true);
    navigate("/add");}
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
              onChange={(e)=>setvalue(e.target.value)}
            />
          </div>
          <br></br>
          <div class="pwd">
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e)=>setpass(e.target.value)}
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
