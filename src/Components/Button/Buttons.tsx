import buttonsStyle from './Buttons.module.scss'
import { useContext } from 'react'
import { ColorContext } from '../../ColorContext'


export function Button({ children }: { children: React.ReactNode }) {

    const {activePallette} = useContext(ColorContext)

    const gradientStart = activePallette[0]

    return (
        <>
            <div className={buttonsStyle.moduleBorderWrap}>
                <button className={buttonsStyle.button}>{children}</button>
            </div>
        </>
    )
}
