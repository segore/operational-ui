import { IChartStateObject, IEvents, IObject, IState, Partial, TD3Selection, TSeriesEl, TStateWriter } from "../utils/typings";
export { IChartStateObject, IEvents, IObject, IState, Partial, TD3Selection, TSeriesEl, TStateWriter };
export declare type TFocusElement = string;
export interface IConfig {
    duration: number;
    focusElement?: TFocusElement;
    height: number;
    hidden: boolean;
    legend: true;
    maxWidth: number;
    maxLegendRatio: number;
    maxLegendWidth: number;
    maxTotalFontSize: number;
    minChartWithLegend: number;
    minWidth: number;
    minInnerRadius: number;
    minLegendWidth: number;
    minTotalFontSize: number;
    numberFormatter: (x: number) => string;
    outerBorderMargin: number;
    showComponentFocus: boolean;
    uid: string;
    visualizationName: string;
    width: number;
}
export declare type TDatum = IObject;
export interface IDataAccessors {
    data: (d: any) => any;
}
export interface ISeriesAccessors {
    name: (d: TDatum) => string;
    renderAs: (d: TDatum) => any;
}
export interface IAccessors {
    data: IDataAccessors;
    series: ISeriesAccessors;
}
export interface IComputedState {
    canvas: IObject;
    focus: IObject;
    series: IObject;
}
export interface IMousePosition {
    absolute: {
        x: number;
        y: number;
    };
    relative: {
        x: number;
        y: number;
    };
}