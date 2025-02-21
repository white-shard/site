"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { BlockHeader } from "@/shared/ui/block-header"

import { ServicesBlockData } from "../_types/services-block.type"

import { ServiceCard } from "./service-card"

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
}

type Props = {
	data: ServicesBlockData
}
export function ServicesBlockRenderer({ data }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<BlockHeader title={data.title} description={data.description} />
			<motion.div
				className="grid grid-cols-1 gap-4 md:grid-cols-2"
				variants={container}
				initial="hidden"
				animate="show"
			>
				{data.services.map((service) => (
					<motion.div key={service.id} variants={item} className="h-full">
						<Link href={`/${service.link.slug}`} className="block h-full">
							<ServiceCard data={service} />
						</Link>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
