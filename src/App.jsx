import './App.css'
import { useState } from 'react';
import { Name, Rarity, Level, Type, ImageUpload, Elixir, Stat } from './components/formInputs';
import { DisplayName, DisplayRarity, DisplayLevel, DisplayType, DisplayImage, DisplayStat } from './components/form';
import html2canvas from 'html2canvas';

function downloadCard() {
  const card = document.getElementById('card')
  html2canvas(card).then(canvas => {
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'card.png'
    link.click()
  })
}


function App() {
  const [name, setName] = useState('card')
  const [rarity, setRarity] = useState('common')
  const [level, setLevel] = useState('11')
  const [type, setType] = useState('Troop')
  const [image, setImage] = useState(null)
  const [elixer, setElixir] = useState('?')
  const [onCardTop, setOnCardTop] = useState(true)

  {/* stats start now */}
  const [hitpoints, setHitpoints] = useState(0)
  const [shieldHitpoints, setShieldHitpoints] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [deathDamage, setDeathDamage] = useState(0)
  const [damage, setDamage] = useState(0)
  const [range, setRange] = useState(0)
  const [targets, setTargets] = useState(0)
  const [hitSpeed, setHitSpeed] = useState(0)


  return (
    <>
      <header>Clash Royale card maker</header>

      <div className='container'>

        <div className="inputs-wrapper">
          <div className={`select_inputs ${onCardTop ? 'active' : ''}`}>
            <div className='inputs' tabIndex={0}>
              <label><div className='label name'>Name</div><Name name={name} setName={setName} /></label>
              <label><div className='label'>Level</div><Level level={level} setLevel={setLevel} /></label>
              <label><div className='label'>Rarity</div><Rarity rarity={rarity} setRarity={setRarity} /></label>
              <label><div className='label'>Type</div><Type type={type} setType={setType} /></label>
              <label><div className='label'>Image</div><ImageUpload setImage={setImage} /></label>
              <label><div className='label'>Elixir</div><Elixir elixer={elixer} setElixir={setElixir} /></label>
            </div>
            <div className='changeInput'>
              <div></div><div>Stats</div>
              <button className='hover' onClick={() => setOnCardTop(false)}>&#9662;</button>
            </div>
          </div>

          <div className={`select_inputs ${!onCardTop ? 'active' : ''}`}>
            <div className='inputs' tabIndex={0}>
              <div className='statBox'><Stat stat={hitpoints} setStat={setHitpoints} img='heart' name='Hit points' inputType={'number'} /></div>
              <div className='statBox'><Stat stat={deathDamage} setStat={setDeathDamage} img='explode' name='Death Damage' inputType={'number'} /></div>
              <div className='statBox'><Stat stat={damage} setStat={setDamage} img='damage' name='Damage' inputType={'number'} /></div>
              <div className='statBox'><Stat stat={speed} setStat={setSpeed} img='boot' name='Speed' inputType={'select'} /></div>
              <div className='statBox'><Stat stat={shieldHitpoints} setStat={setShieldHitpoints} img='shield-with-heart' name='Shield Hitpoints' inputType={'number'} /></div>
              <div className='statBox'><Stat stat={range} setStat={setRange} img='bow' name='Range' inputType={'select'} /></div>
              <div className='statBox'><Stat stat={targets} setStat={setTargets} img='sight' name='Targets' inputType={'select'} /></div>
              <div className='statBox'><Stat stat={hitSpeed} setStat={setHitSpeed} img='sword' name='Hit Speed' inputType={'select'} /></div>
            </div>
            <div className='changeInput'>
              <div></div><div>Card details</div>
              <button className='hover' onClick={() => setOnCardTop(true)}>&#9662;</button>
            </div>
          </div>
        </div>

        <div className='card' id='card'>

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

          <div id="cardBottom" className='cardBottom'>
            <div className='gridBox'>
              <DisplayStat stat={speed} img='boot' name='Speed'></DisplayStat>
              <DisplayStat stat={hitpoints} img='heart' name='Hitpoints'></DisplayStat>
              <DisplayStat stat={deathDamage} img='explode' name='Death Damage'></DisplayStat>
              <DisplayStat stat={damage} img='damage' name='Damage'></DisplayStat>
              <DisplayStat stat={shieldHitpoints} img='shield-with-heart' name='Shield Hitpoints'></DisplayStat>
              <DisplayStat stat={range} img='bow' name='Range'></DisplayStat>
              <DisplayStat stat={targets} img='sight' name='Targets'></DisplayStat>
              <DisplayStat stat={hitSpeed} img='sword' name='Hit Speed'></DisplayStat>
            </div>
          </div>
          <button onClick={downloadCard}>Download Card</button>

        </div>
      </div>

    </>
  )
}

export default App