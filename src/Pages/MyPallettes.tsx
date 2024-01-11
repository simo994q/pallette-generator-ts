import mypalletsStyle from './Mypallettes.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCardSaved/ColorCardSaved'
import ColorGroup from '../Components/ColorGroupSaved/ColorGroupSaved'


export function MyPallettes({ title }: { title: string }) {


    return (
        <>
            <section className={mypalletsStyle.savedPallets}>

                <ColorGroup>
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <div className={mypalletsStyle.buttonsToTheSide}>
                        <Button />
                        <Button />
                    </div>
                </ColorGroup>
                <div className={mypalletsStyle.buttonsDownUnder}>
                    <Button />
                    <Button />
                </div>
                <hr />
                <ColorGroup>
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <div className={mypalletsStyle.buttonsToTheSide}>
                        <Button />
                        <Button />
                    </div>
                </ColorGroup>
                <div className={mypalletsStyle.buttonsDownUnder}>
                    <Button />
                    <Button />
                </div>
                <hr />
                <ColorGroup>
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <ColorCard color={'#ff03f2'} copytext={false} />
                    <div className={mypalletsStyle.buttonsToTheSide}>
                        <Button />
                        <Button />
                    </div>
                </ColorGroup>
                <div className={mypalletsStyle.buttonsDownUnder}>
                    <Button />
                    <Button />
                </div>

            </section>
        </>

    )
}