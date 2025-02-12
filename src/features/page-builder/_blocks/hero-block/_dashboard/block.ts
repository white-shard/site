import { Block } from "payload"

export const HeroBlockDashboard: Block = {
	slug: "heroBlock",
	labels: {
		singular: "⏩ Первый экран",
		plural: "⏩ Первый экран"
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Мы проектируем ваш онлайн успех!"
		}
	]
}
