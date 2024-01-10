import buttonsStyle from './Buttons.module.scss'

export function Button({ children }: { children: React.ReactNode }) {

    return (
        <>
            <button className={buttonsStyle.button}>sdlfjnsdfnsfns{children}</button>
            <button className={buttonsStyle.button}>{children}</button>
            <button className={buttonsStyle.button}>{children}</button>
            <button className={buttonsStyle.button}>{children}</button>
            <button className={buttonsStyle.button}>{children}</button>
            <button className={buttonsStyle.button}>{children}</button>
            <button className={buttonsStyle.button}>{children}</button>
        </>
    )
}
