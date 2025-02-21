import { Media } from "@/dashboard/payload-types"

import Card3DSlider from "@/shared/ui/card3d-slider"

type Props = {
	desktopImages: Media[]
	mobileImages: Media[]
}
export function Slider({ desktopImages, mobileImages }: Props) {
	return (
		<div className="relative flex aspect-5/3 max-h-full w-full self-center md:self-end">
			<Card3DSlider images={desktopImages} width="90%" aspectRatio={5 / 3} />
			<Card3DSlider
				images={mobileImages}
				width="25%"
				left="75%"
				top="20%"
				aspectRatio={3 / 6}
			/>
		</div>
	)
}
