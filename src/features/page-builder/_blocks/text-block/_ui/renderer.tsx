"use client"

import { RichText } from "@payloadcms/richtext-lexical/react"

type Props = {
	data: {
		content: never
	}
}
export function TextBlockRenderer({ data }: Props) {
	return <RichText className="richText" data={data.content} />
}
