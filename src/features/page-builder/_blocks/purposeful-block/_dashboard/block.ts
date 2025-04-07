import { Block } from "payload"

export const PurposefulBlockDashboard: Block = {
	slug: "purposefulBlock",
	labels: {
		singular: "🎨 Целевой блок",
		plural: "🎨 Целевой блок"
	},
	fields: [
		{
			name: "service",
			label: "💼 Услуга",
			type: "text",
			required: true,
			defaultValue: "Лендинг"
		},
		{
			name: "goals",
			label: "🎯 Цели",
			labels: {
				singular: "Цель",
				plural: "Цели"
			},
			type: "array",
			required: true,
			fields: [
				{
					name: "title",
					label: "🔍 Название",
					type: "text",
					required: true
				},
				{
					name: "description",
					label: "💬 Описание",
					type: "richText",
					required: false
				}
			]
		}
	]
}
