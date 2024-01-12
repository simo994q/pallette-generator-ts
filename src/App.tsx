import ColorContextProvider from "./ColorContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { MyPallettes } from "./Pages/MyPallettes";
import { MainLayout } from "./Layout/Main";
function App() {

  return (
    <>
      <ColorContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route index element={<Homepage title={"Your new colors"} />} />
              <Route path="/mypallettes" element={<MyPallettes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContextProvider>
    </>
  )
}

export default App
