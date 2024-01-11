import style from './ColorCardSaved.module.scss'

const ColorCard = ({ color, copytext }: { color: string, copytext: boolean }) => {
    
    const handleCopy = () => {
        navigator.clipboard.writeText(color)
        alert("Copied the text: " + color);
    }
    
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.color} style={{ backgroundColor: color }}>
                </div>
                <div className={style.codeAndCopy}>
                    <div className={style.code}>
                        {color}
                    </div>
                    {copytext ?
                        <button onClick={() => handleCopy()} className={style.copyText}>
                            <p>copy</p>
                            <img src="clipboard.png" alt="Copy" />
                        </button>
                        :
                        <button onClick={() => handleCopy()} className={style.copyNoText}>
                            <img src="clipboard.png" alt="Copy" />
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default ColorCard