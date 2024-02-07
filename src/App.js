import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from "react-icons/fi"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const App = () => {
  const activeMenu = true;
  return (
    <div >
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
            <TooltipComponent content="Settings" position='Top'>
              <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:"blue", borderRadius:"50%"}}>
                <FiSettings size={25}  />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              
            </div>
          ) : 
          <div className='w-0 dark:bg-secondary-dark-bg'>
            SideBardasd
          </div>}
          <div className={activeMenu ? " md:ml-72 dark:bg-main-bg bg-main-bg min-h-screen w-full" : " dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2 "}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg'>
              NavBar
            </div>
          </div>
          <div>
            <Routes>
            {/* Dash Board */}
                <Route path="/" element="Ecommerce" />
                <Route path="/ecommerce" element="Ecommerce" />

                {/* pages  */}
                <Route path="/orders" element="Orders" />
                <Route path="/employees" element="Employees" />
                <Route path="/customers" element="Customers" />

                {/* apps  */}
                <Route path="/kanban" element="Kanban" />
                <Route path="/editor" element="Editor" />
                <Route path="/calendar" element="Calendar"/>
                <Route path="/color-picker" element="ColorPicker" />

                {/* charts  */}
                <Route path="/line" element="Line" />
                <Route path="/area" element="Area" />
                <Route path="/bar" element="Bar" />
                <Route path="/pie" element="Pie" />
                <Route path="/financial" element="Financial" />
                <Route path="/color-mapping" element="ColorMapping" />
                <Route path="/pyramid" element="Pyramid" />
                <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App