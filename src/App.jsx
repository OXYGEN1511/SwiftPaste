
import { createBrowserRouter, RouterProvider, Routes ,Route} from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Components/Notesaver/Button";
import Header from "./Components/Notesaver/Header";
import Paste_Home from "./Components/Notesaver/Paste_Home";
import Paste_Nav from "./Components/Notesaver/Paste_Nav";
import Paste from "./Components/Notesaver/Paste";
import ViewPaste from "./Components/Notesaver/ViewPaste";
// import Authentication from "./Pages/Authentication/Authentication";
// import Message from "./Pages/Message/Message";
// import HomePage from "./Pages/HomePage/HomePage";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getProfileAction } from "./redux/Auth/auth.action";
// import { useDispatch, useSelector } from "react-redux";
// window.global = window;
import { MemoryRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Paste_Nav></Paste_Nav>
      <Paste_Home></Paste_Home>

    </div>
  },
  {
    path:"/pastes",
    element:
    <div>
      <Paste_Nav></Paste_Nav>
      <Paste></Paste>
  
    </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div>
      <Paste_Nav></Paste_Nav>
      <ViewPaste></ViewPaste>

    </div>
  },]
);
// const dispatch = useDispatch();

function App() {
  // const {auth} = useSelector(store => store);
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  
  // useEffect(()=>{
  //   dispatch(getProfileAction(jwt))
  // },[jwt])
  return (
    <>
       {/* Brainwave Project */}
       <MemoryRouter>
       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
         <Header/>
         </div>
    </MemoryRouter>
       

        <ButtonGradient/> 
      <RouterProvider router={router}/>

       {/*<div className="">
          
          <Routes> 
          <Route path='/*' element={ auth.user?<HomePage />:<Authentication/>} />
          <Route path='/message' element={<Message />} />
          {/* <Route path='/*' element={<Authentication />} /> */}
          {/* <Route path='/register' element={<Authentication />} /> 
          </Routes>
     
            
        </div>*/}


        
    </>
  );
}

export default App
