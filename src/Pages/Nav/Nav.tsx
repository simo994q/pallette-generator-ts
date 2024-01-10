import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss'


export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                    <Link to='/'><li>Colorizer Pallete Generator</li></Link>
                <ul>
                    <Link to='/mypallettes'><li>My Palettes</li></Link>
                </ul>
            </nav>
        </section>
    )
}