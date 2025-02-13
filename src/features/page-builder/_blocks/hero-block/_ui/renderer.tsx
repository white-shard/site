import { Button } from "@/shared/ui/button"

import { HeroBlockData } from "../_types/hero-block.type"

import { Slider } from "./slider"

type Props = {
	data: HeroBlockData
}
export function HeroBlockRenderer({ data }: Props) {
	return (
		<div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
			<div className="order-2 flex w-full flex-col gap-4 md:w-1/2">
				<h1 className="text-4xl font-bold">{data.title}</h1>
				<p className="text-secondary text-lg">{data.description}</p>
				<Button className="w-fit px-12 py-5">{data.button}</Button>
			</div>
			<div className="order-1 my-4 flex w-full items-center justify-center md:order-2 md:flex-1">
				<Slider
					desktopImages={data.slider.map((it) => it.desktopImage)}
					mobileImages={data.slider.map((it) => it.mobileImage)}
				/>
			</div>
		</div>
	)
}
