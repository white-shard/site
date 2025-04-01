import { useEffect, useState } from "react"

type ServiceTitleProps = {
	service: string
}

export function ServiceTitle({ service }: ServiceTitleProps) {
	// Используем состояние для управления видимостью курсора
	const [cursorVisible, setCursorVisible] = useState(true)

	useEffect(() => {
		// Создаем интервал для мигания курсора
		const interval = setInterval(() => {
			setCursorVisible((prev) => !prev)
		}, 500) // Переключаем каждые 500 мс

		// Очищаем интервал при размонтировании
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="flex-shrink-0 py-2 sm:py-4">
			<h1 className="bg-clip-text px-2 text-center text-3xl font-bold break-words sm:px-4 sm:text-4xl md:text-6xl">
				{service}
				<span
					style={{
						color: "var(--color-primary)",
						fontWeight: "bold",
						opacity: cursorVisible ? 1 : 0,
						marginLeft: "2px"
					}}
				>
					_
				</span>
			</h1>
		</div>
	)
}
