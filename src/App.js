import React from 'react';
import './App.css';
import Home from './components/Home';
import CharactersDetails from './components/CharactersDetails'
import { fetchCharacters } from './services/CharactersFetch';
import { Switch, Route } from 'react-router-dom';
import FilterCharacter from './components/FilterCharacter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchText: '',
      selectedHouse: 'all',
    };
    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }
  componentDidMount() {
    this.FetchAllCharacters();
  }
  FetchAllCharacters() {
    fetchCharacters()
      .then(data => {
        const newData = data.map((item, index) => {
          return { ...item, id: `${item.name}-${index}` };
        });
        this.setState({
          characters: newData
        });
      });
  }

  handleFilterName(event) {
    const filterName = event.currentTarget.value;
    this.setState({
      searchText: filterName
    })
  }
  handleSelected(event) {
    const selectHouse = event.currentTarget.value;
    this.setState({
      selectedHouse: selectHouse
    })
  }
  render() {
    const { characters, searchText, selectedHouse } = this.state;
    return (
      <div className="App" >
        <Switch>
          <Route exact path="/" render={() =>
            <React.Fragment>
              <FilterCharacter
                characters={characters}
                filterCharacter={searchText}
                handleFilterName={this.handleFilterName}
                selectedHouse={selectedHouse}
                handleSelected={this.handleSelected}

              />
              <Home
                characters={characters}
                selectedHouse={selectedHouse}
                searchText={searchText}

              />
            </React.Fragment>
          }
          />
          <Route path="/detail/:id" render={(selectData) =>
            <CharactersDetails
              characterId={selectData.match.params.id}
              characters={characters}
            />
          } />
        </Switch>
      </div>
    )
  }
}

export default App;


