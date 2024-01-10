import style from './ColorCard.module.scss'


const ColorCard = ({ color, copytext }: { color: string, copytext: boolean }) => {
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
                        <button className={style.copyText}>
                            <p>copy</p>
                            <img src="clipboard.png" alt="Copy" />
                        </button>
                        :
                        <button className={style.copyNoText}>
                            <img src="clipboard.png" alt="Copy" />
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default ColorCard