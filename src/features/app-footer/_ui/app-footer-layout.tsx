"use client"

import { motion } from "framer-motion"

type Props = {
	about: React.ReactNode
	contact: React.ReactNode
	navigation: React.ReactNode
	copyright: React.ReactNode
}

export function AppFooterLayout({
	about,
	contact,
	navigation,
	copyright
}: Props) {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="mx-auto max-w-7xl border-t px-4 pt-16 pb-8"
		>
			<motion.div
				className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8"
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							staggerChildren: 0.2
						}
					}
				}}
				initial="hidden"
				animate="show"
			>
				{about}

				{navigation}

				{contact}
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				{copyright}
			</motion.div>
		</motion.footer>
	)
}
