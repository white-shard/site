import cyrillicToLatin from "cyrillic-to-latin"
import type { CollectionConfig } from "payload"

import { registeredBlocks } from "@/features/page-builder"

export const PageCollection: CollectionConfig = {
	slug: "pages",
	labels: {
		singular: "Страницу",
		plural: "📄 Страницы"
	},
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: "title"
	},
	fields: [
		{
			name: "slug",
			label: "🔗 Ссылка",
			type: "text",
			unique: true,
			admin: {
				position: "sidebar"
			},
			hooks: {
				beforeValidate: [
					(props) => {
						if (props.data?.title) {
							if (props.value) return props.value
							return cyrillicToLatin(props.data.title)
								.toLowerCase()
								.replace(/[^a-zA-Z0-9]+/g, "-")
								.replace(/^-+|-+$/g, "")
						}
						return props.value
					}
				]
			}
		},
		{
			name: "title",
			label: "🏷️ Заголовок",
			type: "text",
			required: true,
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
			name: "keywords",
			label: "🔍 Ключевые слова",
			type: "text",
			required: true,
			admin: {
				position: "sidebar"
			}
		},
		{
			name: "blocks",
			label: "🔧 Блоки",
			type: "blocks",
			minRows: 1,
			maxRows: 20,
			blocks: registeredBlocks.map((block) => block.dashboard)
		}
	]
}
