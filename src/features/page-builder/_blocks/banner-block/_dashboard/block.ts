import { Block } from "payload"

export const BannerBlockDashboard: Block = {
	slug: "bannerBlock",
	labels: {
		singular: "🎨 Баннер",
		plural: "🎨 Баннер"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Акция!"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"Если вы пришли от нашего промоутера, укажите специальный промокод и получите скидку на любую услугу."
		},
		{
			name: "discount",
			label: "💰 Скидка",
			type: "text",
			required: true,
			defaultValue: "15%"
		}
	]
}
