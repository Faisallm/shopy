import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product';

// is this like redux?
// context is used to manage state globally. It can be used...
// together with the useState hook to share state between
// deeply nested components more easily.

// is it like a global state
// making all_products available to the entire components
// app wide

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    // this is the data that will be available...
    // application wide
    const contextValue = {all_product}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;


// this code file is basically boiler plate.
// the only important information here is the contextValue