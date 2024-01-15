import pieChart from './PieChart.module.scss'


export function PieChart() {


    return (
        <>
            <div className={pieChart.pieBody}>
                <div className={pieChart.pie}></div>
                <div className={pieChart.colors}>
                    <div className={pieChart.color1}><p>Awesome</p></div>
                    <div className={pieChart.color2}><p>Sweet</p></div>
                    <div className={pieChart.color3}><p>Delicios</p></div>
                </div>
            </div>
        </>

    )
}