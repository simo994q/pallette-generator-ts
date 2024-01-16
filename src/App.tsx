import ColorContextProvider from "./ColorContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { MyPallettes } from "./Pages/MyPallettes";
import { MainLayout } from "./Layout/Main";
import { TestPage } from "./Pages/TestPage/TestPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>

      <ColorContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route index element={<Homepage title={"Your new colors"} />} />
              <Route path="/mypallettes" element={<MyPallettes title={'My Pallettes'} />} />
              <Route path="/testpage" element={<TestPage title={'Test page'} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContextProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce/>
    </>
  )
}

export default App
