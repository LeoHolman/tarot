# Tarot Board
This project is a tarot reading app.

## Tarot
Tarot cards have a history in mystics and fortune telling. I personally subscribe to the belief that 
tarot cards do not read a predefined future, rather, they give us a framework for taking unique
perspectives on the situations we find ourselves in. Thus they are not a tool for clarvoyance, but 
self reflection.

### Tarot Cards
There are 78 total cards, each with a number (except the fool) and a suit.

### Suits
#### Major Arcana (22 cards)
Major Arcana tell a story of a individual's evolution.

#### Wands (Minor Arcana)
Wands represent passion, inspiration, and willpower.

Associated with Fire.

#### Cups (Minor Arcana)
Cups represent emotions, the unconscious, creativity, and intuition.

Associated with Water.

#### Swords (Minor Arcana)
Swords are associated with intelligence, logic, truth, ambition, conflict, and communication.

Associated with Air.

#### Pentacles (Minor Arcana)
Pentacles are associated with security, stability, nature, health, and prosperity.

Associated with Earth.

## Project Structure
* `/public` all publicly served assets
* `/src` app code
* `/src/components` React component library
* `/src/constants` Constant data values
* `/src/App.js` Main App component
* `/src/*.text.js` test file for component
* `/src/index.js` entry point for application

## Project Style
* Prefer symantic composition
* * When a component represents something the user sees, break it into it's own react component and name it meaninfully. Compose these semantic components to build the app.

* CSS-in-JS
* * Seperation of concerns does not mean putting CSS in a seperate file. It means each component should have a defined set of responsibilites easily surmized by the name of the component. This includes styling. Use `@mui/styles` to add classes to control the styles of components.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).