import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, Login, Profile, Tickets, Users } from './pages/index';
import { NextUIProvider } from '@nextui-org/react';
import React, { useState } from 'react';
import { getJWT } from './helpers/checkLocalStorage';

export const Context = React.createContext();

function App() {
  const [signedIn, setSignedIn] = useState(getJWT());

  return (
    <NextUIProvider>
      <Context.Provider value={[signedIn, setSignedIn]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="users" element={<Users />} />
            <Route path="my-profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </NextUIProvider>
  );
}

export default App;
