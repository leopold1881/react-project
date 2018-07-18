# React App DEMO

This application showcases some of the core features of ReactJS.

## Countries List
This component demonstrates how [axios](https://github.com/axios/axios) is used with React to pull data from a RESTful [api](https://restcountries.eu/) and transform the particular data into lists.

```
  axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      this.setState({
        countries: response.data
      });
```
## Rock Paper Scissors
A simple React game that involves React local state changes within the component. It also shows how props are being passed down from the top component to its children components.

```
constructor(props) {
    super(props);

    this.state = {
      playerScore: 0,
      computerScore: 0
    };
    this.resetGame = this.resetGame.bind(this);
    this.handleHandButtonClick = this.handleHandButtonClick.bind(this);
  }
```

## Search Data
An input bar component then can search data from data pulled from an [api](https://damp-fortress-54104.herokuapp.com/search?q=reactjs&format=json) by a get request.

```
handleSubmit(event) {
    const value = this.state.value;
    this.setState({
      searchWords: value
    });
    event.preventDefault();
  }
```
## Dependecies 
* [react-router](https://github.com/ReactTraining/react-router)
* [reactstrap](https://github.com/reactstrap)
* [eslint](https://github.com/eslint/eslint)
* [axios](https://github.com/axios/axios)

