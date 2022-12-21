import React, { useState } from "react";
import { Table } from "react-bootstrap";

const App = ({ list }) => {
  const [isSortIncrease, setSortDirect] = useState(true);
  const [keys, setKeys] = useState(Object.keys(list[0]));
  const [tableRows, setTableRows] = useState(list);

  const clickHandle = (e) => {
    const newSortDirection = !isSortIncrease;
    setSortDirect(newSortDirection);
  };

  if (list.length === 0) {
    return null;
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th onClick={clickHandle} key={index} id={index}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row, index) => (
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
