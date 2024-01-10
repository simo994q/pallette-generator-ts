import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss'
import { Button } from '../../Components/Button/Buttons';

export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                <Link to='/'><h3>Colorizer Pallete Generator</h3></Link>
                <ul>
                    <Link to='/'>  <Button /></Link>
                    <Link to='/mypallettes'><li><Button /></li></Link>
                </ul>
            </nav>
        </section>
    )
}