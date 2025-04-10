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
			name: "features",
			label: "🔍 Особенности",
			type: "array",
			fields: [
				{
					name: "name",
					label: "🔍 Особенность",
					type: "text",
					required: true
				}
			],
			admin: {
				components: {
					RowLabel: "/custom/row-label#ArrayRowLabel"
				}
			}
		},
		{
			name: "button",
			label: "🔗 Кнопка",
			type: "text",
			required: true,
			defaultValue: "Подробнее"
		},
		{
			name: "cost",
			label: "💰 Стоимость",
			type: "text",
			required: false
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
