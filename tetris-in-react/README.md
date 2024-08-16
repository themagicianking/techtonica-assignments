# TETRIS

This is a tetris game coded for a Techtonica assignment. This readme contains the current project plans and phases.

## Phase 1: Shape Generation and Spontaneous Movement

Phase one will be appear as a 10 x 20 grid in which the standard tetris shapes will drop down from the top center of the grid one at a time until they hit the bottom of the grid or another shape beneath it, at which point another shape will drop until the grid is filled vertically.

### Subphase 1:

Generates and returns a value (the state of the grid) indicating which spaces in a 10 x 20 grid are empty and which are occupied by blocks.

### Subphase 2:

Modifies the value for the state of the grid to indicate what color the occupied cells are and if they are falling or landed.

### Subphase 3:

Creates and inserts a value (a shape) which will transform the state of the grid.

## Phase 2: Basic User Manipulation

Phase two will utilize keybinds to allow the user to transform whichever shape is actively falling along the x axis of the grid until it hits the sides and to rotate the shape 90 degrees to the left or the right from any given position.

## Phase 3: Row Clearance

Phase three will remove any pieces of shapes that occupy a row that is filled along the x axis and cause the above pieces to resume falling.

## Phase 4: Extra Features

Phase four will be further broken up into smaller features attributed to the original game but not necessary to its base functionality.

Features:

- Game gets faster the longer you play
- User is able to put tetris piece in holding cell
- User is able to increase the speed of the piece falling by using the down arrow
- Score is calculated based on how many rows are cleared
- User is able to enter and save their high score

## Revision Phase for Week 2 of the Game

Put game functions on hold in order to work on React components. Things to implement with React will pull from the Features list and meet all requirements listed in Additional Requirements (below).

- Use React to implement a high score display
  - Write a component that gets the player's initials
  - Write a component that takes the player's initials and score and puts it in a li
  - Pass the player's initials to a top five component that will return a display with the player's placement, initials, and score
  Top Five Players:
  1. initial, score
  2. initial, score
  3. ...etc


## Additional Requirements: React

- Write a game of your choosing in React
- Make sure you practice components, props, and state
- Have some sort of input that you receive from one component that you pass to another (such as number of tries, hi/low number, etc.)
- Have some sort of counter that uses the useState hook to update the score or count to the screen
- Commit your code at least 15 times
- Submit at least 1 PR by the end of the week
