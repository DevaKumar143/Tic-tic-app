import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";
import Navbar from './Components/Navbar';
import Inbox from './Components/Inbox';
import NextS from './Components/NextS';
import Task from './Components/Task';
import Today from './Components/Today';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Task/>
    },
    {
      path: "/NextS",
      element: <NextS/>
    },
])

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <>
<Navbar/>
<RouterProvider router={router} />
<Inbox/>
<NextS/>
<Task/>
<Today/>
    

    <main>
    
      
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
     </main>
    </>
  );
}

export default App;
