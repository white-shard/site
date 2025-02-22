"use client"

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
		<footer className="mx-auto max-w-7xl border-t px-4 pt-16 pb-8">
			<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8">
				{/* О компании */}
				{about}

				{/* Навигация */}
				{navigation}

				{/* Контакты */}
				{contact}
			</div>

			{/* Копирайт */}
			{copyright}
		</footer>
	)
}
