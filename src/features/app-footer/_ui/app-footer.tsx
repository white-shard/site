import { TelegramLink } from "@/features/contact-link"

import { AppLogo } from "@/shared/ui/app-logo"

import { AboutSection } from "./about-section"
import { AppFooterLayout } from "./app-footer-layout"
import { ContactsSection } from "./contacts-section"
import { CopyrightSection } from "./copyright-section"
import { NavigationMenu } from "./navigation-menu"

export function AppFooter() {
	const APP_LOGO = <AppLogo />
	const CONTACT = <TelegramLink />
	const NAVIGATION = <NavigationMenu />
	const COPYRIGHT = <CopyrightSection />

	return (
		<AppFooterLayout
			about={<AboutSection logo={APP_LOGO} />}
			contact={<ContactsSection contact={CONTACT} />}
			navigation={NAVIGATION}
			copyright={COPYRIGHT}
		/>
	)
}
