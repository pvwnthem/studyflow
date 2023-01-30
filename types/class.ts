import type { Assignment } from './assignment'

export type Class = {
    id: string
    name: string
    teacher: string
    period: number
    assignments: Assignment[]
}