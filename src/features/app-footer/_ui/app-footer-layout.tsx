"use client"

import Link from "next/link"

import { Button } from "@/shared/ui/button"

type Props = {
	logo: React.ReactNode
	contact: React.ReactNode
	navigation: React.ReactNode
}

export function AppFooterLayout({ logo, contact, navigation }: Props) {
	return (
		<footer className="mx-auto max-w-7xl border-t px-4 pt-16 pb-8">
			<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8">
				{/* О компании */}
				<div className="flex flex-col gap-4 md:col-span-1 lg:col-span-3">
					<div className="text-2xl font-bold">{logo}</div>
					<p className="text-secondary max-w-screen-sm leading-relaxed">
						Мы создаем инновационные решения для вашего бизнеса, помогая
						компаниям развиваться в цифровую эпоху
					</p>
					<Button className="w-fit" asChild>
						<Link href="#offer">Бесплатная консультация</Link>
					</Button>
				</div>

				{/* Навигация */}
				{navigation}

				{/* Контакты */}
				<div>
					<h3 className="mb-6 font-semibold tracking-wider uppercase md:text-lg">
						Контакты
					</h3>
					<p className="text-secondary mb-2 leading-relaxed">
						Возникли вопросы? Мы всегда готовы помочь.
					</p>
					{contact}
				</div>
			</div>

			{/* Копирайт */}
			<div className="mt-12 border-t pt-8">
				<p className="text-center text-base text-gray-500">
					© {new Date().getFullYear()} Ваша компания. Все права защищены.
				</p>
			</div>
		</footer>
	)
}
