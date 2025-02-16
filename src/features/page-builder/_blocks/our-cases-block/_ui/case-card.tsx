"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { CaseData } from "../_types/our-cases-block.types"

type Props = {
	data: CaseData
}
export function CaseCard({ data }: Props) {
	return (
		<Link href={`/cases/${data.id}`}>
			<motion.div
				className="group relative"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<div className="relative overflow-hidden rounded-xl shadow-lg">
					<Image
						src={data.pictures[0].picture.url || "/placeholder.svg"}
						alt={data.name}
						width={600}
						height={400}
						className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
					<motion.div
						className="absolute bottom-0 left-0 p-4"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.2 }}
					>
						<motion.span
							className="bg-primary text-primary-foreground mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider"
							whileHover={{ scale: 1.05 }}
						>
							{data.service}
						</motion.span>
						<h3 className="text-primary-foreground mb-2 text-2xl font-bold">
							{data.name}
						</h3>
						<p className="line-clamp-2 text-gray-400">{data.description}</p>
					</motion.div>
				</div>
				<motion.div
					className="bg-primary text-primary-foreground absolute -top-2 -right-2 rounded-full p-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<ExternalLink className="size-5" />
				</motion.div>
			</motion.div>
		</Link>
	)
}
