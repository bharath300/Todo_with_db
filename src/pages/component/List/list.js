import { Button } from "@mui/material";
import "./list.css";
import { useEffect, useState } from "react";

function List(props) {
  const [indexval, setIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const { list, setdata, reference } = props;

  function deletes(index) {
    list.splice(index, 1)
    setdata([...list]);
  }

  function edit(item, index) {
    reference.current.value = item;
    setFlag(true);
    setIndex(index);
  }

  function Change() {
    list[indexval] = reference.current.value;
    setdata([...list]);
    setFlag(false);
    reference.current.value =" ";
    console.log(list);
  }


  useEffect(()=>{
    fetch('/itemid/item').then(res=>{
      if(res.ok){
        return res.json();
      }
    }).then(item=>setdata(item.data))
  },[list])



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
              {!flag && <Button onClick={() => deletes(index)} variant="contained" color="error">
                  Remove
                </Button>}
              </div>
              <div class="btncover">
                <Button onClick={() => edit(item.id, index)} variant="contained" color="info">
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
