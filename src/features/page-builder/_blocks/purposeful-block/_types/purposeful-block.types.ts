export type PurposefulBlockData = {
	service: string
	goals: Goal[]
}

export type Goal = {
	title: string
	description: never | null | undefined
}

export type AnimationParam = {
	scale: number
	duration: number
}
