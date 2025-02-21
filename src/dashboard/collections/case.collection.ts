import type { CollectionConfig } from "payload"

export const CasesCollection: CollectionConfig = {
	slug: "cases",
	labels: {
		singular: "💼 Кейс",
		plural: "💼 Кейсы"
	},
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: "name"
	},
	fields: [
		{
			name: "name",
			label: "🏷️ Название",
			type: "text",
			required: true,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "service",
			label: "✅ Услуга",
			type: "select",
			defaultValue: "site",
			options: [
				{
					label: "🗝️ Сайт под ключ",
					value: "site"
				},
				{
					label: "📱 Мобильное приложение",
					value: "mobile"
				},
				{
					label: "🔄 Ребрендинг сайта",
					value: "rebrand"
				},
				{
					label: "🎨 Дизайн",
					value: "design"
				},
				{
					label: "🛠️ Техническая поддержка",
					value: "support"
				},
				{
					label: "🎯 Контекстная реклама",
					value: "ads"
				}
			],
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "href",
			label: "🔍 Ссылка",
			type: "text",
			required: false,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "pictures",
			label: "🖼️ Изображения",
			type: "array",
			maxRows: 8,
			fields: [
				{
					name: "picture",
					label: "🖼️ Картинка",
					type: "upload",
					relationTo: "media"
				}
			]
		}
	]
}
