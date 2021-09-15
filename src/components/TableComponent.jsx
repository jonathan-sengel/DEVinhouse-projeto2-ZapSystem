import styled from "styled-components";

const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  border-radius: 4px;
  & th,
  & td {
    border: 1px solid #c9cfd6;
    padding: 8px;
  }
  & tbody tr:nth-child(odd) {
    background-color: #fefefe;
  }
`;

const TableComponent = ({ content }) => {
  const thArrays = ["Gatilho", "Canal", "Tempo", "Ações"];

  return (
    <Table>
      <thead>
        <tr style={{ textAlign: "left" }}>
          {thArrays.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map((message) => (
          <tr key={message.id}>
            <td>{message.trigger}</td>
            <td>{message.channel}</td>
            <td>{message.timer}</td>
            <td>
              <button
                onClick={() => {
                  console.log(`cliquei ${message.id}`);
                }}
              >
                Exibir Mensagem
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
