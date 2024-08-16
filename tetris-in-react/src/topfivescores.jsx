import { PlayerScore } from "./playerscore";

export function TopFiveScores() {
  return (
    <>
      <div class="top-five-scores">
        <ol>
          <PlayerScore initials="ABC" score="10,000"/>
          <PlayerScore initials="DEF" score="5,000"/>
          <PlayerScore initials="GHI" score="2,500"/>
          <PlayerScore initials="JKL" score="1,000" />
          <PlayerScore initials="MNO" score="500" />
        </ol>
      </div>
    </>
  );
}
