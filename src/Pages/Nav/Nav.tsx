import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss'
import { Button } from '../../Components/Button/Buttons';
import { useContext, useEffect } from 'react';
import { ColorContext } from '../../ColorContext';

export function Navigation() {

    const { activePallette } = useContext(ColorContext)

    useEffect(() => {
        const spurgt = 'denne use effect er bare til at opdatere nav baren'
        spurgt.repeat
    }, [activePallette])

    return (
        <section className={navStyle.navigation}>
            <nav>
                {localStorage.getItem('activePallette')
                    ?
                    <Link to='/'><h3 style={{ background: `-webkit-linear-gradient(left, ${JSON.parse(localStorage.getItem('activePallette')!)[0]}, ${JSON.parse(localStorage.getItem('activePallette')!)[1]}, ${JSON.parse(localStorage.getItem('activePallette')!)[2]}, ${JSON.parse(localStorage.getItem('activePallette')!)[3]}, ${JSON.parse(localStorage.getItem('activePallette')!)[4]}) text` }}>Colorizer Pallete Generator</h3></Link>
                    :
                    <Link to='/'><h3 style={{ background: `-webkit-linear-gradient(#bab393, #f1e5c1, #d0753c, #5e3326, #2d2a23)`, WebkitBackgroundClip: 'text' }}>Colorizer Pallete Generator</h3></Link>
                }
                <ul>
                    <Link to='/'><Button styleProps={{ width: '100px', }} >Generate</Button></Link>
                    <Link to='/mypallettes'><Button styleProps={{ width: '100px' }}>Saved</Button></Link>
                    <Link to='/testPage'><Button styleProps={{ width: '100px' }}>Test site</Button></Link>
                </ul>
            </nav>
        </section>
    )
}