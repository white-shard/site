import { Skeleton } from "@/shared/ui/skeleton"

type Props = {
	count: number
}
export function CasesSkeleton({ count }: Props) {
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: count }).map((_, i) => (
				<CaseSkeletonItem key={i} />
			))}
		</div>
	)
}

function CaseSkeletonItem() {
	return <Skeleton className="h-64 w-full rounded-xl" />
}
