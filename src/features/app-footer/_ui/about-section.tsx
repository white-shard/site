import Link from "next/link"

import { Button } from "@/shared/ui/button"

import { getFooterData } from "@/shared/api/settings.api"

type Props = {
	logo: React.ReactNode
}

export async function AboutSection({ logo }: Props) {
	const data = await getFooterData()

	return (
		<div className="flex flex-col gap-4 md:col-span-1 lg:col-span-3">
			<div className="text-2xl font-bold">{logo}</div>
			<p className="text-secondary max-w-screen-sm leading-relaxed">
				{data.description}
			</p>
			<Button className="w-fit" asChild>
				<Link href="#offer">{data.button}</Link>
			</Button>
		</div>
	)
}
