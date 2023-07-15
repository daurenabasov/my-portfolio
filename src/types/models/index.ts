export interface INavigate {
    name: string,
    path: string,
    getClose?: () => void;
}
export interface IMousePosition {
    x: number;
    y: number;
}
export interface IProjects {
    name: string;
    year: number | string;
    image?: string
}
export interface ISocial {
    social: string;
    link?: string;
}