import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/shared/lib/utils"

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
				{children}
			</body>
		</html>
	)
}
