import { CSSProperties } from 'react'
import buttonsStyle from './Buttons.module.scss'
import { useContext } from 'react'
import { ColorContext } from '../../ColorContext'

interface ButtonProps {
    children: React.ReactNode
    onClick?: (() => void) | (() => Promise<any>)
    styleProps?: CSSProperties
}
export function Button({ children, onClick, styleProps }: ButtonProps) {

    const { activePallette } = useContext(ColorContext)

    const gradTest = {
        background: `linear-gradient(90deg, ${activePallette[0]} 0%, ${activePallette[1]} 25%, ${activePallette[2]} 50%, ${activePallette[3]} 75%, ${activePallette[4]} 100%)`
    }


    return (
        <>
            <div className={buttonsStyle.moduleBorderWrap} style={{...gradTest, ...styleProps}} onClick={onClick}>
                <button className={buttonsStyle.button}>{children}</button>
            </div>
        </>
    )
}
