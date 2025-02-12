import { RichText } from "@payloadcms/richtext-lexical/react"

import "../_styles/rich-text.css"

type Props = {
	data: never
}
export function TextBlockRenderer(props: Props) {
	return <RichText className="richText" data={props.data} />
}
