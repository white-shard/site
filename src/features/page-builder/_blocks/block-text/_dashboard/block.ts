import { Block } from "payload"

export const BlockTextDashboard: Block = {
	slug: "blockText",
	labels: {
		singular: "🏷️ Текстовый блок",
		plural: "🏷️ Текстовые блоки"
	},
	fields: [
		{
			name: "data",
			label: "Текст",
			type: "richText"
		}
	]
}
