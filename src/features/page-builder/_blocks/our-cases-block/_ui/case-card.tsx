"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { CaseData } from "../_types/our-cases-block.types"

type Props = {
	data: CaseData
}
export function CaseCard({ data }: Props) {
	return (
		<Link href={`/cases/${data.id}`} prefetch={false}>
			<div className="group relative">
				<div className="relative overflow-hidden rounded-xl shadow-lg">
					<Image
						src={data.pictures[0].picture.url || "/placeholder.svg"}
						alt={data.name}
						width={600}
						height={400}
						className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
					<div className="absolute bottom-0 left-0 p-4">
						<span className="bg-primary text-primary-foreground mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider">
							{data.service}
						</span>
						<h3 className="text-primary-foreground mb-2 text-2xl font-bold">
							{data.name}
						</h3>
						<p className="line-clamp-2 text-gray-400">{data.description}</p>
					</div>
				</div>
				<div className="bg-primary text-primary-foreground absolute -top-2 -right-2 rounded-full p-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
					<ExternalLink className="size-5" />
				</div>
			</div>
		</Link>
	)
}
