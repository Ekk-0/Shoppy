/**
 * Sample for Hilo Series
 */
import * as React from "react";
import { useEffect } from "react";
import { Header } from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
// import { chartValues } from './financial-data';
const chartValues = {};

import { Browser } from '@syncfusion/ej2-base';
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Financial = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Financial" title="Browser Market Share" />
            <div className="w-full">
                <div className='control-pane'>
                    <style>{SAMPLE_CSS}</style>
                    <div className='control-section'>
                        <ChartComponent id='charts' load={load.bind(this)} style={{ textAlign: "center" }} primaryXAxis={{ valueType: 'DateTime', crosshairTooltip: { enable: true }, edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 } }} primaryYAxis={{ title: 'Price', minimum: 10, maximum: 180, interval: 20, labelFormat: '${value}', lineStyle: { width: 0 }, majorTickLines: { width: 0 } }} legendSettings={{ visible: false }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, enableMarker: false, header: "", format: "<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b>" }} crosshair={{ enable: false, lineType: 'Vertical', line: { width: 0 } }} width={Browser.isDevice ? '100%' : '75%'} title='AAPL Historical' loaded={onChartLoad.bind(this)}>
                            <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={chartValues} xName='period' yName='low' name='Apple Inc' type='Hilo' low='low' high='high' />
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                </div>
            </div>
        </div>);
};
export default Financial;
