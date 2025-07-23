import React from 'react';

import Header from '@/components/Header';

const layoutWrapper = ({children}) => {
  return (
    <div>
        <Header>
 {children}
        </Header>
       
    </div>
  )
}

export default layoutWrapper