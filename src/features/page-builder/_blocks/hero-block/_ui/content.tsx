"use client"

import { memo } from "react"

import { Button } from "@/shared/ui/button"

import { HeroBlockData } from "../_types/hero-block.type"

import { Features } from "./features"

type ContentProps = {
	title: string
	description: string
	features: HeroBlockData["features"]
	buttonText: string
}

export const Content = memo(
	({ title, description, features, buttonText }: ContentProps) => (
		<div className="order-2 flex w-full flex-1 flex-col gap-4 md:w-1/2">
			<div className="flex h-full flex-col gap-4">
				<h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
				<p className="text-secondary md:text-lg">{description}</p>
				<Features features={features} />
			</div>
			<Button className="w-full px-12 py-5 md:w-fit">{buttonText}</Button>
		</div>
	)
)

Content.displayName = "Content"
