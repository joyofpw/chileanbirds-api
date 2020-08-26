import React from 'react';

export default (cols, index) => (
  <div key={index} className="columns features">
    {cols}
  </div>
);
