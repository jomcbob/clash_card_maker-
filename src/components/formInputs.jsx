import React, { useRef } from 'react'

function Name({ name, setName }) {
  return (
    <input maxLength={20} type="text" value={name} onChange={(e) => setName(e.target.value)} />
  )
}

function Rarity({ rarity, setRarity }) {
  return (
    <select
      name="card_rarity"
      id="card_rarity"
      value={rarity}
      onChange={(e) => setRarity(e.target.value)}
    >
      <option value="common">Common</option>
      <option value="rare">Rare</option>
      <option value="epic">Epic</option>
      <option value="legendary">Legendary</option>
      <option value="champion">Champion</option>
    </select>
  )
}

function Level({ level, setLevel }) {
  return (
    <select
      name="card_level"
      id="card_level"
      value={level}
      onChange={(e) => setLevel(e.target.value)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>

    </select>
  )
}

function Type({ type, setType }) {
  return (
    <select
      name="card_type"
      id="card_type"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="troop">Troop</option>
      <option value="building">Building</option>
      <option value="spell">Spell</option>
    </select>
  )
}

function ImageUpload({ setImage }) {
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <button type="button" onClick={handleButtonClick}>
        Upload Image
      </button>
    </div>
  )
}

function Elixir({ elixer, setElixir }) {
  return (
    <select
      name="card_elixir"
      id="card_elixir"
      value={elixer}
      onChange={(e) => setElixir(e.target.value)}
    >
      <option value="?">?</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  )
}

function Stat({ stat, setStat, img, name, inputType }) {
  return (
    <>
      <div className='statImg'>
        <img src={`imgs/${img}.png`} alt="" />
        <label htmlFor={stat}>{name}</label>
      </div>
      {inputType == 'number' &&
        <input name={stat} min={0} maxLength={10} type={inputType} value={stat} onChange={(e) => setStat(e.target.value)} />}

      {inputType == 'select' && name === 'Speed' &&
        <select
          name="card_stat"
          id="card_stat"
          value={stat}
          onChange={(e) => setStat(e.target.value)}>
          <option value="Fast">Fast</option>
          <option value="Medium">Medium</option>
          <option value="Slow">Slow</option>
          <option value="0">Don't show</option>
        </select>}

      {inputType == 'select' && name === 'Range' &&
        <select
          name="card_stat"
          id="card_stat"
          value={stat}
          onChange={(e) => setStat(e.target.value)}>
          <option value="Melee: Long">Melee: Long</option>
          <option value="Melee: Medium">Melee: Medium</option>
          <option value="Melee: Short">Melee: Short</option>
          <option value="6.5">6.5</option>
          <option value="5.5">5.5</option>
          <option value="4.5">4.5</option>
          <option value="3.5">3.5</option>
          <option value="0">Don't show</option>
        </select>}

      {inputType == 'select' && name === 'Targets' &&
        <select
          name="card_stat"
          id="card_stat"
          value={stat}
          onChange={(e) => setStat(e.target.value)}>
          <option value="Ground">Ground</option>
          <option value="Air & Ground">Air & Ground</option>
          <option value="0">Don't show</option>
        </select>}

      {inputType == 'select' && name === 'Hit Speed' &&
        <select
          name="card_stat"
          id="card_stat"
          value={stat}
          onChange={(e) => setStat(e.target.value)}>
          <option value="0.1 seconds">0.1 seconds</option>
          <option value="0.2 seconds">0.2 seconds</option>
          <option value="0.3 seconds">0.3 seconds</option>
          <option value="0.4 seconds">0.4 seconds</option>
          <option value="0.5 seconds">0.5 seconds</option>
          <option value="0.6 seconds">0.6 seconds</option>
          <option value="0.7 seconds">0.7 seconds</option>
          <option value="0.8 seconds">0.8 seconds</option>
          <option value="0.9 seconds">0.9 seconds</option>
          <option value="1 seconds">1 seconds</option>
          <option value="1.1 seconds">1.1 seconds</option>
          <option value="1.2 seconds">1.2 seconds</option>
          <option value="1.3 seconds">1.3 seconds</option>
          <option value="1.4 seconds">1.4 seconds</option>
          <option value="1.5 seconds">1.5 seconds</option>
          <option value="1.6 seconds">1.6 seconds</option>
          <option value="1.7 seconds">1.7 seconds</option>
          <option value="1.8 seconds">1.8 seconds</option>
          <option value="1.9 seconds">1.9 seconds</option>
          <option value="2 seconds">2 seconds</option>
          <option value="2.1 seconds">2.1 seconds</option>
          <option value="2.2 seconds">2.2 seconds</option>
          <option value="2.3 seconds">2.3 seconds</option>
          <option value="2.4 seconds">2.4 seconds</option>
          <option value="2.5 seconds">2.5 seconds</option>
          <option value="2.6 seconds">2.6 seconds</option>
          <option value="2.7 seconds">2.7 seconds</option>
          <option value="2.8 seconds">2.8 seconds</option>
          <option value="2.9 seconds">2.9 seconds</option>
          <option value="3 seconds">3 seconds</option>
          <option value="3.1 seconds">3.1 seconds</option>
          <option value="3.2 seconds">3.2 seconds</option>
          <option value="3.3 seconds">3.3 seconds</option>
          <option value="3.4 seconds">3.4 seconds</option>
          <option value="3.5 seconds">3.5 seconds</option>
          <option value="3.6 seconds">3.6 seconds</option>
          <option value="3.7 seconds">3.7 seconds</option>
          <option value="3.8 seconds">3.8 seconds</option>
          <option value="3.9 seconds">3.9 seconds</option>
          <option value="4 seconds">4 seconds</option>


          <option value="0">Don't show</option>
        </select>}
    </>
  )
}

export { Name, Rarity, Level, Type, ImageUpload, Elixir, Stat }