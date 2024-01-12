import testPageStyle from './Testpage.module.scss'
import { Button } from '../../Components/Button/Buttons'

export function TestPage({ title }: { title: string }) {


    return (

        <section className={testPageStyle.testPage}>
            <h1>Your cool webside Heading</h1>
            <Button>Your Cool Button</Button>
            <form>
                <label>Username
                    <input name="username"></input>
                </label>
                <label htmlFor="">Password
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Send" />
            </form>            </section>


    )
}