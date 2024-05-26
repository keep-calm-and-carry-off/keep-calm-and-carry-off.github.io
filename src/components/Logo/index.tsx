import React, { FC } from 'react';
import img from 'src/assets/img/logo.png';
import cn from 'classnames';
const Logo: FC = () => {
  return (
    <div className="d-flex flex-row h-100">
      <img height={'100%'} src={img} />
      <div className="d-flex flex-column h-100 ms-2">
        <p className="m-0 p-0 fs-3 fw-bold">ХОББИУМ</p>
        <p className="m-0 p-0 text-nowrap fs-6">Настольные игры</p>
      </div>
    </div>
  );
};

export default Logo;
