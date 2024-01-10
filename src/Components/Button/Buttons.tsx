import buttonsStyle from './Buttons.module.scss'

export function Button({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className={buttonsStyle.moduleBorderWrap }>
                <button className={buttonsStyle.button}>{children}</button>
            </div>
        </>
    )
}
