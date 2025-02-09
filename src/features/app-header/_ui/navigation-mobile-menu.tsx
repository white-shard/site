"use client"

import { Menu } from "lucide-react"
import React, { Suspense } from "react"

import { Button } from "@/shared/ui/button"
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from "@/shared/ui/sheet"
import { Skeleton } from "@/shared/ui/skeleton"

type Props = {
	logo: React.ReactElement
	navigation: React.ReactElement
	contact?: React.ReactElement
	actions?: React.ReactElement
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function NavigationMobileMenu({
	logo,
	navigation,
	contact,
	actions,
	open,
	onOpenChange
}: Props) {
	return (
		<div className="mr-2 lg:hidden">
			<Sheet open={open} onOpenChange={onOpenChange}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon">
						<Menu className="h-5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetTitle className="mb-5 border-b pb-5">{logo}</SheetTitle>
					<div
						className="flex h-full flex-col justify-between pb-12"
						onClick={() => onOpenChange(false)}
					>
						<Suspense fallback={<NavigationMenuSkeleton />}>
							{navigation}
						</Suspense>
						<div className="flex flex-col gap-4 py-8">
							{contact}
							{actions}
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}

function NavigationMenuSkeleton() {
	return (
		<div className="flex flex-col gap-6">
			<Skeleton className="h-6 w-1/2" />
			<Skeleton className="h-6 w-1/3" />
			<Skeleton className="h-6 w-2/5" />
			<Skeleton className="h-6 w-1/4" />
		</div>
	)
}
