import { Block } from "payload"

export const WhyChooseUsBlockDashboard: Block = {
	slug: "whyChooseUsBlock",
	labels: {
		singular: "💡 Почему выбирают нас",
		plural: "💡 Почему выбирают нас"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Почему выбирают нас"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"Мы предлагаем комплексные решения для вашего бизнеса, от разработки до поддержки и развития."
		},
		{
			name: "items",
			label: "💡 Элементы",
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
