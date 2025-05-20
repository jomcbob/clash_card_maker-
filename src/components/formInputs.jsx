import React, { useRef } from 'react'

function Name({ text, setName }) {
  return (
    <input maxLength={20} type="text" value={text} onChange={(e) => setName(e.target.value)} />
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

function Type({type, setType}) {
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

function Elixir({ elixer, setElixir}) {
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

export { Name, Rarity, Level, Type, ImageUpload, Elixir }