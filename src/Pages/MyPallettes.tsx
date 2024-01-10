import mypalletsStyle from './Mypallettes.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCard/ColorCard'
import ColorGroup from '../Components/ColorGroup/ColorGroup'


export function MyPallettes({ title }: { title: string }) {


    return (
        <>
            <section className={mypalletsStyle.savedPallets}>

                <ColorGroup>
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <div>
                        <Button />
                        <Button />
                    </div>
                </ColorGroup>
                <hr />
                <ColorGroup>
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <div>
                        <Button />
                        <Button />
                    </div>
                </ColorGroup>
                <hr />
                <ColorGroup>
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <ColorCard color={'#ff03f2'} copytext={true} />
                    <div>
                        <Button />
                        <Button />
                    </div>
                </ColorGroup>

            </section>
        </>

    )
}