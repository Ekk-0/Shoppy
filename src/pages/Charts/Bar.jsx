import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Category, Legend, Tooltip, Highlight, BarSeries } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../context/ContextProvider'

const Bar = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Bar" title="Inflation Rate in Percentage" />
            <div className="w-full">
                <ChartComponent
                    id="bar-chart"
                    height="420px"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[BarSeries, DataLabel, Category, Legend, Tooltip, Highlight]} />
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item, index) => (
                            <SeriesDirective key={index} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Bar