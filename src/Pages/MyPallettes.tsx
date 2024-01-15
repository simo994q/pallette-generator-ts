import mypalletsStyle from './Mypallettes.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCardSaved/ColorCardSaved'
import ColorGroup from '../Components/ColorGroupSaved/ColorGroupSaved'
import { useState, useContext } from 'react'
import { ColorContext } from '../ColorContext'


export function MyPallettes() {

    const { setActivePallette } = useContext(ColorContext)
    const { generatedPallette } = useContext(ColorContext)

    const [refresh, setRefresh] = useState(true)

    const deletePallette = (pallette: Array<string>, index: number) => {
        console.log(pallette);
        const pallettes: Array<Array<string>> = JSON.parse(localStorage.getItem('userPallettes')!).reverse()

        pallettes.splice(index, 1)
        console.log(pallettes);

        localStorage.setItem('userPallettes', JSON.stringify(pallettes.reverse()))

        const active = JSON.parse(localStorage.getItem('activePallette')!)
        if (active[0] === pallette[0] && active[1] === pallette[1] && active[2] === pallette[2] && active[3] === pallette[3] && active[4] === pallette[4]) {
            console.log(123);

            setActivePallette(generatedPallette)
            localStorage.setItem('activePallette', JSON.stringify(generatedPallette))
            setRefresh(!refresh)
        }

        setRefresh(!refresh)
    }

    const setActive = (pallette: Array<string>) => {
        setActivePallette(pallette)
        localStorage.setItem('activePallette', JSON.stringify(pallette))

        setRefresh(!refresh)
    }


    return (
        <>
            {
                !JSON.parse(localStorage.getItem('userPallettes')!)
                    ?
                    <div style={{ textAlign: 'center', color: '#FFFFFF', margin: '2rem 0.5rem' }}>Du har ingen gemte farver</div>
                    :
                    JSON.parse(localStorage.getItem('userPallettes')!).length
                        ?
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
                                                <Button onClick={() => setActive(pallettes)}>Set Active</Button>
                                                <Button onClick={() => deletePallette(pallettes, i)}>Delete</Button>
                                            </div>
                                        </ColorGroup>
                                        <div className={mypalletsStyle.buttonsDownUnderWrapper}>
                                            <div className={mypalletsStyle.bgLine} />
                                            <div className={mypalletsStyle.buttonsDownUnder}>
                                                <Button onClick={() => setActive(pallettes)}>Set Active</Button>
                                                <Button onClick={() => deletePallette(pallettes, i)}>Delete</Button>
                                            </div>
                                        </div>
                                        <hr className={i !== JSON.parse(localStorage.getItem('userPallettes')!).length - 1 ? mypalletsStyle.lineFull : mypalletsStyle.lineNone} />
                                    </div>
                                )
                            })}
                        </section>
                        :
                        <div style={{ textAlign: 'center', color: '#FFFFFF', margin: '2rem 0.5rem' }}>Du har ingen gemte farver</div>
            }
        </>

    )
}