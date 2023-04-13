import { SvgIconProps } from "@mui/material"
import { ReactElement } from "react"

export interface Contact{ 
    icon?: ReactElement,
    title: string,
    content: string,
    link?: string,
}