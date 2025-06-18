import React from 'react';
import {Outlet} from 'react-router'

const CustomContent:React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default CustomContent;