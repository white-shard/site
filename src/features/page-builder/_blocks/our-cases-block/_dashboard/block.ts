import { Block } from "payload"

export const OurCasesBlockDashboard: Block = {
	slug: "ourCasesBlock",
	labels: {
		singular: "💼 Кейсы",
		plural: "💼 Кейсы"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Наши кейсы"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"В этом разделе представлены наши работы. Здесь вы можете ознакомиться с проектами, которые мы успешно реализовали."
		},
		{
			name: "count",
			label: "💼 Количество кейсов",
			type: "number",
			required: true,
			min: 1,
			max: 32,
			defaultValue: 6
		}
	]
}
