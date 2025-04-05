"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

import { BlockHeader } from "@/shared/ui/block-header"
import { Button } from "@/shared/ui/button"
import { Form, FormField } from "@/shared/ui/form"

import { submitFeedbackForm } from "../_actions/submit-form-action"
import {
	RequestFormSchema,
	requestFormSchema
} from "../_schema/offer-request-form.schema"
import { OfferRequestBlock } from "../_types/offer-request-block.type"

import { FormCheckbox, FormInput, FormTextarea } from "./form-inputs"

type Props = {
	data: OfferRequestBlock
}

export function OfferRequestBlockRenderer({ data }: Props) {
	const form = useForm<RequestFormSchema>({
		resolver: zodResolver(requestFormSchema),
		defaultValues: {
			fullname: "",
			phone: "",
			email: "",
			promoCode: ""
		}
	})

	const onSubmit: SubmitHandler<RequestFormSchema> = (data) => {
		submitFeedbackForm(data)
			.then(() => {
				form.reset()
				toast("✅ Заявка отправлена", {
					description: "В ближайшее время мы с вами свяжемся"
				})
			})
			.catch(() => {
				toast("❌ Произошла ошибка", {
					description: "Заявка не была отправлена, попробуйте повторить позднее"
				})
			})
	}

	const [showOfferFields, setShowOfferFields] = useState(false)
	const formMeta = data.formMeta

	const FormButtons = () => (
		<div className="flex flex-col gap-4 md:flex-row">
			<Button type="submit" className="h-10 w-full md:w-fit">
				Отправить заявку
			</Button>
			<Button
				onClick={(e) => {
					e.preventDefault()
					setShowOfferFields((old) => !old)
				}}
				variant="outline"
				className="h-10 w-full md:w-fit"
			>
				{showOfferFields
					? "Скрыть дополнительные поля"
					: "Получить коммерческое предложение"}
			</Button>
		</div>
	)

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="relative flex-col gap-4 *:flex">
					<div id="offer" className="absolute -top-16" />
					<div className="flex flex-col gap-4 md:flex-row">
						<motion.div
							className="flex flex-1 flex-col gap-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<BlockHeader title={data.title} description={data.description} />
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Image
									src={data.picture.url || ""}
									alt={data.picture.alt || data.title}
									width={640}
									height={480}
									className="rounded-lg"
								/>
							</motion.div>
						</motion.div>

						<motion.div
							className="flex-1"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<div className="space-y-4 md:pl-16">
								<FormField
									control={form.control}
									name="fullname"
									render={({ field }) => (
										<FormInput field={field} meta={formMeta.fullname} />
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormInput field={field} meta={formMeta.email} />
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormInput field={field} meta={formMeta.phone} />
									)}
								/>
								<FormField
									control={form.control}
									name="comment"
									render={({ field }) => (
										<FormTextarea field={field} meta={formMeta.comment} />
									)}
								/>
								<FormField
									control={form.control}
									name="promoCode"
									render={({ field }) => (
										<FormInput field={field} meta={formMeta.promoCode} />
									)}
								/>
								{!showOfferFields && <FormButtons />}
							</div>
						</motion.div>
					</div>
					<AnimatePresence>
						{showOfferFields && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								transition={{ duration: 0.3 }}
							>
								<div className="w-full space-y-4">
									<FormField
										control={form.control}
										name="typeOfActivity"
										render={({ field }) => (
											<FormTextarea
												field={field}
												meta={formMeta.typeOfActivity}
											/>
										)}
									/>
									<FormField
										control={form.control}
										name="tasks"
										render={({ field }) => (
											<FormTextarea field={field} meta={formMeta.tasks} />
										)}
									/>
									<FormField
										control={form.control}
										name="competitors"
										render={({ field }) => (
											<FormTextarea field={field} meta={formMeta.competitors} />
										)}
									/>
									<FormField
										control={form.control}
										name="exampleSites"
										render={({ field }) => (
											<FormTextarea
												field={field}
												meta={formMeta.exampleSites}
											/>
										)}
									/>
									<FormField
										control={form.control}
										name="complexElements"
										render={({ field }) => (
											<FormTextarea
												field={field}
												meta={formMeta.complexElements}
											/>
										)}
									/>
									<FormField
										control={form.control}
										name="socialNetworks"
										render={({ field }) => (
											<FormTextarea
												field={field}
												meta={formMeta.socialNetworks}
											/>
										)}
									/>
									<FormField
										control={form.control}
										name="logo"
										render={({ field }) => (
											<FormCheckbox field={field} meta={formMeta.logo} />
										)}
									/>
									<FormButtons />
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</form>
		</Form>
	)
}
