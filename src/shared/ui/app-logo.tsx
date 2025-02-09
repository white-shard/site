import Link from "next/link"

import { AppLogoIcon } from "@/shared/icons/logo.icon"

export function AppLogo() {
	return (
		<Link className="flex items-center space-x-2" href="/">
			<AppLogoIcon className="size-8" />

			<h1 className="inline-block text-lg font-black">WhiteShard.</h1>
		</Link>
	)
}
