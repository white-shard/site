"use server"

import { z } from "zod"

import { getAppCMS } from "@/shared/lib/payload"

import { requestFormSchema } from "../_schema/offer-request-form.schema"

export async function submitFeedbackForm(
	data: z.infer<typeof requestFormSchema>
) {
	const payload = await getAppCMS()
	return await payload.create({
		collection: "request",
		data: { ...data, status: "🆕 Новая" }
	})
}
