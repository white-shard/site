import { Block } from "payload"

export const TextBlockDashboard: Block = {
	slug: "textBlock",
	labels: {
		singular: "🏷️ Текстовый блок",
		plural: "🏷️ Текстовые блоки"
	},
	fields: [
		{
			name: "content",
			label: "Текст",
			type: "richText"
		}
	]
}
