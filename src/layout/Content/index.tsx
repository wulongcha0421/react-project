import React from 'react';
import {Outlet} from 'react-router'

const CustomContent:React.FC = () => {
  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      <Outlet />
    </div>
  )
}

export default CustomContent;