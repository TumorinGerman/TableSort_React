import React, { useState } from "react";
import { Table } from "react-bootstrap";

const App = ({ list }) => {
  const clickHandle = (e) => {
    console.log(e.target);
  };

  const [sortDirect, setSortDirect] = useState(null);
  if (list.length === 0) {
    return null;
  }
  const keys = Object.keys(list[0]);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th onClick={clickHandle} key={index}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((row, index) => (
          <tr key={index}>
            {keys.map((key, index) => (
              <td key={index}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default App;
