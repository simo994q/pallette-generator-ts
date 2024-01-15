import mypalletsStyle from './Mypallettes.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCardSaved/ColorCardSaved'
import ColorGroup from '../Components/ColorGroupSaved/ColorGroupSaved'


export function MyPallettes() {

    const fakeData: Array<Array<string>> = [['#322a26', '#536e57', '#7a8857', '#d1c877', '#fbd5ae'], ['#b8614e', '#f7d298', '#f7f8e2', '#68b578', '#2b4f3d'], ['#a8431e', '#55797a', '#62bab1', '#e6dc92', '#eeb490'], ['#322a26', '#536e57', '#7a8857', '#d1c877', '#fbd5ae'], ['#b8614e', '#f7d298', '#f7f8e2', '#68b578', '#2b4f3d'], ['#a8431e', '#55797a', '#62bab1', '#e6dc92', '#eeb490']]

    

    return (
        <>
           {
           !localStorage.getItem('userPallettes') 
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
                                    <Button>Delete</Button>
                                </div>
                            </ColorGroup>
                            <div className={mypalletsStyle.buttonsDownUnderWrapper}>
                                <div className={mypalletsStyle.bgLine} />
                                <div className={mypalletsStyle.buttonsDownUnder}>
                                <Button>Set Active</Button>
                                <Button>Delete</Button>
                                </div>
                            </div>
                            <hr className={i !== fakeData.length - 1 ? mypalletsStyle.lineFull : mypalletsStyle.lineNone} />
                        </div>
                    )
                })}
            </section>}
        </>

    )
}