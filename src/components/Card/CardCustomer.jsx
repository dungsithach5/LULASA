import React from 'react';
export default function CardCustomer({image, name, review}) {
  return (
    <div className="text-left space-y-1">
      {image}
      <h3 className="text-lg font-medium">{name}</h3>
      <div className='flex space-x-1'>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="src/assets/icon/star.png"
            alt="star"
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm italic">" {review} "</p>
    </div>
  );
}
