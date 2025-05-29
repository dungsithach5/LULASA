import React from 'react';

export default function CardBenefits({title, description, icon}) {
  return (
    <div className="max-w-sm p-6 text-center">
      <div className="w-20 h-20 bg-[#DCEFE1] rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
