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
  return (
    <div
      className="card-image"
      style={{
        position: 'relative',
        ...(!image ? { backgroundColor: 'black' } : {})
      }}
    >
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: 45,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }}
>
  <svg
    width="45"
    height="55"
    viewBox="0 0 45 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
  >
    <path
      d="M22.5 0C34.65 12 40 30 40 40C40 48 33 55 22.5 55C12 55 5 48 5 40C5 30 10.35 12 22.5 0Z"
      fill="#FF69B4"  // hot pink fill
    />
  </svg>
  <div
    style={{
      marginTop: 'calc(50% - 10px)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textShadow: '0 0 3px #fff',
      zIndex: 1,
      position: 'relative',
    }}
  >
    {elixer}
  </div>
</div>


      {image ? (
        <img
          src={image}
          alt="Card artwork"
          style={{ width: '100%', display: 'block' }}
        />
      ) : (
        <p>No image uploaded</p>
      )}
    </div>
  );
}


function DisplayStat({ stat, img, name }) {
  return (
    <>
    {stat !== 0 && stat !== '0' && 
        <div className="stat">
          <img src={`./imgs/${img}.png`} alt="" />
          <div className="statValue">
            <div className="statValueTop">{name}:</div>
            <div className="statValueBottom">&nbsp;{stat}</div>
          </div>
        </div>}
    </>
  )
}

export { DisplayName, DisplayRarity, DisplayLevel, DisplayType, DisplayImage, DisplayStat }