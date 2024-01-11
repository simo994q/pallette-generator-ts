import homepageStyle from '../Pages/Homepage.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCard/ColorCard'
import ColorGroup from '../Components/ColorGroup/ColorGroup'
export function Homepage({ title }: { title: string }) {


    return (
        <section className={homepageStyle.homepage}>
            <div className={homepageStyle.headline}>
                <h1>Your new colors</h1>
            </div>
            <ColorGroup>
                <ColorCard color={'#ff03f2'} copytext={true} />
                <ColorCard color={'#ff03f2'} copytext={true} />
                <ColorCard color={'#ff03f2'} copytext={true} />
                <ColorCard color={'#ff03f2'} copytext={true} />
                <ColorCard color={'#ff03f2'} copytext={true} />
            </ColorGroup>
            <div className={homepageStyle.generateSave}>
                <Button>Generate</Button>
                <Button>Save</Button>
            </div>
        </section>
    )
}