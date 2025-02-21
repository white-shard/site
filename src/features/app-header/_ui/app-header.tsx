"use cache"

import { cacheLife } from "next/dist/server/use-cache/cache-life"
import Link from "next/link"

import { TelegramLink } from "@/features/contact-link"

import { AppLogo } from "@/shared/ui/app-logo"
import { Button } from "@/shared/ui/button"

import { AppHeaderLayout } from "./app-header-layout"
import { NavigationMenu } from "./navigation-menu"

export async function AppHeader() {
	const APP_LOGO = <AppLogo />
	const CONTACT = <TelegramLink />
	const ACTIONS = (
		<Button asChild>
			<Link href="#offer">Оставить заявку</Link>
		</Button>
	)
	cacheLife("minutes")

	return (
		<AppHeaderLayout
			navigationMobile={<NavigationMenu useDropdown={false} />}
			navigationDesktop={<NavigationMenu />}
			logo={APP_LOGO}
			contact={CONTACT}
			actions={ACTIONS}
		/>
	)
}
