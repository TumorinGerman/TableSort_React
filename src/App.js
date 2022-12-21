import React, { useState } from "react";
import { Table } from "react-bootstrap";

const App = ({ list }) => {
  const keys = Object.keys(list[0]);
  const [isSortIncrease, setSortDirect] = useState(true);
  const [tableRows, setTableRows] = useState(list);

  const clickHandle = (index) => {
    const [...newTableRows] = tableRows;
    const key = keys[index];
    isSortIncrease
      ? newTableRows.sort((user1, user2) => (user1[key] > user2[key] ? 1 : -1))
      : newTableRows.sort((user1, user2) => (user1[key] < user2[key] ? 1 : -1));
    setTableRows(newTableRows);
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
            <th onClick={() => clickHandle(index)} key={index} id={index}>
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
