import type { CollectionConfig } from "payload"

export const EmployeeCollection: CollectionConfig = {
	slug: "employees",
	labels: {
		singular: "👤 Сотрудник",
		plural: "👤 Сотрудники"
	},
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: "name"
	},
	fields: [
		{
			name: "role",
			label: "🏷️ Роль",
			type: "text",
			required: true
		},
		{
			name: "name",
			label: "🏷️ Имя",
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
			name: "experience",
			label: "💬 Опыт работы",
			type: "text",
			required: true
		},
		{
			name: "rank",
			label:
				"🔝 Звание ( Младший специалист, Старший специалист, Профи своего дела )",
			type: "text",
			defaultValue: "Младший специалист",
			required: true
		},
		{
			name: "picture",
			label: "🖼️ Изображение",
			type: "upload",
			relationTo: "media"
		}
	]
}
