import { Block } from "payload"

export const ServicesBlockDashboard: Block = {
	slug: "servicesBlock",
	labels: {
		singular: "🔍 Услуги",
		plural: "🔍 Услуги"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Наши услуги"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"Мы предлагаем широкий спектр услуг по разработке и продвижению сайтов. Наша команда профессионалов поможет воплотить в жизнь ваши идеи."
		},
		{
			name: "services",
			label: "🔍 Услуги",
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
				},
				{
					name: "cost",
					label: "💰 Стоимость",
					type: "text",
					required: true
				},
				{
					name: "link",
					label: "🔗 Ссылка",
					type: "relationship",
					required: true,
					relationTo: "pages"
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
