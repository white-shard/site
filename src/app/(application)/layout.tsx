import { JetBrains_Mono } from "next/font/google"

import { AppFooter } from "@/features/app-footer"
import { AppHeader } from "@/features/app-header"

import { Toaster } from "@/shared/ui/sonner"

import { cn } from "@/shared/lib/utils"

import { getAppMetaData } from "@/shared/api/settings.api"

import "./custom.css"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"]
})

export async function generateMetadata() {
	const metaData = await getAppMetaData()

	return {
		title: {
			default: metaData?.title,
			template: metaData?.template
		},
		description: metaData?.description,
		keywords: metaData?.keywords?.split(",").map((keyword) => keyword.trim()),
		icons: {
			icon: [
				{
					type: "image/svg+xml",
					url: "/favicon.svg"
				},
				{
					type: "image/x-icon",
					rel: "shortcut icon",
					url: "/favicon.ico"
				},
				{
					type: "image/png",
					sizes: "128x128",
					url: "/favicon.png"
				}
			]
		}
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html suppressHydrationWarning lang="ru">
			<body
				className={cn(
					"bg-background min-h-screen antialiased",
					jetbrainsMono.variable
				)}
			>
				<AppHeader />
				{children}
				<AppFooter />
				<Toaster />
			</body>
		</html>
	)
}
