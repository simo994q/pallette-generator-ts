import { CSSProperties } from 'react'
import buttonsStyle from './Buttons.module.scss'
// import { useContext } from 'react'
// import { ColorContext } from '../../ColorContext'

interface ButtonProps {
    children: React.ReactNode
    onClick?: (() => void) | (() => Promise<any>)
    navButtonGenerate?: CSSProperties
}
export function Button({ children, onClick, navButtonGenerate }: ButtonProps) {


    // const {activePallette} = useContext(ColorContext)

    // const gradientStart = activePallette[0]

    return (
        <>
            <div className={buttonsStyle.moduleBorderWrap} style={navButtonGenerate} onClick={onClick}>
                <button className={buttonsStyle.button}>{children}</button>
            </div>
        </>
    )
}
