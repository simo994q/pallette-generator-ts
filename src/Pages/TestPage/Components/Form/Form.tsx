import testPageStyle from './Form.module.scss'
import { Button } from '../../../../Components/Button/Buttons'

export function TestForm({ title }: { title: string }) {


    function saveFormData(event) {
        event.preventDefault()

    }

    return (

        < section className={testPageStyle.testForm} >
            <div className={testPageStyle.moduleBorderWrap}>
                <form className={testPageStyle.testForm} onSubmit={(event) => saveFormData(event)}>
                    <label>Username
                        <input name="username" placeholder='Thy Username'></input>
                    </label>
                    <label htmlFor="">Email Address
                        <input type="password" name="password" placeholder='Thy Email' />
                    </label>
                    <label htmlFor="">Country
                        <input type="password" name="password" placeholder='Thy Country' />
                    </label>
                    <label htmlFor="">Phone
                        <input type="password" name="password" placeholder='Thy Phone' />
                    </label>
                    <label htmlFor="">Password
                        <input type="password" name="password" placeholder='Thy Password' />
                    </label>
                    <div className={testPageStyle.checkbox}>
                        <input type="checkbox" />
                        <label htmlFor="" >I accept terms & conditions</label>
                    </div>
                    <Button>Send</Button>
                </form>
            </div>
        </section >


    )
}