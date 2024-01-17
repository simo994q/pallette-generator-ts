import { CSSProperties } from 'react'
import buttonsStyle from './Buttons.module.scss'

interface ButtonProps {
    children: React.ReactNode
    onClick?: (() => void) | (() => Promise<any>)
    styleProps?: CSSProperties
}
export function Button({ children, onClick, styleProps }: ButtonProps) {


    return (
        <>
            {localStorage.getItem('activePallette')
                ?
                <div className={buttonsStyle.moduleBorderWrap} style={{...styleProps, background: `linear-gradient(to right, ${JSON.parse(localStorage.getItem('activePallette')!)[0]}, ${JSON.parse(localStorage.getItem('activePallette')!)[1]}, ${JSON.parse(localStorage.getItem('activePallette')!)[2]}, ${JSON.parse(localStorage.getItem('activePallette')!)[3]}, ${JSON.parse(localStorage.getItem('activePallette')!)[4]})` }} onClick={onClick}>
                    <button className={buttonsStyle.button}>{children}</button>
                </div>
                :
                <div className={buttonsStyle.moduleBorderWrap} style={{...styleProps, background: `linear-gradient(to right, #bab393, #f1e5c1, #d0753c, #5e3326, #2d2a23)`}} onClick={onClick}>
                    <button className={buttonsStyle.button}>{children}</button>
                </div>
            }
        </>
    )
}
