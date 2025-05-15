import React from 'react';
import Hotel1 from '../assets/hotel1.jpg'
import Hotel2 from '../assets/hotel2.jpg'

const promoData = [
  {
    id: 1,
    img: Hotel1,
    label: '30%',
    title: 'HOTEL CORAL YOGYAKARTA',
    labelColor: 'text-red-500',
  },
  {
    id: 2,
    img: Hotel2,
    label: 'Rp 350.000',
    title: 'MATARAM SUITES BANDUNG',
    labelColor: 'text-black',
  },
];

const Promo = () => {
  return (
    <div className="px-4 mt-6 mb-10">
      <h2 className="font-bold text-lg mb-3">Promo Terbaru</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {promoData.map((promo) => (
          <div
            key={promo.id}
            className="min-w-[160px] bg-gray-100 rounded-xl overflow-hidden"
          >
            <img
              src={promo.img}
              alt={promo.title}
              className="w-full h-24 object-cover"
            />
            <div className="p-2">
              <p className={`text-xs font-bold ${promo.labelColor}`}>{promo.label}</p>
              <p className="text-sm font-semibold">{promo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;
