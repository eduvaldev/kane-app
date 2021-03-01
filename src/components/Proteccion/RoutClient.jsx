import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const RoutClient = ({Component}) => {
  const user = useSelector(state => state.autUser);
  
  if(user === null){
    return <Redirect to={'./'} />
  }
  return ( 
      <Component  />
   );
}
 
export default RoutClient;