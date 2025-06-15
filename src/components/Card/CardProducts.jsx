import React from 'react';

export default function CardProducts({ name, price, image }) {
  return (
    <div className='p-10 min-[320px]:p-0'>
      <div className="overflow-hidden min-[320px]:h-[200px]">
        {image}
      </div>
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-medium text-gray-800">{name}</h2>
        <p className="text-lg font-medium text-[#2D6E53]">{price}</p>
      </div>
    </div>
  );
}
