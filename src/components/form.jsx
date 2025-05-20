

function DisplayName({ text }) {
  return <div className="name">{text}</div>;
}

function DisplayRarity({ rarity }) {
  return (
    <div className={`flagBox ${rarity}`}>
      <div className="flag">Rarity</div>
      <div className="valueForFlag">{rarity}</div>
    </div>
  )
}

function DisplayLevel({ level }) {
  return <div>Level: {level}</div>
}

function DisplayType({ type }) {
  return (
    <div className="flagBox">
      <div className="flag">Type</div>
      <div className="valueForFlag">{type}</div>
    </div>
  )
}

function DisplayImage({ image, elixer }) {
  {
    image ? (
      <img src={image} alt="Card artwork" />
    ) : (
      <p>No image uploaded</p>
    )
  }

  return (
    <div className="card-image" style={{ position: 'relative', ...(!image ? { backgroundColor: 'black' } : {}) }}>
      <div style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '45px',
        height: '55px',
        backgroundImage: "url('elixir-dark-pink.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
      }}>
        <div style={{
          marginTop: 'calc(50% - 10px)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          textShadow: '0 0 3px #fff',
        }}>
          { elixer }
        </div>
      </div>
  
      {image ? (
        <img src={image} alt="Card artwork" style={{ width: '100%', display: 'block' }} />
      ) : (
        <p>No image uploaded</p>
      )}
    </div>
  )
}

export { DisplayName, DisplayRarity, DisplayLevel, DisplayType, DisplayImage }