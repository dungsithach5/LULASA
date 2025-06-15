import React from 'react';

export default function CardBenefits({title, description, icon}) {
  return (
    <div className="max-w-sm p-6 text-justify">
      <div className="w-12 h-12 bg-[#DCEFE1] rounded-full flex items-center justify-center mb-2">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
