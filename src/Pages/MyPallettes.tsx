import mypalletsStyle from './Mypallettes.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCardSaved/ColorCardSaved'
import ColorGroup from '../Components/ColorGroupSaved/ColorGroupSaved'
import { useState } from 'react'


export function MyPallettes() {

    const [refresh, setRefresh] = useState(true)

    const deletePallette = (pallette: Array<string>, index: number) => {
        console.log(pallette);
        const pallettes: Array<Array<string>> = JSON.parse(localStorage.getItem('userPallettes')!).reverse()

        pallettes.splice(index, 1)
        console.log(pallettes);

        localStorage.setItem('userPallettes', JSON.stringify(pallettes.reverse()))

        setRefresh(!refresh)
    }



    return (
        <>
            {
                !JSON.parse(localStorage.getItem('userPallettes')!).length
                    ?
                    <div>Her kommer dine gemte farver</div>
                    :
                    <section className={mypalletsStyle.savedPallets}>
                        {JSON.parse(localStorage.getItem('userPallettes')!).reverse().map((pallettes: Array<string>, i: number) => {
                            return (
                                <div key={i}>
                                    <ColorGroup>
                                        <ColorCard color={pallettes[0]} copytext={false} />
                                        <ColorCard color={pallettes[1]} copytext={false} />
                                        <ColorCard color={pallettes[2]} copytext={false} />
                                        <ColorCard color={pallettes[3]} copytext={false} />
                                        <ColorCard color={pallettes[4]} copytext={false} />
                                        <div className={mypalletsStyle.buttonsToTheSide}>
                                            <Button>Set Active</Button>
                                            <Button onClick={() => deletePallette(pallettes, i)}>Delete</Button>
                                        </div>
                                    </ColorGroup>
                                    <div className={mypalletsStyle.buttonsDownUnderWrapper}>
                                        <div className={mypalletsStyle.bgLine} />
                                        <div className={mypalletsStyle.buttonsDownUnder}>
                                            <Button>Set Active</Button>
                                            <Button onClick={() => deletePallette(pallettes, i)}>Delete</Button>
                                        </div>
                                    </div>
                                    <hr className={i !== JSON.parse(localStorage.getItem('userPallettes')!).length - 1 ? mypalletsStyle.lineFull : mypalletsStyle.lineNone} />
                                </div>
                            )
                        })}
                    </section>}
        </>

    )
}