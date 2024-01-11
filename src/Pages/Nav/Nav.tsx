import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss'
import { Button } from '../../Components/Button/Buttons';

export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                <Link to='/'><h3>Colorizer Pallete Generator</h3></Link>
                <ul>
                    <Link to='/'>  <Button>Generate</Button></Link>
                    <Link to='/mypallettes'><Button>Saved</Button></Link>
                </ul>
            </nav>
        </section>
    )
}