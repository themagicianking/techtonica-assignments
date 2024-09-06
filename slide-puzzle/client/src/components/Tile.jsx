function Tile(props) {
  // switch statements that reverse column coordinates; since photo coordinates start at the top right of a photo, i'm automating this so that the rows and columns in other components remain easily readable from left to right top down
  let column = null;
  let row = null;

  console.log(props.position);

  switch (props.position.column) {
    case 0:
      column = 4;
      break;
    case 1:
      column = 3;
      break;
    case 2:
      column = 2;
      break;
    case 3:
      column = 1;
      break;
  }

  switch (props.position.row) {
    case 0:
      row = 0;
      break;
    case 1:
      row = 3;
      break;
    case 2:
      row = 2;
      break;
    case 3:
      row = 1;
      break;
  }

  const x = column * 125;
  const y = row * 125;
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundPosition: `${x}px ${y}px`,
        backgroundSize: "500px 500px",
        height: 125,
        width: 125,
      }}
    />
  );
}

export default Tile;
