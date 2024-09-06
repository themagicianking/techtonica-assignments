import Tile from "./Tile.jsx";

function Puzzle(props) {
  function getSplitImageURls(imageUrl) {
    return `${imageUrl}?fp-z=4&fp-y=.0&fp-x=.0&crop=focalpoint&fit=crop&w=270&h=270`;
  }

  console.log(getSplitImageURls(props.url));

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Tile url={props.url} row={0} column={0} />
        <Tile url={props.url} row={0} column={1} />
        <Tile url={props.url} row={0} column={2} />
        <Tile url={props.url} row={0} column={3} />
        <Tile url={props.url} row={1} column={0} />
        <Tile url={props.url} row={1} column={1} />
        <Tile url={props.url} row={1} column={2} />
        <Tile url={props.url} row={1} column={3} />
        {/* <img
          src={`${props.url}?fp-z=4&fp-y=0&fp-x=0&crop=focalpoint&fit=crop&h=270`}
        />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} />
        <img src={`${props.url}?w=270&h=270&crop=focalpoint`} /> */}
        {/* <img src={`${props.url}?w=270&h=270&crop=focalpoint`} /> */}
      </div>
    </>
  );
}

export default Puzzle;
