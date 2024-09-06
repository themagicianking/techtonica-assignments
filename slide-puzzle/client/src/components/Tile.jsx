function Tile(props) {
  const x = props.column * 25;
  const y = props.row * 25;
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundPosition: `${x}% ${y}%`,
        backgroundSize: 1080,
        width: 270,
        height: 270,
      }}
    />
  );
}

export default Tile;
