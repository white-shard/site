import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import { AppHeader } from "@/features/app-header"

import { cn } from "@/shared/lib/utils"

import "./custom.css"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "White Shard / Студия Веб Разработки"
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
			</body>
		</html>
	)
}
