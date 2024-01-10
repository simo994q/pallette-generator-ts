import { createContext, useState } from "react";

interface ColorContextInterface {
    activePallette: Array<string> | undefined
    setActivePallette: (pallette: Array<string>) => void
    userPallettes: Array<Array<string>> | undefined
    setUserPallettes: (userPallette: Array<Array<string>>, pallette: Array<string>) => void
}

const ColorContext = createContext<ColorContextInterface | null>(null)

const ColorContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [activePallette, setActivePallette] = useState<Array<string> | undefined>(undefined)
    const [userPallettes, setUserPallettes] = useState<Array<Array<string>> | undefined>(undefined)

    return (
        <ColorContext.Provider value={{ activePallette, setActivePallette, userPallettes, setUserPallettes }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContextProvider