import { Block } from "payload"

export const OfferRequestBlockDashboard: Block = {
	slug: "offerRequestBlock",
	labels: {
		singular: "📫 Форма заявки",
		plural: "📫 Форма заявки"
	},
	fields: [
		{
			name: "title",
			label: "🔍 Заголовок",
			type: "text",
			required: true,
			defaultValue: "Получите бесплатную консультацию"
		},
		{
			name: "description",
			label: "💬 Описание",
			type: "textarea",
			required: true,
			defaultValue:
				"Хотите получить бесплатную консультацию, заполните короткую форму и мы свяжемся с вами в удобное для вас время!"
		},
		{
			name: "picture",
			label: "🖼️ Изображение",
			type: "upload",
			relationTo: "media",
			required: true
		},
		{
			name: "formMeta",
			label: "🔍 Мета данные формы",
			type: "group",
			fields: [
				{
					name: "fullname",
					label: "👤 Имя",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "👤 Имя",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue: "Введите ваше имя",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "phone",
					label: "📞 Телефон",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "📞 Номер телефона",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue: "+7",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "email",
					label: "✉️ Адрес электронной почты",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "✉️ Адрес электронной почты",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue: "example@mail.ru",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "comment",
					label: "💬 Комментарий",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "💬 Комментарий",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue:
								"Укажите если вам лучше написать или позвонить в определенный промежуток времени",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "typeOfActivity",
					label: "⚒️ Ваша ниша",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "⚒️ Ваша ниша",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue:
								"Опишите чем вы занимаетесь, ваших клиентов, где размещались до этого",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "tasks",
					label: "💼 Задачи",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "💼 Задачи",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue:
								"Какие задачи должен решать продукт ( размещение рекламы в поиске, сайт каталог, блог, бронирование и др. )",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "competitors",
					label: "👥 Конкуренты",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "👥 Конкуренты",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue:
								"Укажите ваших конкурентов( 2-3 ссылки на сайт ваших конкурентов )",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "exampleSites",
					label: "✅ Примеры сайтов",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "✅ Примеры сайтов",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue:
								"Укажите примеры ( найдите в интернете сайты которые вам нравиться по дизайну и структуре 2-3 ссылки )",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "complexElements",
					label: "🌀 Сложные элементы",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "🌀 Сложные элементы",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue:
								"Укажите сложные элементы ( например калькулятор, онлайн оплата, создание аккаунтов и др.)",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "socialNetworks",
					label: "🔗 Социальные сети",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "🔗 Социальные сети",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue: "Если у вас есть соц. сети, укажите их",
							type: "textarea",
							required: true
						}
					]
				},
				{
					name: "logo",
					label: "🧊 Логотип",
					type: "group",
					fields: [
						{
							name: "label",
							label: "🔍 Заголовок",
							defaultValue: "🧊 Логотип",
							type: "text",
							required: true
						},
						{
							name: "placeholder",
							label: "💬 Подсказка",
							defaultValue: "У меня есть логотип",
							type: "textarea",
							required: true
						}
					]
				}
			]
		}
	]
}
