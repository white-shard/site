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
			name: "metaData",
			type: "group",
			label: "Мета-данные",
			fields: [
				{
					name: "title",
					type: "text",
					label: "🏷️ Заголовок",
					required: true,
					defaultValue: "White Shard / Студия Веб Разработки"
				},
				{
					name: "template",
					type: "text",
					label: "🏷️ Шаблон заголовка (Для всех страниц кроме главной)",
					defaultValue: "%s - White Shard / Студия Веб Разработки"
				},
				{
					name: "description",
					type: "textarea",
					label: "💬 Описание",
					defaultValue:
						"White Shard - Студия Веб Разработки. Создаем качественные и современные веб-сайты и приложения."
				},
				{
					name: "keywords",
					type: "textarea",
					label: "🔍 Ключевые слова",
					defaultValue:
						"White Shard, Веб Разработка, Студия Веб Разработки, Веб-сайты, Приложения, Создание сайтов, Разработка приложений"
				}
			]
		},
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
			name: "footer",
			type: "group",
			label: "📃 Футер",
			fields: [
				{
					name: "description",
					label: "💬 Описание",
					type: "textarea",
					required: true,
					defaultValue:
						"Мы создаем инновационные решения для вашего бизнеса, помогая компаниям развиваться в цифровую эпоху"
				},
				{
					name: "button",
					label: "🔗 Кнопка",
					type: "text",
					required: true,
					defaultValue: "Бесплатная консультация"
				}
			]
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
