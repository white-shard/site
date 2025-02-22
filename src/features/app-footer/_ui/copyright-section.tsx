import { getFooterData } from "@/shared/api/settings.api"

export async function CopyrightSection() {
	const data = await getFooterData()

	return (
		<div className="mt-12 border-t pt-8">
			<p className="text-center text-base text-gray-500">{data.copyright}</p>
		</div>
	)
}
