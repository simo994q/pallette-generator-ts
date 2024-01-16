import homepageStyle from '../Pages/Homepage.module.scss'
import { Button } from "../Components/Button/Buttons"
import { useContext, useEffect, useState } from 'react'
import { ColorContext } from '../ColorContext'
import ColorCard from '../Components/ColorCardHome/ColorCardHome'
import ColorGroup from '../Components/ColorGroupHome/ColorGroupHome'

export function Homepage({ title }: { title: string }) {

    const [refresh, setRefresh] = useState(true)

    const { setActivePallette } = useContext(ColorContext)

    const { generatedPallette } = useContext(ColorContext)
    const { setGeneratedPallette } = useContext(ColorContext)

    const { setUserPallettes } = useContext(ColorContext)

    const fetchNewPallette = async () => {
        const response = await fetch('http://colormind.io/api/', {
            method: 'POST',
            body: JSON.stringify({ model: 'default' })
        });
        const data = await response.json();
        const allResultsHex: Array<string> = []

        data.result.map((arr: number[]) => {
            const rgb_arr = arr;
            const rgb = "#" + rgb_arr.map((e: any) => e.toString(16).padStart(2, 0)).join("")
            allResultsHex.push(rgb)
        })

        setActivePallette(allResultsHex)
        setGeneratedPallette(allResultsHex)

        localStorage.setItem('generatedPallette', JSON.stringify(allResultsHex))
        localStorage.setItem('activePallette', JSON.stringify(allResultsHex))
        return data;
    }


    const saveGeneratedPallette = () => {
        if (localStorage.getItem('userPallettes')) {
            const localPallettesJSON = JSON.parse(localStorage.getItem('userPallettes')!)

            const doesItExist = localPallettesJSON.some((palette: Array<Array<string>>) => JSON.stringify(palette) === JSON.stringify(generatedPallette))

            if (doesItExist) {
                alert('asved')
            } else {
                const pallettes = localPallettesJSON
                localStorage.setItem('userPallettes', JSON.stringify([...pallettes, generatedPallette]))
            }

        } else {
            localStorage.setItem('userPallettes', JSON.stringify([generatedPallette]))
            const pallettes = JSON.parse(localStorage.getItem('userPallettes')!)
            setUserPallettes(pallettes)
        }


    }




    useEffect(() => {
        if (localStorage.getItem('generatedPallette')) {
            setGeneratedPallette(JSON.parse(localStorage.getItem('generatedPallette')!))
            setRefresh(!refresh)
        }

        if (!localStorage.getItem('generatedPallette')) {
            fetchNewPallette()
        }
    }, [])

    
    return (
        <section className={homepageStyle.homepage}>
            <div className={homepageStyle.headline}>
                {localStorage.getItem('activePallette') 
                ? 
                <h1 style={{ background: `-webkit-linear-gradient(left, ${JSON.parse(localStorage.getItem('activePallette')!)[0]}, ${JSON.parse(localStorage.getItem('activePallette')!)[1]}, ${JSON.parse(localStorage.getItem('activePallette')!)[2]}, ${JSON.parse(localStorage.getItem('activePallette')!)[3]}, ${JSON.parse(localStorage.getItem('activePallette')!)[4]}) text`}}>{title}</h1>
                :
                <h1 style={{ background: `-webkit-linear-gradient(#bab393, #f1e5c1, #d0753c, #5e3326, #2d2a23)`, WebkitBackgroundClip: 'text'}}>{title}</h1>
                }
            </div>

            {generatedPallette.length ?
                <ColorGroup>
                    {generatedPallette.map((color: string, i: number) => {
                        return <ColorCard color={color} copytext={true} key={i} />

                    }

                    )}
                    <div className={homepageStyle.generateSaveMobile}>
                        <Button onClick={() => fetchNewPallette()}>Generate</Button>
                        <Button onClick={() => saveGeneratedPallette()}>Save</Button>
                    </div>
                </ColorGroup>
                :
                <p className={homepageStyle.infoText}>Click generate to get new colors</p>
            }


            <div className={homepageStyle.generateSave}>
                <Button onClick={() => fetchNewPallette()}>Generate</Button>
                <Button onClick={() => saveGeneratedPallette()}>Save</Button>
            </div>
        </section>
    )
}