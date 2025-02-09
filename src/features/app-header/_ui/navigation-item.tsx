import Link from "next/link"

import { cn } from "@/shared/lib/utils"

import { NavigationLink } from "../_types/navigation.type"

type Props = {
	simple?: boolean
	data: NavigationLink
}
export function NavigationItem({ data, simple = false }: Props) {
	return (
		<Link
			className={cn({
				"hover:text-foreground/80 text-foreground/60 transition-all duration-200 hover:scale-105":
					!simple
			})}
			href={data.href || "#"}
		>
			{data.label}
		</Link>
	)
}
