import { TelegramLink } from "@/features/contact-link"

import { AppLogo } from "@/shared/ui/app-logo"
import { Button } from "@/shared/ui/button"

import { AppHeaderLayout } from "./app-header-layout"
import { ApplicationButton } from "./application-button"
import { NavigationMenu } from "./navigation-menu"

export async function AppHeader() {
	const APP_LOGO = <AppLogo />
	const CONTACT = <TelegramLink />
	const ACTIONS = <ApplicationButton />

	return (
		<AppHeaderLayout
			navigationMobile={<NavigationMenu useDropdown={false} />}
			navigationDesktop={<NavigationMenu />}
			logo={APP_LOGO}
			contact={CONTACT}
			actions={ACTIONS}
			actionsSidebar={<Button>Оставить заявку</Button>}
		/>
	)
}
