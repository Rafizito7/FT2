import React from 'react';
function Voiture() {
  const style ={
    image:{
      height:'950px',
      display:'flex',
      marginTop:'15%%',
    },
  }
  return (
      <div>
        <img style={style.image} src="/src/Icon/Group934.png" alt="" />
      </div>

  );
}

export default Voiture