import React from 'react';
/* Import Nav */
import NavMenu from '../NavMenu/NavMenu';
import InfoSupp from './InfoSupp';
import Dashboard from './Dashboard';
/* estilos */
import '../../Sass/screenUi.scss';

const ScreenUi = () => {
  return ( 
    <div className='container-user'>
      <InfoSupp />
      <NavMenu />
      <Dashboard />
    </div>
   );
}
 
export default ScreenUi;