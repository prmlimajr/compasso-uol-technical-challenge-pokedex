# Pokedex

Application developed for the Compasso UOL technical challenge for Mobile Software Engineer. The project consists of an app that fetchs Pokemons using the PokeAPI and the user can visualize, search and check details about any Pokemon.

![](https://i.imgur.com/wl1LmYj.png)
![](https://i.imgur.com/00x1ABn.png)
![](https://i.imgur.com/DqTOSY4.png)
![](https://i.imgur.com/paSAwPO.png)

## User Stories
- [X] I, as an user, want to see a list of Pokemons when I use the App.
- [X] I, as an user, want to check details about a Pokemon when I click on it.
- [X] I, as an user, want to search a Pokemon by it name and check its details.
- [X] I, as an user, want to browse through the list navigating though pages.

## Getting Started and Installing

To run the project, you must first clone this repository to your machine and install the dependencies listed on the package.json file.

Run the commands below:

To install dependencies:
```
yarn
```

After install is complete, run to start according to the system you're using and your emulator device or smartphone connected to the computer:
```
yarn android
```
or
```
yarn ios
```

The project will open on the emulator or in your device if it is connected.

## Using the app

When it loads the screen will show a list with 20 Pokemons, a search bar and 2 buttons to cycle through the pages. 

User may use the search bar to check details of a single Pokemon anytime, if the name provided does not match to any Pokemon in the API an error will be thrown in the form of a Toast message.


### Built with
This project was developed using React Native, React Native CLI, Typescript, Hooks and Functional Components, Styled Components for the styling, Axios to fetch to the PokeAPI, React Native Toast Messages for the error messages, React Native Vector Icons for the Icons, React Native Progress for the stats bar in the Pokemon Details, Lottie React Native for the animated splash screen.

## Credits
Designed and developed by Paulo Lima, in April, 2021. 


