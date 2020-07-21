import React from 'react';


const Card = ({id , name ,email}) => {
	return (
          <div className='tc bg-light-green dib pa3 grow ma2 br3 bw2 shadow-5'>
           <img src={`https://robohash.org/${id}?200x200`} alt='robots.img'/>
           <div>
           <h3>{name}</h3>
           <h3>{email}</h3>
           </div>
          </div>
		);
}

export default Card;