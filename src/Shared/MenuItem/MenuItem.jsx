import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" className='w-[120px]'/>
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItem;