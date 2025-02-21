import Link from "next/link"

import { Button } from "@/shared/ui/button"

import { AddDiamondIcon } from "@/shared/icons/add-diamond.icon"

export function ApplicationButton() {
	return (
		<>
			<Button asChild className="hidden md:block">
				<Link href="#offer">Оставить заявку</Link>
			</Button>
			<Link href="#offer" className="md:hidden">
				<AddDiamondIcon className="text-primary size-8 animate-spin duration-5000" />
			</Link>
		</>
	)
}
