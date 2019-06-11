import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class Home extends React.Component {
  paintdata() {
    const { characters, selectedHouse, searchText } = this.props;
    return characters
      .filter(character => selectedHouse === 'all' || character.house === selectedHouse)
      .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))
      .map((character) => {
        return (
          <li className='character' key={character.id}>
            <div className='home_info_wrapper'>
              <div className='image_wrapper'>
                <Link to={`/detail/${character.id}`} >
                  <img src={character.image} alt={character.name} className='character_image'></img>
                </Link>
              </div>
              <div className='info_wrapper'>
                <h2 className='character_name'>{character.name}</h2>
                <p className='home'>{character.house}</p>
              </div>
            </div>
          </li>
        );
      });
  }
  
  render() {
    return (
      <div className='selectHouses'>     
        <ul className='characters_wrapper'>
          {this.paintdata()}
        </ul>
      </div>
    )
  }
}
Home.propTypes = {
  characters: PropTypes.array,
  selectedHouse: PropTypes.string,
  searchText: PropTypes.string
}

export default Home;
