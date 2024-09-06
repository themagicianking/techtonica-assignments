import Tile from "./Tile.jsx";

function Puzzle(props) {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: 500, height: 500 }}>
        <Tile url={props.url} row={0} column={0} />
        <Tile url={props.url} row={0} column={1} />
        <Tile url={props.url} row={0} column={2} />
        <Tile url={props.url} row={0} column={3} />
        <Tile url={props.url} row={1} column={0} />
        <Tile url={props.url} row={1} column={1} />
        <Tile url={props.url} row={1} column={2} />
        <Tile url={props.url} row={1} column={3} />
        <Tile url={props.url} row={2} column={0} />
        <Tile url={props.url} row={2} column={1} />
        <Tile url={props.url} row={2} column={2} />
        <Tile url={props.url} row={2} column={3} />
        <Tile url={props.url} row={3} column={0} />
        <Tile url={props.url} row={3} column={1} />
        <Tile url={props.url} row={3} column={2} />
        <Tile url={props.url} row={3} column={3} />
      </div>
    </>
  );
}

export default Puzzle;
