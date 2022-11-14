import { Button } from "@mui/material";
import "./list.css";
import { useEffect, useState } from "react";

function List(props) {
  const [indexval, setIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  
  const { list, setdata, reference, fetchflag, setFetchflag } = props;

  // function deletes(index) {
  //   list.splice(index, 1)
  //   setdata([...list]);
  // }

  function deletes(index) {
    const requesthandler = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: index }),
    };

    fetch("/itemid/remove", requesthandler).then((res) => res.json());
    setFetchflag(!fetchflag);
    reference.current.value = " ";
  }

  function edit(item, index) {
    reference.current.value = item;
    setFlag(true);
    setIndex(index);
  }

  function Change() {
    if ( reference.current.value===""){
      alert("try again");
    }
    else{

    const itemvalue = reference.current.value;
    const requesthandler = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: itemvalue, id: indexval }),
    };

    fetch("/itemid/edit", requesthandler).then((res) => res.json());
    setFetchflag(!fetchflag);
    setFlag(false);
    reference.current.value = " ";
    console.log(list); }
  }

  useEffect(() => {
    fetch("/itemid/item")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((item) => setdata(item.data));
  }, [fetchflag]);

  return (
    <>
      <div className="bttn">
        {flag && (
          <Button onClick={Change} variant="contained">
            Update
          </Button>
        )}
      </div>
      <div className="main-container">
        <div className="cover">
          TODO
          {list.map((item, index) => (
            <div className="holder">
              {index + 1}.{item.item}
              <div class="btncover">
                {!flag && (
                  <Button
                    onClick={() => deletes(item.id)}
                    variant="contained"
                    color="error"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <div class="btncover">
                <Button
                  onClick={() => edit(item.item, item.id)}
                  variant="contained"
                  color="info"
                >
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default List;
