import { useState, useEffecct, useEffect } from "react";
import "./App.css";
//import { useState } from "react";
import axios from "axios";
//import axios from "axios";
function App() {
  const [data, setData] = useState("");
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json%27{%22ip%22:%22132.154.34.255")
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://api64.ipify.org/?format=json")
      .then(res => {
        console.log(res);
        setData1(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div className="title">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Sextant</h1>
            <p className="lead">
              Cisco offers you this website to help you by making your
              experience better
            </p>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="container">
          <div className="row">
            <div className="ipv4">
              <label for="">IPv4 :</label>
              <div className="col">{data.data}</div>
            </div>
            <div className="col">
              {/* {data1?.map(home => (
                <div>{home}</div>
              ))} */}
              <div className="ipv6">
                <label for="">IPv6 :</label>
                <p>2409:4053:712:fe25:c0ed:2a49:53f4:7099</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
