import React from 'react';
import PropTypes from 'prop-types';
class FilterCharacter extends React.Component {
  render() {
    const { handleFilterName, handleSelected, selectedHouse } = this.props;
    return (
      <React.Fragment>
        <div className='main_title'>
          <img className='image_title' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"} alt='harry' />
        </div>
        <h2 className='character_title'>Characters</h2>
        <label htmlFor="search"></label>
        <input type="text" className='search' id='search' onChange={handleFilterName} />    
        <div className='selectHouses'>
          <fieldset>
            <legend>Select your house</legend>
            <div className='checkboxes'>
              <label htmlFor='all' className='option'>
                <input type="radio" name="house" value="all" id='all' checked={selectedHouse === 'all'} onChange={handleSelected} />All
            </label>
              <label htmlFor='Gryffindor' className='option'>
                <input type="radio" name="house" value="Gryffindor" id='Gryffindor' checked={selectedHouse === 'Gryffindor'} onChange={handleSelected} />Gryffindor
            </label>
              <label htmlFor='Slytherin' className='option'>
                <input type="radio" name="house" value="Slytherin" id='Slytherin' checked={selectedHouse === 'Slytherin'} onChange={handleSelected} />Slytherin
            </label>
              <label htmlFor='Hufflepuff' className='option'>
                <input type="radio" name="house" value="Hufflepuff" id='Hufflepuff' checked={selectedHouse === 'Hufflepuff'} onChange={handleSelected} />Hufflepuff
            </label>
              <label htmlFor='Ravenclaw' className='option'>
                <input type="radio" name="house" value="Ravenclaw" id='Ravenclaw' checked={selectedHouse === 'Ravenclaw'} onChange={handleSelected} />Ravenclaw
            </label>
            </div>
          </fieldset>
        </div>
      </React.Fragment>
    )
  }
}

FilterCharacter.propTypes = {
  handleFilterName: PropTypes.func,
  selectedHouse: PropTypes.string,
  handleSelected: PropTypes.func
}



export default FilterCharacter;




