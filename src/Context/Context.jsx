import React, { createContext } from 'react'
 

export const CustomContext = createContext()
export const Context = (props) => {
  return (
    <div>Context</div>
  )


  const value = {
    
  }

return <CustomContext.Provider value={value}>
    {props.children}
</CustomContext.Provider>


};


