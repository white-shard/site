import { ControllerRenderProps } from "react-hook-form"

import { Media } from "@/dashboard/payload-types"

import { RequestFormSchema } from "../_schema/offer-request-form.schema"

export type OfferRequestBlock = {
	title: string
	description: string
	picture: Media
	formMeta: OfferRequestBlockFormMeta
}

export type OfferRequestBlockFormMeta = {
	fullname: OfferRequestBlockFormMetaField
	email: OfferRequestBlockFormMetaField
	phone: OfferRequestBlockFormMetaField
	comment: OfferRequestBlockFormMetaField
	typeOfActivity: OfferRequestBlockFormMetaField
	tasks: OfferRequestBlockFormMetaField
	competitors: OfferRequestBlockFormMetaField
	exampleSites: OfferRequestBlockFormMetaField
	complexElements: OfferRequestBlockFormMetaField
	socialNetworks: OfferRequestBlockFormMetaField
	logo: OfferRequestBlockFormMetaField
}

export type OfferRequestBlockFormMetaField = {
	label: string
	placeholder: string
}

export type FieldTypeString = ControllerRenderProps<
	RequestFormSchema,
	| "fullname"
	| "email"
	| "phone"
	| "comment"
	| "typeOfActivity"
	| "tasks"
	| "competitors"
	| "exampleSites"
	| "complexElements"
	| "socialNetworks"
>

export type FieldTypeBoolean = ControllerRenderProps<RequestFormSchema, "logo">
