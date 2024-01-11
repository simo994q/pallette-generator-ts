import { ReactNode } from 'react'
import style from './ColorGroupHome.module.scss'

const ColorGroup = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className={style.wrapper}>
                {children}
            </div>
        </>
    )
}

export default ColorGroup