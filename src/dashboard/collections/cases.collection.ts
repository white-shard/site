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
			defaultValue: "🗝️ Сайт под ключ",
			options: [
				"🗝️ Сайт под ключ",
				"📱 Мобильное приложение",
				"🔄 Ребрендинг сайта",
				"🎨 Дизайн",
				"🛠️ Техническая поддержка",
				"🎯 Контекстная реклама"
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
