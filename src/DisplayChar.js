import React from 'react';

const DisplayChar = ({char}) => {

return <div key={char.id}>
            <img className="img-char" src={char.image}  alt={char.name} />
            <p>{char.name} </p>
       </div>

}

export default DisplayChar;