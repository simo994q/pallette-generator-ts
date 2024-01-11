import homepageStyle from '../Pages/Homepage.module.scss'
import { Button } from "../Components/Button/Buttons"
import ColorCard from '../Components/ColorCard/ColorCard'
import ColorGroup from '../Components/ColorGroup/ColorGroup'
import { useContext, useEffect } from 'react'
import { ColorContext } from '../ColorContext'

export function Homepage({ title }: { title: string }) {

    const { setActivePallette } = useContext(ColorContext)

    const { generatedPallette } = useContext(ColorContext)
    const { setGeneratedPallette } = useContext(ColorContext)

    
    const fetchNewPallette = async () => {
        const response = await fetch('http://colormind.io/api/', {
            method: 'POST',
            body: JSON.stringify({ model: 'default' })
        });
        const data = await response.json();
        console.log(data);

        const allResultsHex: Array<string> = []

        data.result.map((arr: number[]) => {
            const rgb_arr = arr;
            const rgb = "#" + rgb_arr.map((e: any)=>e.toString(16).padStart(2, 0)).join("")
            allResultsHex.push(rgb)
        })
        console.log(allResultsHex);

        setActivePallette(allResultsHex)
        setGeneratedPallette(allResultsHex)

        localStorage.setItem('generatedPallette', JSON.stringify(allResultsHex))
        localStorage.setItem('activePallette', JSON.stringify(allResultsHex))
        return data;
    }   

    console.log(generatedPallette);
    
    useEffect(() => {
        if (localStorage.getItem('generatedPallette')) {
            setGeneratedPallette(JSON.parse(localStorage.getItem('generatedPallette')!))
        }
    }, [])

    return (
        <section className={homepageStyle.homepage}>
            <div className={homepageStyle.headline}>
                <h1>{title}</h1>
            </div>
            <ColorGroup>
                {generatedPallette.length ?
                    generatedPallette.map((color: string, i: number) => {
                        return <ColorCard color={color} copytext={true} key={i} />
                    }
                    )
                    :
                    <p className={homepageStyle.infoText}>Click generate to get new colors</p>
                }
            </ColorGroup>
            <div className={homepageStyle.generateSave}>
                <Button onClick={() => fetchNewPallette()}>Generate</Button>
                <Button>Save</Button>
            </div>
        </section>
    )
}