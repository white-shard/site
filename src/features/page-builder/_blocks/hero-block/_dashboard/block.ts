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
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Мы проектируем ваш онлайн успех!"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"Мы создаем современные и эффективные сайты с индивидуальным подходом и без ограничений шаблонами."
		},
		{
			name: "button",
			label: "🔗 Кнопка",
			type: "text",
			required: true,
			defaultValue: "Подробнее"
		},
		{
			name: "slider",
			label: "📷 Слайдер",
			labels: {
				singular: "Слайд",
				plural: "Слайды"
			},
			type: "array",
			maxRows: 10,
			fields: [
				{
					name: "desktopImage",
					type: "upload",
					required: true,
					relationTo: "media"
				},
				{
					name: "mobileImage",
					type: "upload",
					required: true,
					relationTo: "media"
				}
			]
		}
	]
}
