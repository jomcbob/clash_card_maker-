import './App.css'
import { useState } from 'react';
import { Name, Rarity, Level, Type, ImageUpload, Elixir } from './components/formInputs';
import { DisplayName, DisplayRarity, DisplayLevel, DisplayType, DisplayImage } from './components/form';

function App() {
  const [name, setName] = useState('card')
  const [rarity, setRarity] = useState('common')
  const [level, setLevel] = useState('11')
  const [type, setType] = useState('Troop')
  const [image, setImage] = useState(null)
  const [elixer, setElixir] = useState('?')
  const [onCardTop, setOnCardTop] = useState(true)

  return (
    <>
      <header>Clash Royale card maker</header>

      <div className='container'>
        {onCardTop && (
          <>
          <div className='inputs' tabIndex={0}>
            <label>
              <div className='label'>Name</div>
              <Name text={name} setName={setName} />
            </label>
            <label>
              <div className='label'>Level</div>
              <Level level={level} setLevel={setLevel} />
            </label>
            <label>
              <div className='label'>Rarity</div>
              <Rarity rarity={rarity} setRarity={setRarity} />
            </label>
            <label>
              <div className='label'>Type</div>
              <Type type={type} setType={setType} />
            </label>
            <label>
              <div className='label'>Image</div>
              <ImageUpload setImage={setImage} />
            </label>
            <label>
              <div className='label'>Elixir</div>
              <Elixir elixer={elixer} setElixir={setElixir} />
            </label>
          </div>
          {/* <div className='inputs'></div> */}
          </>
        )}


        <div className='card'>

          <div className='cardTop'>

            <div className='card-frame'>
              <DisplayImage image={image} elixer={elixer} />
            </div>

            <div className='display'>
              <div className='flexCol'>
                <DisplayName text={name} />
                <DisplayLevel level={level} />
              </div>
              <div className='flexRow'>
                <div className={rarity}>
                  <DisplayRarity rarity={rarity} />
                </div>
                <DisplayType type={type} />
              </div>
            </div>

          </div>

          <div className='cardBottom'>

          </div>

        </div>
      </div>

    </>
  )
}

export default App