import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"

import { DropDownArrowIcon } from "@/shared/icons/dd-arrow.icon"

import { NavigationLink } from "../_types/navigation.type"

import { NavigationItem } from "./navigation-item"

type Props = {
	data: NavigationLink
}
export function NavigationDropdownItem({ data }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="hover:text-foreground/80 text-foreground/60 flex cursor-pointer items-center transition-all duration-200 hover:scale-105">
					{data.label}
					<DropDownArrowIcon className="size-6" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{data.children?.map((child) => (
					<DropdownMenuItem
						className="cursor-pointer"
						asChild
						key={child.id || child.href}
					>
						<NavigationItem simple data={child} />
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
