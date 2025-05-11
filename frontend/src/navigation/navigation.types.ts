import {JSX} from "react";

export interface IRoute {
    path: string
    element: JSX.Element
    loader?: () => any
}

export interface ILink {
    path: string
    name: string
}
