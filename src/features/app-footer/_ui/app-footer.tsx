import { TelegramLink } from "@/features/contact-link"

import { AppLogo } from "@/shared/ui/app-logo"

import { AboutSection } from "./about-section"
import { AppFooterLayout } from "./app-footer-layout"
import { NavigationMenu } from "./navigation-menu"

export function AppFooter() {
	const APP_LOGO = <AppLogo />
	const CONTACT = <TelegramLink />
	const NAVIGATION = <NavigationMenu />

	return (
		<AppFooterLayout
			about={<AboutSection logo={APP_LOGO} />}
			contact={CONTACT}
			navigation={NAVIGATION}
		/>
	)
}
