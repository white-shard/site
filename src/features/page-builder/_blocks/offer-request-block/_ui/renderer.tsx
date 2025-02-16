"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { BlockHeader } from "@/shared/ui/block-header"

import { OfferRequestBlock } from "../_types/offer-request-block.type"

import { OfferRequestForm } from "./offer-request-form"

type Props = {
	data: OfferRequestBlock
}

export function OfferRequestBlockRenderer({ data }: Props) {
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<motion.div
				className="flex flex-1 flex-col gap-4"
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<BlockHeader title={data.title} description={data.description} />
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Image
						src={data.picture.url || ""}
						alt={data.picture.alt || data.title}
						width={640}
						height={480}
						className="rounded-lg"
					/>
				</motion.div>
			</motion.div>
			<motion.div
				className="flex-1"
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<OfferRequestForm formMeta={data.formMeta} />
			</motion.div>
		</div>
	)
}
