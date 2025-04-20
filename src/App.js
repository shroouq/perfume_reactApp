import React from 'react';
import Header from './Header';
import Footer  from './Footer';
import Routers from './Rou';
import { useLocation} from 'react-router-dom';

import ShopContextProvider from './context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';


function App(){
  const location = useLocation();
  const hideHeaderFooter = ['/checkout'].includes(location.pathname);

  return(
    
  <div className='App'>
    <ToastContainer />
    {!hideHeaderFooter &&   <Header />}
   
   <Routers/>

    {!hideHeaderFooter &&   <Footer/>}

   
  </div>
  )
}
export default App;