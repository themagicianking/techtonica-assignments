export function PlayerScore(props) {
  return (
    <>
      <li>
        {props.initials} - {props.score}
      </li>
    </>
  );
}
