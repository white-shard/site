"use client"

import { useMemo, useState } from "react"

import { PurposefulBlockData } from "../_types/purposeful-block.types"
import { Goal } from "../_types/purposeful-block.types"

import { GoalButton } from "./goal-button"
import { GoalDialog } from "./goal-dialog"
import { ServiceTitle } from "./service-title"

type Props = {
	data: PurposefulBlockData
}

export function PurposefulBlockRenderer({ data }: Props) {
	const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)

	// Генерируем параметры анимации один раз при монтировании компонента
	const animationParams = useMemo(() => {
		return data.goals.map((_, i) => ({
			scale: 1 + (0.02 + (i % 3) * 0.01),
			duration: 3 + (i % 5) * 1.4
		}))
	}, [data.goals])

	const handleGoalClick = (goal: Goal) => {
		setSelectedGoal(goal)
	}

	return (
		<div className="relative my-8 px-2 md:px-4">
			{/* Верхние цели */}
			<div className="my-4 flex flex-wrap items-center justify-center gap-3 lg:my-6 lg:gap-4">
				{data.goals.slice(0, 4).map((goal, i) => (
					<GoalButton
						key={i}
						goal={goal}
						animationParams={animationParams[i]}
						onClick={handleGoalClick}
						className="w-[calc(50%-0.5rem)] lg:w-auto"
					/>
				))}
			</div>

			{/* Центральная секция с целями и сервисом */}
			<div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6">
				{/* Левые цели - на мобильных будут сверху */}
				<div className="flex w-full flex-row justify-center gap-3 lg:w-auto lg:flex-col lg:gap-4">
					{data.goals.slice(4, 6).map((goal, i) => {
						const idx = i + 4
						return (
							<GoalButton
								key={idx}
								goal={goal}
								animationParams={animationParams[idx]}
								onClick={handleGoalClick}
								className="w-[calc(50%-0.5rem)] lg:w-auto"
							/>
						)
					})}
				</div>

				{/* Слово в центре */}
				<ServiceTitle service={data.service} />

				{/* Правые цели - на мобильных будут снизу */}
				<div className="flex w-full flex-row justify-center gap-3 lg:w-auto lg:flex-col lg:gap-4">
					{data.goals.slice(6, 8).map((goal, i) => {
						const idx = i + 6
						return (
							<GoalButton
								key={idx}
								goal={goal}
								animationParams={animationParams[idx]}
								onClick={handleGoalClick}
								className="w-[calc(50%-0.5rem)] lg:w-auto"
							/>
						)
					})}
				</div>
			</div>

			{/* Нижние цели */}
			<div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:mt-6 lg:gap-4">
				{data.goals.slice(8).map((goal, i) => {
					const idx = i + 8
					return (
						<GoalButton
							key={idx}
							goal={goal}
							animationParams={animationParams[idx]}
							onClick={handleGoalClick}
							className="w-[calc(50%-0.5rem)] lg:w-auto"
						/>
					)
				})}
			</div>

			{/* Модальное окно */}
			<GoalDialog
				selectedGoal={selectedGoal}
				onOpenChange={(open) => !open && setSelectedGoal(null)}
			/>
		</div>
	)
}
