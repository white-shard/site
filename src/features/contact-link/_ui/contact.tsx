import Link from "next/link"

import { getContactData } from "../_api/contact.api"

type Props = {
	prefix?: string
	hrefPattern: string
}

export async function Contact({ prefix, hrefPattern }: Props) {
	const contact = (await getContactData()) ?? {
		profile: "undefined",
		message: ""
	}
	const isUndefined = contact.profile === "undefined"
	const href = hrefPattern
		.replace("%profile%", contact.profile)
		.replace("%message%", contact.message)

	return (
		<Link href={isUndefined ? "#" : href} className="tracking-tighter">
			{prefix}
			{contact.profile}
		</Link>
	)
}
