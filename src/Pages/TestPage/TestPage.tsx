import { TestCard } from './Components/Card/Card'
import { TestForm } from './Components/Form/Form'
import testPageStyle from './Testpage.module.scss'
import { PieChart } from './Components/PieChart/PieChart'

export function TestPage() {


    return (

        <section className={testPageStyle.testPage}>

            <h1>Your cool webside Heading</h1>

            <TestCard />
            <TestForm />
            <PieChart />
        </section>
    )
}