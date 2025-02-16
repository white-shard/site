"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { Button } from "@/shared/ui/button"
import { Checkbox } from "@/shared/ui/checkbox"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"

import {
	RequestFormSchema,
	requestFormSchema
} from "../_schema/offer-request-form.schema"
import {
	FieldTypeBoolean,
	FieldTypeString,
	OfferRequestBlockFormMeta,
	OfferRequestBlockFormMetaField
} from "../_types/offer-request-block.type"

type Props = {
	formMeta: OfferRequestBlockFormMeta
}

export function OfferRequestForm({ formMeta }: Props) {
	const form = useForm<RequestFormSchema>({
		resolver: zodResolver(requestFormSchema),
		defaultValues: {
			fullname: "",
			phone: "",
			email: ""
		}
	})

	const onSubmit: SubmitHandler<RequestFormSchema> = (data) => {
		alert(JSON.stringify(data))
	}

	const [showOfferFields, setShowOfferFields] = useState(false)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 md:px-16"
			>
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
				<AnimatePresence>
					{showOfferFields && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							transition={{ duration: 0.3 }}
						>
							<div className="space-y-4">
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
										<FormTextarea field={field} meta={formMeta.exampleSites} />
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
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<Button type="submit" className="h-10 w-full">
					Отправить заявку
				</Button>
				<Button
					onClick={(e) => {
						e.preventDefault()
						setShowOfferFields((old) => !old)
					}}
					variant="outline"
					className="h-10 w-full"
				>
					{showOfferFields
						? "Скрыть дополнительные поля"
						: "Получить коммерческое предложение"}
				</Button>
			</form>
		</Form>
	)
}

function FormInput({
	field,
	meta
}: {
	field: FieldTypeString
	meta: OfferRequestBlockFormMetaField
}) {
	return (
		<FormItem>
			<FormLabel>
				<span className="text-lg font-bold">{meta.label}</span>
			</FormLabel>
			<FormControl>
				<Input
					className="my-2 !h-10"
					placeholder={meta.placeholder}
					{...field}
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	)
}

function FormTextarea({
	field,
	meta
}: {
	field: FieldTypeString
	meta: OfferRequestBlockFormMetaField
}) {
	return (
		<FormItem>
			<FormLabel>
				<span className="text-lg font-bold">{meta.label}</span>
			</FormLabel>
			<FormControl>
				<Textarea
					className="my-2 !h-32"
					placeholder={meta.placeholder}
					{...field}
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	)
}

function FormCheckbox({
	field,
	meta
}: {
	field: FieldTypeBoolean
	meta: OfferRequestBlockFormMetaField
}) {
	return (
		<FormItem>
			<FormLabel>
				<span className="text-lg font-bold">{meta.label}</span>
			</FormLabel>
			<FormControl>
				<div className="my-2 flex items-center gap-2">
					<Checkbox
						id={field.name}
						checked={field.value}
						onCheckedChange={field.onChange}
					/>
					<label htmlFor={field.name}>{meta.placeholder}</label>
				</div>
			</FormControl>
			<FormMessage />
		</FormItem>
	)
}
