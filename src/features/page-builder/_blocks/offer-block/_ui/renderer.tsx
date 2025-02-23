type Props = {
	data: never
}

export function OfferBlockRenderer({}: Props) {
	return (
		<section>
			<div className="from-primary via-primary-600 to-secondary bg-gradient-to-br px-4 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-7xl flex-col gap-3 py-16 sm:flex-row sm:py-24">
					<div className="relative flex flex-col sm:w-[60%]">
						<div className="absolute top-0 -left-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
						<div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

						<h3 className="mb-3 text-base font-medium text-white/80">
							Стоимость проекта
						</h3>
						<div className="mb-4 flex items-baseline gap-2">
							<span className="text-4xl font-bold text-white sm:text-5xl">
								от
							</span>
							<span className="text-5xl font-bold text-white sm:text-6xl">
								20 000
							</span>
							<span className="text-4xl font-bold text-white sm:text-5xl">
								₽
							</span>
						</div>
						<p className="text-base leading-relaxed text-white/70 sm:max-w-[90%]">
							Стоимость зависит от объема контента, необходимых интеграций,
							таких как калькулятор стоимости или подключения CRM.
						</p>
					</div>

					<div className="relative mt-8 flex flex-col sm:mt-0 sm:w-[40%]">
						<div className="absolute top-0 -right-12 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />
						<h3 className="mb-3 text-base font-medium text-white/80">
							Срок разработки
						</h3>
						<div className="mb-4 flex items-baseline gap-2">
							<span className="text-4xl font-bold text-white sm:text-5xl">
								от
							</span>
							<span className="text-5xl font-bold text-white sm:text-6xl">
								3
							</span>
							<span className="text-4xl font-bold text-white sm:text-5xl">
								дней
							</span>
						</div>
						<p className="text-base leading-relaxed text-white/70">
							Сроки реализации проекта зависят от сложности и объёма работ. Мы
							гарантируем качественный результат в установленное время.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
