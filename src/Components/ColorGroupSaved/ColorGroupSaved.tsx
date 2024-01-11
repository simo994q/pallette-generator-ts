import { ReactNode } from 'react'
import style from './ColorGroupSaved.module.scss'

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