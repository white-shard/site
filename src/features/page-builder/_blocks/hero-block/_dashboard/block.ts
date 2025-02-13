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
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue:
				"Мы создаем современные и эффективные сайты с индивидуальным подходом и без ограничений шаблонами."
		}
	]
}
