import { ReactNode } from "react"

export interface ButtonProps {
    title: string
    className: ReactNode
    variant?: "green" | "white" | "black"
}