"use client"

import { memo, useMemo } from "react"

import { HeroBlockData } from "../_types/hero-block.type"

import { Content } from "./content"
import { Slider } from "./slider"

type Props = {
	data: HeroBlockData
}

export const HeroBlockRenderer = memo(({ data }: Props) => {
	const { desktopImages, mobileImages } = useMemo(
		() => ({
			desktopImages: data.slider.map((item) => item.desktopImage),
			mobileImages: data.slider.map((item) => item.mobileImage)
		}),
		[data.slider]
	)

	return (
		<section className="flex min-h-[calc(100vh-88px)] w-full flex-col items-center justify-between gap-4 md:h-auto md:min-h-auto md:flex-row">
			<Content
				title={data.title}
				description={data.description}
				features={data.features}
				buttonText={data.button}
			/>
			<div className="order-1 my-4 flex w-full items-center justify-center md:order-2 md:flex-1">
				<Slider desktopImages={desktopImages} mobileImages={mobileImages} />
			</div>
		</section>
	)
})

HeroBlockRenderer.displayName = "HeroBlockRenderer"
