function Puzzle(props) {
  return (
    <>
      <div>
        <img src={props.row0Column0} />
        <img src={props.row0Column1} />
        <img src={props.row0Column2} />
        <img src={props.row0Column3} />
        <img src={props.row1Column0} />
        <img src={props.row1Column1} />
        <img src={props.row1Column2} />
        <img src={props.row1Column3} />
        <img src={props.row2Column0} />
        <img src={props.row2Column1} />
        <img src={props.row2Column2} />
        <img src={props.row2Column3} />
        <img src={props.row3Column0} />
        <img src={props.row3Column1} />
        <img src={props.row3Column2} />
        <img src={props.row3Column3} />
      </div>
    </>
  );
}

export default Puzzle;
