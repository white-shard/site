import Image from "next/image"

import { Case, Media } from "@/dashboard/payload-types"

type Props = {
	data: Case
}

export function CasePageRenderer({ data }: Props) {
	return (
		<>
			<h2 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
				{data.name}
			</h2>
			<p className="text-secondary max-w-xl">{data.description}</p>
			{data.pictures?.map((it) => {
				const picture = it.picture as Media
				return (
					<Image
						key={it.id}
						src={picture?.url || "#"}
						alt={picture?.alt || "#"}
						width={1920}
						height={1080}
					/>
				)
			})}
		</>
	)
}
