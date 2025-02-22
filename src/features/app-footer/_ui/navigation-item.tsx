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
				"hover:text-foreground/80 text-secondary transition-all duration-200":
					!simple
			})}
			href={data.href || "#"}
		>
			{data.label}
		</Link>
	)
}
