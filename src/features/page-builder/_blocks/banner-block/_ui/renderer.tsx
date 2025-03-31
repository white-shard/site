import { BannerBlockData } from "../_types/banner-block.types"

type Props = {
	data: BannerBlockData
}

export function BannerBlockRenderer({ data }: Props) {
	return (
		<div className="flex flex-col items-center justify-between rounded-lg bg-gradient-to-r from-blue-500 to-green-500 p-8 text-white md:flex-row">
			<div>
				<h1 className="text-4xl font-bold uppercase">Акция</h1>
				<p className="mt-2">{data.description}</p>
			</div>
			<div className="w-full text-right">
				<span className="text-5xl font-bold">{data.discount}</span>
			</div>
		</div>
	)
}
