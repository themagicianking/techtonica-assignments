import Tile from "./Tile.jsx";

function Puzzle(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: 500,
          height: 500,
        }}
      >
        <Tile url={props.url} position={props.position[0]} />
        <Tile url={props.url} position={props.position[1]} />
        <Tile url={props.url} position={props.position[2]} />
        <Tile url={props.url} position={props.position[3]} />
        <Tile url={props.url} position={props.position[4]} />
        <Tile url={props.url} position={props.position[5]} />
        <Tile url={props.url} position={props.position[6]} />
        <Tile url={props.url} position={props.position[7]} />
        <Tile url={props.url} position={props.position[8]} />
        <Tile url={props.url} position={props.position[9]} />
        <Tile url={props.url} position={props.position[10]} />
        <Tile url={props.url} position={props.position[11]} />
        <Tile url={props.url} position={props.position[12]} />
        <Tile url={props.url} position={props.position[13]} />
        <Tile url={props.url} position={props.position[14]} />
        <Tile url={props.url} position={props.position[15]} />
      </div>
    </>
  );
}

export default Puzzle;
