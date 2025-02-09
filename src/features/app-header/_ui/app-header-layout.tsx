"use client"

import { useState } from "react"

import { NavigationDesktopMenu } from "./navigation-desktop-menu"
import { NavigationMobileMenu } from "./navigation-mobile-menu"

type Props = {
	logo: React.ReactElement
	navigationDesktop: React.ReactElement
	navigationMobile: React.ReactElement
	contact: React.ReactElement
	actions: React.ReactElement
}

export function AppHeaderLayout(props: Props) {
	const [open, setOpen] = useState(false)
	const data = {
		logo: props.logo,
		contact: props.contact,
		actions: props.actions
	}

	return (
		<header className="supports-backdrop-filter:bg-background/60 sticky top-0 z-50 mx-auto w-full backdrop-blur-sm">
			<div className="container flex h-14 max-w-screen-xl items-center justify-self-center px-4">
				<NavigationMobileMenu
					navigation={props.navigationMobile}
					{...data}
					open={open}
					onOpenChange={setOpen}
				/>
				<NavigationDesktopMenu navigation={props.navigationDesktop} {...data} />
			</div>
		</header>
	)
}
