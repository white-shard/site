import type { CollectionConfig } from "payload"

export const UserCollection: CollectionConfig = {
	slug: "users",
	labels: {
		singular: "Пользователя",
		plural: "👤 Пользователи"
	},
	admin: {
		hidden: true,
		useAsTitle: "email"
	},
	auth: true,
	fields: []
}
