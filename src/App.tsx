import ColorContextProvider from "./ColorContext"
import ColorCard from "./Components/ColorCard/ColorCard"
import ColorGroup from "./Components/ColorGroup/ColorGroup"

function App() {

  return (
    <>
      <ColorContextProvider>
        <ColorCard color={'#343434'} copytext={true} />
        <ColorGroup>
            <ColorCard color={'#348fe3'} copytext={true} />
            <ColorCard color={'#432344'} copytext={true} />
            <ColorCard color={'#f54347'} copytext={true} />
        </ColorGroup>
      </ColorContextProvider>
    </>
  )
}

export default App
