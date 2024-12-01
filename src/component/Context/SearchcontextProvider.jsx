import React, { useState } from "react";
import Searchcontext from "./Searchcontext";

function SearchcontextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <Searchcontext.Provider value={{ user, setUser }}>
      {children}
    </Searchcontext.Provider>
  );
}

export default SearchcontextProvider;
