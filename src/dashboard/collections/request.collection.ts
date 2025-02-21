import type { CollectionConfig } from "payload"

export const RequestCollection: CollectionConfig = {
	slug: "request",
	labels: {
		singular: "📫 Заявка",
		plural: "📫 Заявки"
	},
	admin: {
		useAsTitle: "fullname"
	},
	fields: [
		{
			name: "fullname",
			label: "👤 Имя",
			type: "text",
			required: true,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "email",
			label: "✉️ Email",
			type: "text",
			required: true,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "phone",
			label: "📞 Телефон",
			type: "text",
			required: true,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "comment",
			label: "💬 Комментарий",
			type: "textarea",
			required: false
		},
		{
			name: "typeOfActivity",
			label: "⚒️ Тип деятельности",
			type: "textarea",
			required: false
		},
		{
			name: "tasks",
			label: "💼 Задачи",
			type: "textarea",
			required: false
		},
		{
			name: "competitors",
			label: "👥 Конкуренты",
			type: "textarea",
			required: false
		},
		{
			name: "exampleSites",
			label: "✅ Примеры сайтов",
			type: "textarea",
			required: false
		},
		{
			name: "complexElements",
			label: "🌀 Сложные элементы",
			type: "textarea",
			required: false
		},
		{
			name: "socialNetworks",
			label: "🔗 Социальные сети",
			type: "textarea",
			required: false
		},
		{
			name: "logo",
			label: "🎨 Логотип",
			type: "checkbox",
			required: false
		},
		{
			name: "status",
			label: "🔄 Статус",
			type: "select",
			options: ["🆕 Новая", "⚒️ В работе", "✅ Выполнена", "❌ Отменена"],
			defaultValue: "🆕 Новая",
			required: true,
			admin: {
				position: "sidebar"
			}
		}
	]
}
