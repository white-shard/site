import type { CollectionConfig } from "payload"

export const MediaCollection: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Медиа",
		plural: "🗃️ Медиа / Файлы"
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: "alt",
			label: "🏷️ Альтернативный текст",
			required: true,
			type: "text",
			defaultValue: "",
			hooks: {
				beforeValidate: [
					(props) => {
						if (props.value.length === 0 && props.data?.filename) {
							return props.data.filename
						}
						return props.value
					}
				]
			}
		}
	],

	upload: true
}
