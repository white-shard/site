import Card3DSlider from "@/shared/ui/card3d-slider"

export function Slider() {
	return (
		<div className="relative block aspect-5/3 max-h-full w-full self-center md:self-end">
			<Card3DSlider width="90%" aspectRatio={5 / 3} />
			<Card3DSlider width="25%" left="75%" top="20%" aspectRatio={3 / 6} />
		</div>
	)
}
