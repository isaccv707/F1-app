import React from 'react';

export const DriverTeam = ({ team }) => {
  const { name, logo } = team;

  return (
    <div className="flex items-center space-x-4 md:flex-wrap">
      <img
        className="w-16 h-16 rounded-full"
        src={logo}
        alt={`${name} Logo`}
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        {/* Aquí puedes agregar más información sobre el equipo si es necesario */}
      </div>
    </div>
  );
};
