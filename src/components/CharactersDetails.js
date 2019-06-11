import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class CharacterDetails extends React.Component {
  render() {
    const { characters, characterId } = this.props;
    const picker = characters.find(item => item.id === characterId);
    const housesImages = {
      'Gryffindor': 'https://vignette.wikia.nocookie.net/es.harrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest?cb=20140922195249',
      'Slytherin': 'https://vignette.wikia.nocookie.net/es.harrypotter/images/6/69/Slytherin_Pottermore.png/revision/latest?cb=20141001130915',
      'Hufflepuff': 'https://vignette.wikia.nocookie.net/es.harrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest?cb=20141001131135',
      'Ravenclaw': 'https://vignette.wikia.nocookie.net/es.harrypotter/images/7/76/Ravenclaw_Pottermore.png/revision/latest?cb=20141001130914'
    }
    const housesWallpapers = {
      'Gryffindor': 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/interior_spreads/9781683833710/harry-potter-gryffindor-ruled-pocket-journal-9781683833710.in01.jpg',
      'Slytherin': 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/interior_spreads/9781683833185/harry-potter-slytherin-hardcover-ruled-journal-9781683833185.in01.jpg',
      'Hufflepuff': 'https://wallpaperaccess.com/full/112899.jpg',
      'Ravenclaw': 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/interior_spreads/9781683833208/harry-potter-ravenclaw-hardcover-ruled-journal-9781683833208.in01.jpg',
    }
    const houseColors = {
      'Gryffindor': '#ad292e',
      'Slytherin': '#3c895e',
      'Hufflepuff': '#F2BE44',
      'Ravenclaw': '#1a5393',
      '': '#EEE6D3'
    }
    const fontColor = {
      'Gryffindor': '#EEE6D3',
      'Slytherin': '#EEE6D3',
      'Hufflepuff': '#333',
      'Ravenclaw': '#EEE6D3'
    }
    return picker ? (
      <div className='detail_main_wrapper'
        key={picker.id}
        style={{ backgroundImage: `url('${housesWallpapers[picker.house]}')`, height: '100vh' }}>
        <header>
          <Link to='/'>
            <div className='image_detail_title'>
              <img className='image_detail' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"} alt='harry' />
            </div>
          </Link>
        </header>
        <main className='detail_container'>
          <div className='detail_wrapper'>
              <img src={picker.image} alt={picker.name} className='detail_image'></img>
            <div className='info_detail_wrapper'
              style={{ background:`${houseColors[picker.house]}`, color: `${fontColor[picker.house]}` }}>
              <h2 className='character_detail_name'>{picker.name}</h2>
              {`${picker.house}` ?
                <img src={housesImages[picker.house]} alt={`${picker.house} shield`} className='shield'></img> : ''}
              <p className='home'>House: {`${picker.house}` ? picker.house : 'unknown'}</p>
              <p className='dateOfBirth'>Year of Birth:{`${picker.yearOfBirth}` ? picker.yearOfBirth : 'unknown'}</p>
              <p className='patronus'>Patronus: {`${picker.patronus}` ? picker.patronus : 'unknown'}</p>
              <p className='alive'>Status: {picker.alive ? <i className="fas fa-heartbeat" title='Alive'></i> : <i className="fas fa-skull-crossbones" title='Dead'></i>}</p>
            </div>
          </div>
        </main>
      </div>
    ) : 'Loading...';
  }
}

CharacterDetails.propTypes = {
  characters: PropTypes.array,
  characterId: PropTypes.string
}

export default CharacterDetails;


