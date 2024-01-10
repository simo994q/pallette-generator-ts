import ColorContextProvider from "./ColorContext"
import ColorCard from "./Components/ColorCard/ColorCard"

function App() {

  return (
    <>
      <ColorContextProvider>
        <ColorCard color={'#343434'} copytext={true}></ColorCard>
      </ColorContextProvider>
    </>
  )
}

export default App
