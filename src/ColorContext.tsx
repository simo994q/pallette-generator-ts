import { createContext, useState } from "react";

interface ColorContextInterface {
    activePallette: Array<string>
    setActivePallette: (pallette: Array<string>) => void
    userPallettes: Array<Array<string>>
    setUserPallettes: (userPallette: Array<Array<string>>, pallette: Array<string>) => void
    generatedPallette: Array<string>
    setGeneratedPallette: (pallette: Array<string>) => void
}

const ColorContextInterfaceDefault = {
    activePallette: [],
    setActivePallette: () => { },
    userPallettes: [],
    setUserPallettes: () => { },
    generatedPallette: [],
    setGeneratedPallette: () => { },
}

export const ColorContext = createContext<ColorContextInterface>(ColorContextInterfaceDefault)


const ColorContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [activePallette, setActivePallette] = useState<Array<string>>([])
    const [userPallettes, setUserPallettes] = useState<Array<Array<string>>>([])
    const [generatedPallette, setGeneratedPallette] = useState<Array<string>>([])

    return (
        <ColorContext.Provider value={{ activePallette, setActivePallette, userPallettes, setUserPallettes, generatedPallette, setGeneratedPallette }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContextProvider