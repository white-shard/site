import { z } from "zod"

import { isMobilePhone } from "@/shared/lib/validators"

const requiredMessage = { message: "⚠️ Заполните это поле!" }

export const requestFormSchema = z.object({
	fullname: z.string().nonempty(requiredMessage),
	phone: z.string().nonempty(requiredMessage).regex(isMobilePhone, {
		message: "⚠️ Введите правильный номер телефона! Пример: +79001234567"
	}),
	email: z.string().nonempty(requiredMessage).email({
		message: "⚠️ Неверный формат адреса электронной почты!"
	}),
	comment: z
		.string()
		.max(1000, {
			message: "Комментарий должен содержать не больше 1000 символов"
		})
		.optional(),
	promoCode: z.string().optional(),
	typeOfActivity: z.string().optional(),
	tasks: z.string().optional(),
	competitors: z.string().optional(),
	exampleSites: z.string().optional(),
	complexElements: z.string().optional(),
	socialNetworks: z.string().optional(),
	logo: z.boolean().default(false)
})

export type RequestFormSchema = z.infer<typeof requestFormSchema>
