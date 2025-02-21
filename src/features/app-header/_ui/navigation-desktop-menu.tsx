import { Suspense } from "react"

import { Skeleton } from "@/shared/ui/skeleton"

type Props = {
	logo: React.ReactElement
	navigation: React.ReactElement
	contact?: React.ReactElement
	actions?: React.ReactElement
}
export function NavigationDesktopMenu({
	logo,
	navigation,
	contact,
	actions
}: Props) {
	return (
		<>
			<div className="mr-8 ml-4 lg:ml-0">{logo}</div>
			<div className="flex flex-1 items-center">
				<div className="hidden lg:flex">
					<Suspense fallback={<NavigationMenuSkeleton />}>
						{navigation}
					</Suspense>
				</div>
				<div className="flex flex-1 items-center justify-end space-x-3">
					<div className="mr-8 hidden lg:flex">{contact}</div>
					{actions}
				</div>
			</div>
		</>
	)
}

function NavigationMenuSkeleton() {
	return (
		<div className="flex gap-6">
			<Skeleton className="h-6 w-18" />
			<Skeleton className="h-6 w-14" />
			<Skeleton className="h-6 w-22" />
			<Skeleton className="h-6 w-12" />
		</div>
	)
}
