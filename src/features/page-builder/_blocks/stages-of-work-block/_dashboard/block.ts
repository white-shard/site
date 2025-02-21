import { Block } from "payload"

export const StagesOfWorkBlockDashboard: Block = {
	slug: "stagesOfWorkBlock",
	labels: {
		singular: "⚒️ Этапы работы",
		plural: "⚒️ Этапы работы"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Этапы разработки"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"Разработка сайта - это сложный процесс, состоящий из нескольких этапов. Мы тщательно прорабатываем каждый шаг, чтобы создать качественный продукт."
		},
		{
			name: "stages",
			label: "⚒️ Этапы",
			type: "array",
			fields: [
				{
					name: "name",
					label: "🔍 Название",
					type: "text",
					required: true
				},
				{
					name: "description",
					label: "💬 Описание",
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
