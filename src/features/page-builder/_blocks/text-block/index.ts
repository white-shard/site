import { Block } from "payload"

export const TextBlock: Block = {
	slug: "textBlock",
	labels: {
		singular: "🏷️ Текстовый блок",
		plural: "🏷️ Текстовые блоки"
	},
	fields: [
		{
			name: "textBlock",
			label: "Текст",
			type: "richText",
			required: true
		}
	]
}
