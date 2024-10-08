function ShufflePuzzle(props) {
  function GetPosition() {
    const solvedPosition = [
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 0, column: 2 },
      { row: 0, column: 3 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 1, column: 2 },
      { row: 1, column: 3 },
      { row: 2, column: 0 },
      { row: 2, column: 1 },
      { row: 2, column: 2 },
      { row: 2, column: 3 },
      { row: 3, column: 0 },
      { row: 3, column: 1 },
      { row: 3, column: 2 },
      { row: 3, column: 3 },
    ];

    const shuffledPosition = solvedPosition.sort((a, b) => 0.5 - Math.random());

    return shuffledPosition;
  }
  return (
    <button
      onClick={() => {
        props.handleShuffle(GetPosition());
      }}
    >
      SHUFFLE PUZZLE
    </button>
  );
}
export default ShufflePuzzle;
