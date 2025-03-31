"use client"

import Link from "next/link"
import { memo } from "react"

import { Button } from "@/shared/ui/button"

import { HeroBlockData } from "../_types/hero-block.type"

import { Features } from "./features"

type ContentProps = {
	title: string
	description: string
	features: HeroBlockData["features"]
	buttonText: string
	cost: string
}

export const Content = memo(
	({ title, description, features, buttonText, cost }: ContentProps) => (
		<div className="order-[2] flex w-full flex-1 flex-col gap-4 md:w-1/2">
			<div className="flex h-full flex-col gap-4">
				<h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
				<p className="text-secondary md:text-lg">{description}</p>
				<Features features={features} />
			</div>
			<div className="order-[2] flex flex-col items-center gap-4 md:flex-row">
				<Button asChild className="w-full px-12 py-5 md:w-fit">
					<Link href="#offer">{buttonText}</Link>
				</Button>
				{cost && (
					<p className="text-primary order-[-1] text-lg md:order-[2]">{cost}</p>
				)}
			</div>
		</div>
	)
)

Content.displayName = "Content"
