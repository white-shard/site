"use client"

import { Checkbox } from "@/shared/ui/checkbox"
import { FormControl, FormItem, FormLabel, FormMessage } from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"

import {
	FieldTypeBoolean,
	FieldTypeString,
	OfferRequestBlockFormMetaField
} from "../_types/offer-request-block.type"

export function FormInput({
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

export function FormTextarea({
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
					className="my-2 h-[9.85rem]"
					placeholder={meta.placeholder}
					{...field}
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	)
}

export function FormCheckbox({
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
