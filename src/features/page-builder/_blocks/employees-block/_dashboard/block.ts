import { Block } from "payload"

export const EmployeeBlockDashboard: Block = {
	slug: "employeeBlock",
	labels: {
		singular: "👤 Сотрудники",
		plural: "👤 Сотрудники"
	},
	fields: [
		{
			name: "title",
			label: "🏷️ Заголовок",
			type: "text",
			defaultValue: "Наши сотрудники",
			required: true
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			defaultValue: "",
			required: false
		}
	]
}
