import { GlobalConfig } from "payload"

import { NavigationLink } from "@/features/app-header/_types/navigation.type"

export const SettingsGlobal: GlobalConfig = {
	slug: "settings",
	label: "⚙️ Основные настройки",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "navigation",
			type: "array",
			label: "Навигация",
			defaultValue: [
				{ label: "Landing", href: "/landing" },
				{ label: "О нас", href: "/about" }
			] as NavigationLink[],
			fields: [
				{
					name: "label",
					required: true,
					type: "text",
					label: "🏷️ Название"
				},
				{
					name: "href",
					required: true,
					type: "text",
					label: "🔗 Ссылка",
					defaultValue: "/"
				},
				{
					name: "children",
					type: "array",
					label: "🔗 Дочерние ссылки",
					fields: [
						{
							name: "label",
							required: true,
							type: "text",
							label: "🏷️ Название"
						},
						{
							name: "href",
							required: true,
							type: "text",
							label: "🔗 Ссылка",
							defaultValue: "/"
						}
					],
					admin: {
						components: {
							RowLabel: "/custom/row-label#ArrayRowLabel"
						}
					}
				}
			],
			admin: {
				components: {
					RowLabel: "/custom/row-label#ArrayRowLabel"
				}
			}
		},
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
