import Link from "next/link"

import { Button } from "@/shared/ui/button"

type Props = {
	data: never
}

export function OfferBlockRenderer({}: Props) {
	return (
		<section className="overflow relative">
			<div className="px-4 sm:px-6 lg:px-8">
				{/* Декоративные блоки на фоне */}
				<div className="absolute inset-0 z-0">
					<div className="bg-primary/30 absolute top-20 -left-10 h-32 w-32 rotate-12 rounded-2xl" />
					<div className="absolute top-10 right-20 h-24 w-24 -rotate-12 rounded-2xl bg-purple-500/20" />
					<div className="bg-primary/20 absolute bottom-20 left-1/4 h-28 w-28 rotate-45 rounded-2xl" />
					<div className="absolute right-1/3 bottom-10 h-20 w-20 -rotate-6 rounded-2xl bg-purple-500/30" />
				</div>

				<div className="relative mx-auto max-w-7xl py-16 sm:py-24">
					<div className="flex flex-col gap-6 sm:flex-row">
						{/* Левый блок */}
						<div className="group bg-primary/60 hover:bg-primary/70 relative flex flex-col rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 sm:-mt-12 sm:w-[60%]">
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent" />
							{/* Декоративные элементы вокруг левого блока */}
							<div className="bg-primary/40 absolute -top-8 -left-8 hidden h-16 w-16 rotate-12 rounded-xl sm:block" />
							<div className="absolute -right-4 -bottom-4 hidden h-20 w-20 -rotate-12 rounded-xl bg-purple-500/30 sm:block" />

							<div className="relative flex h-full flex-col justify-between">
								<div>
									<h3 className="mb-3 text-base font-medium tracking-wider text-white/80 uppercase">
										Стоимость проекта
									</h3>
									<div className="mb-6 flex items-baseline gap-2 transition-transform duration-300 group-hover:translate-x-2">
										<span className="text-4xl font-bold text-white/70 sm:text-5xl">
											от
										</span>
										<span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-6xl font-black text-white sm:text-7xl">
											20 000
										</span>
										<span className="text-4xl font-bold text-white/70 sm:text-5xl">
											₽
										</span>
									</div>
									<p className="mb-8 text-base leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:max-w-[90%]">
										Стоимость зависит от объема контента, необходимых
										интеграций, таких как{" "}
										<span className="text-white/90">калькулятор стоимости</span>{" "}
										или <span className="text-white/90">подключения CRM</span>.
									</p>
								</div>
								<Button
									asChild
									className="w-fit p-7 text-lg"
									variant="secondary"
								>
									<Link href="#offer">Рассчитать стоимость</Link>
								</Button>
							</div>
						</div>

						{/* Правый блок */}
						<div className="group bg-primary/60 hover:bg-primary/70 relative mt-8 flex flex-col rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 sm:mt-12 sm:w-[40%]">
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-purple-500/10 to-transparent" />
							{/* Декоративные элементы вокруг правого блока */}
							<div className="bg-primary/40 absolute -top-6 -right-6 hidden h-16 w-16 -rotate-12 rounded-xl sm:block" />
							<div className="absolute -bottom-4 -left-4 hidden h-20 w-20 rotate-12 rounded-xl bg-purple-500/30 sm:block" />

							<div className="absolute top-0 -right-12 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl transition-colors duration-300 group-hover:bg-purple-500/10" />
							<div className="relative">
								<h3 className="mb-3 text-base font-medium tracking-wider text-white/80 uppercase">
									Срок разработки
								</h3>
								<div className="mb-6 flex items-baseline gap-2 transition-transform duration-300 group-hover:translate-x-2">
									<span className="text-4xl font-bold text-white/70 sm:text-5xl">
										от
									</span>
									<span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-6xl font-black text-white sm:text-7xl">
										3
									</span>
									<span className="text-4xl font-bold text-white/70 sm:text-5xl">
										дней
									</span>
								</div>
								<p className="text-base leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90">
									Сроки реализации проекта зависят от сложности и объёма работ.
									Мы гарантируем{" "}
									<span className="text-white/90">качественный результат</span>{" "}
									в установленное время.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
