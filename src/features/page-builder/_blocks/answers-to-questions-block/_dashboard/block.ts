import { Block } from "payload"

export const AnswersToQuestionsBlockDashboard: Block = {
	slug: "answersToQuestionsBlock",
	labels: {
		singular: "❓ Ответы на вопросы",
		plural: "❓ Ответы на вопросы"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Ответы на вопросы"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: false,
			defaultValue:
				"В этом разделе вы найдете ответы на самые популярные вопросы наших клиентов. Если что-то осталось неясным или требуется дополнительная информация, мы всегда готовы помочь и ответить на все ваши вопросы!"
		},
		{
			name: "questions",
			label: "🔍 Вопросы",
			labels: {
				singular: "Вопрос",
				plural: "Вопросы"
			},
			type: "array",
			fields: [
				{
					name: "name",
					label: "❓ Вопрос",
					type: "text",
					required: true
				},
				{
					name: "answer",
					label: "💬 Ответ",
					type: "textarea",
					required: true
				}
			],
			admin: {
				components: {
					RowLabel: "/custom/row-label#ArrayRowLabel"
				}
			}
		}
	]
}
