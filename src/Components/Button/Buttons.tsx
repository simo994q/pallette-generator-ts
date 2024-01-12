import buttonsStyle from './Buttons.module.scss'
// import { useContext } from 'react'
// import { ColorContext } from '../../ColorContext'

interface styling {
    width: string
}

export function Button({ children, onClick, navButtonGenerate }: { children: React.ReactNode, onClick?: () => Promise<any>, navButtonGenerate?:styling }) {


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
