

const Card = ({ pokemon}) => {
    console.log(pokemon, '---item---');
  return (
    <div  style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: '20px',
    }}>
      {pokemon.map(
        (item) => {
            return(
            <div key={item.id} style={{
              width: '250px',
              borderRadius: '10px',
              padding: '10px',
              margin: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#a8d4e4',
            }}>
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          )}
      )}
    </div>
  );
};

export default Card;
