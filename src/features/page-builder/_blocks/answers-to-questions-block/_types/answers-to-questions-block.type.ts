export type AnswersToQuestionsBlockData = {
	title: string
	description?: string
	questions: QuestionData[]
}

export type QuestionData = {
	id: string
	name: string
	answer: string
}
