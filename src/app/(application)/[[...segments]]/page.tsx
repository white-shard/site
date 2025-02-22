import { BlockRenderer } from "@/features/page-builder/_ui/block-renderer"

type PageProps = {
	params: Promise<{ segments?: string[] }>
}

export default async function Page({ params }: PageProps) {
	const { segments } = await params
	const slug = !segments || !segments.length ? ["home"] : segments

	return (
		<div className="container mx-auto max-w-screen-xl p-4">
			<BlockRenderer segments={slug} />
		</div>
	)
}
