import { RichText } from "@payloadcms/richtext-lexical/react"

import "../_styles/rich-text.css"

export function BlockTextRenderer(data: never) {
	return <RichText className="richText" data={data} />
}
