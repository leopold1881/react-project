#React App DEMO

## Countries List
This component demonstrates how [axios](https://github.com/axios/axios) is used with React to pull data from a RESTful [api](https://restcountries.eu/) and transform the particular data into lists.

```
  axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      this.setState({
        countries: response.data
      });
```
