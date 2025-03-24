import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store1 } from './redux/store1.js'
import { Provider } from 'react-redux'
import { store } from './store.js' 
import {StrictMode} from 'react'
import toast,{Toaster} from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
<StrictMode>
<Provider store={store}>
        {/* <BrowserRouter> */}
             <App />
        {/* </BrowserRouter> */}
    <Toaster />
   </Provider>

</StrictMode>
    
  

)
