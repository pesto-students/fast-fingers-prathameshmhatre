# Fast Fingers

Pesto Tech is proudly launching its own speed typing game named **Fast fingers**. You have been awarded with the project and you need to design and develop this project which should
meet the requirements mentioned in the MVP below.

## MVP Requirement

1. Ask player to enter his/her name before starting the game.

   - Do not ask player to enter his/her name again if he plays the game again in the same session.

2. Start the game on `START GAME` button click.

3. Show random word from dictionary and an input box on game screen.

4. As soon as the typed word matches the word shown on screen, it should we considered submitted (pressing "ENTER" button shall not be required to submit a word). Empty the input box after a successful attempt.

5. A timer shall be shown on the screen for every word and the maximum time that an user is allowed to type a word will depend on the difficulty factor. Refer to the formula provided below to calculate the maximum time allowed :

Timer value = (Number of letters in the word) / (Difficulty factor)

Round the timer value to nearest integer bigger than the value.

Initially the difficulty factor would be 1 and it will keep increasing as the player progresses in the game and the timer value is guaranteed to be greater than or equal to 2 seconds that means a player must get at least 2 seconds to type a word. So whenever the calculated value is found to be less than 2 seconds, it should be rounded off to 2 seconds always.

5. There are three levels in game: EASY, MEDIUM and HARD

Difficulty factor for easy level: 1

Difficulty factor for medium level: 1.5

Difficulty factor for hard level: 2

6. Increase difficulty factor by 0.01 after every successful word attempt.

7. Change the game level if difficulty factor crosses particular levels difficulty factor.

8. Player should be able to stop the game by clicking on `STOP GAME` button

9. Show previous games score for player in a sidebar

10. Show best score for player
11. Application UI should match with the provided UI design mocks

Note: Please deploy your application to Netlify or any other cloud provider of your choice. only deployed applications would be considered for submission.

## Additional Requirement

- Write Test cases for your components.

## UI Design mocks

UI design mocks are available in `design-mocks` folder

|                         |                         |
| :---------------------: | :---------------------: |
| ![](design-mocks/1.png) | ![](design-mocks/2.png) |
| ![](design-mocks/3.png) | ![](design-mocks/4.png) |
| ![](design-mocks/5.png) | ![](design-mocks/6.png) |

[Adobe XD design link](https://drive.google.com/file/d/1qYhb8cNdXoBnD9rxoDcWF4DmTEpQX35n/view?usp=sharing)

[Zeplin web link](https://zpl.io/a710mxj)

Zeplin App Link: zpl://project?pid=5f75f13621f33094313f2b94

## Tech stack

- React JS
- CSS/SCSS
- Jest and React Testing Library

## Learning outcomes

- Interactive UI design and smooth user experience
- React concepts
  - State management in React
  - Form Handling
- Basic JavaScript(array and string methods)
- How to use Local Storage/Session storage
