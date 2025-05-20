import React from 'react';

const rarityColors = {
  Common: "gray-400",
  Rare: "yellow-500",
  Epic: "purple-600",
  Legendary: "gradient-to-r from-yellow-300 to-purple-400",
  Champion: "orange-500",
};

export default function RarityIcon({ rarity, elixir, onElixirChange }) {
  const isGradient = rarity === "Legendary";

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-xl shadow-lg ${
          isGradient
            ? "bg-gradient-to-r from-yellow-300 to-purple-400"
            : `bg-${rarityColors[rarity]}`
        }`}
      >
        {rarity[0]}
      </div>
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium">{rarity}</label>
        <input
          type="number"
          min={1}
          max={10}
          value={elixir}
          onChange={(e) => onElixirChange(parseInt(e.target.value, 10))}
          className="w-12 p-1 rounded bg-gray-100 border text-center"
        />
      </div>
    </div>
  );
}

export { RarityIcon }