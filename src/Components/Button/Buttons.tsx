import buttonsStyle from './Buttons.module.scss'
// import { useContext } from 'react'
// import { ColorContext } from '../../ColorContext'


export function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => Promise<any> }) {


    // const {activePallette} = useContext(ColorContext)

    // const gradientStart = activePallette[0]

    return (
        <>
            <div className={buttonsStyle.moduleBorderWrap } onClick={onClick}>
                <button className={buttonsStyle.button}>{children}</button>
            </div>
        </>
    )
}
