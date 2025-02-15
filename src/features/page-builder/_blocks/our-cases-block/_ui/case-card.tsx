import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { CaseData } from "../_types/our-cases-block.types"

type Props = {
	data: CaseData
}
export function CaseCard({ data }: Props) {
	return (
		<div className="group relative">
			<div className="relative overflow-hidden rounded-xl shadow-lg">
				<Image
					src={data.pictures[0].picture.url || "/placeholder.svg"}
					alt={data.name}
					width={600}
					height={400}
					className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
				<div className="absolute bottom-0 left-0 p-6">
					<span className="mb-2 inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold tracking-wider text-white">
						{data.service}
					</span>
					<h3 className="mb-2 text-2xl font-bold text-white">{data.name}</h3>
					<p className="mb-4 text-gray-300">{data.description}</p>
					<Link
						href={`/cases/${data.id}`}
						className="inline-flex items-center text-purple-400 transition duration-300 hover:text-purple-300"
					>
						Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
			</div>
		</div>
	)
}
