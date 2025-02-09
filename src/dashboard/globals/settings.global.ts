import { GlobalConfig } from "payload"

export const SettingsGlobal: GlobalConfig = {
	slug: "settings",
	label: "⚙️ Основные настройки",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "contact",
			type: "group",
			label: "📃 Контакты",
			fields: [
				{
					name: "profile",
					required: true,
					type: "text",
					defaultValue: "white_shard",
					label: "👤 Telegram профиль (без @)"
				},
				{
					name: "message",
					required: true,
					type: "textarea",
					label: "📃 Шаблон сообщения",
					defaultValue: "Здравствуйте! Мне нужна консультация."
				}
			]
		}
	]
}
