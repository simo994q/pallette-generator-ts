import style from './ColorCardHome.module.scss'
import { toast } from 'react-toastify'

const ColorCard = ({ color, copytext }: { color: string, copytext: boolean }) => {
    
    const handleCopy = () => {
        navigator.clipboard.writeText(color)
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
                        <button onClick={() => {handleCopy(), toast('The color has been copied')
                    }} className={style.copyText}>
                            <p>copy</p>
                            <img src="clipboard.png" alt="Copy" />
                        </button>
                        :
                        <button onClick={() => {handleCopy(), toast('The color has been copied')
                    }} className={style.copyNoText}>
                            <img src="clipboard.png" alt="Copy" />
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default ColorCard