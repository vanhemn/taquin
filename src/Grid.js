import Cell from "./Cell";

function Grid(props) {
  const listItems = props.tab.map((number, i) => {
    return (
      <div key={number} className="board-row">
        <Cell value={number} x={i} onClick={props.onClick} />
      </div>
    );
  });

  return <div className="bord">{listItems}</div>;
}

export default Grid;