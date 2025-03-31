"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"

import { Button } from "@/shared/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/shared/ui/dialog"

import { PurposefulBlockData } from "../_types/purposeful-block.types"

type Goal = {
	title: string
	description: string
}

type Props = {
	data: PurposefulBlockData
}

export function PurposefulBlockRenderer({ data }: Props) {
	const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)

	// Генерируем случайные значения один раз при монтировании компонента
	const animationParams = useMemo(() => {
		return data.goals.map((_, i) => ({
			scale: 1 + (0.02 + (i % 3) * 0.01),
			duration: 3 + (i % 5) * 0.7
		}))
	}, [data.goals.length])

	const handleGoalClick = (goal: Goal) => {
		setSelectedGoal(goal)
	}

	return (
		<div className="relative">
			{/* Верхние цели */}
			<div className="my-6 flex flex-wrap items-center justify-center gap-4">
				{data.goals.slice(0, 4).map((goal, i) => (
					<motion.div
						key={i}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						animate={{
							scale: [
								1,
								animationParams[i].scale,
								1,
								1 - (animationParams[i].scale - 1) * 0.5,
								1
							],
							opacity: [1, 0.9, 1, 0.95, 1]
						}}
						transition={{
							repeat: Infinity,
							duration: animationParams[i].duration,
							ease: "easeInOut"
						}}
						className="w-full max-w-xs sm:w-auto"
					>
						<Button
							className="h-auto w-full flex-col p-3 text-left transition-colors sm:w-auto"
							variant="outline"
							title={goal.description}
							onClick={() => handleGoalClick(goal)}
							style={{
								borderColor: "var(--color-border)",
								animation: `pulse-primary ${animationParams[i].duration}s infinite ease-in-out`
							}}
						>
							<div className="font-semibold">{goal.title}</div>
						</Button>
					</motion.div>
				))}
			</div>

			{/* Центральная секция с целями и сервисом */}
			<div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
				{/* Левые цели - на мобильных будут сверху */}
				<div className="flex w-full flex-row justify-center gap-4 sm:w-auto sm:flex-col">
					{data.goals.slice(4, 6).map((goal, i) => {
						const idx = i + 4
						return (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								animate={{
									scale: [
										1,
										animationParams[idx].scale,
										1,
										1 - (animationParams[idx].scale - 1) * 0.5,
										1
									],
									opacity: [1, 0.9, 1, 0.95, 1]
								}}
								transition={{
									repeat: Infinity,
									duration: animationParams[idx].duration,
									ease: "easeInOut"
								}}
								className="w-full max-w-xs sm:w-auto"
							>
								<Button
									className="h-auto w-full flex-col p-3 text-left transition-colors sm:w-auto"
									variant="outline"
									title={goal.description}
									onClick={() => handleGoalClick(goal)}
									style={{
										borderColor: "var(--color-border)",
										animation: `pulse-primary ${animationParams[idx].duration}s infinite ease-in-out`
									}}
								>
									<div className="font-semibold">{goal.title}</div>
								</Button>
							</motion.div>
						)
					})}
				</div>

				{/* Слово в центре */}
				<div className="flex-shrink-0 py-4">
					<h1 className="bg-clip-text px-4 text-4xl font-bold sm:px-12 sm:text-6xl">
						{data.service}
					</h1>
				</div>

				{/* Правые цели - на мобильных будут снизу */}
				<div className="flex w-full flex-row justify-center gap-4 sm:w-auto sm:flex-col">
					{data.goals.slice(6, 8).map((goal, i) => {
						const idx = i + 6
						return (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								animate={{
									scale: [
										1,
										animationParams[idx].scale,
										1,
										1 - (animationParams[idx].scale - 1) * 0.5,
										1
									],
									opacity: [1, 0.9, 1, 0.95, 1]
								}}
								transition={{
									repeat: Infinity,
									duration: animationParams[idx].duration,
									ease: "easeInOut"
								}}
								className="w-full max-w-xs sm:w-auto"
							>
								<Button
									className="h-auto w-full flex-col p-3 text-left transition-colors sm:w-auto"
									variant="outline"
									title={goal.description}
									onClick={() => handleGoalClick(goal)}
									style={{
										borderColor: "var(--color-border)",
										animation: `pulse-primary ${animationParams[idx].duration}s infinite ease-in-out`
									}}
								>
									<div className="font-semibold">{goal.title}</div>
								</Button>
							</motion.div>
						)
					})}
				</div>
			</div>

			{/* Нижние цели */}
			<div className="mt-6 flex flex-wrap items-center justify-center gap-4">
				{data.goals.slice(8).map((goal, i) => {
					const idx = i + 8
					return (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							animate={{
								scale: [
									1,
									animationParams[idx].scale,
									1,
									1 - (animationParams[idx].scale - 1) * 0.5,
									1
								],
								opacity: [1, 0.9, 1, 0.95, 1]
							}}
							transition={{
								repeat: Infinity,
								duration: animationParams[idx].duration,
								ease: "easeInOut"
							}}
							className="w-full max-w-xs sm:w-auto"
						>
							<Button
								className="h-auto w-full flex-col p-3 text-left transition-colors sm:w-auto"
								variant="outline"
								title={goal.description}
								onClick={() => handleGoalClick(goal)}
								style={{
									borderColor: "var(--color-border)",
									animation: `pulse-primary ${animationParams[idx].duration}s infinite ease-in-out`
								}}
							>
								<div className="font-semibold">{goal.title}</div>
							</Button>
						</motion.div>
					)
				})}
			</div>

			{/* Модальное окно */}
			<Dialog
				open={!!selectedGoal}
				onOpenChange={(open) => !open && setSelectedGoal(null)}
			>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle className="text-xl">{selectedGoal?.title}</DialogTitle>
					</DialogHeader>
					<DialogDescription className="text-base">
						{selectedGoal?.description}
					</DialogDescription>
				</DialogContent>
			</Dialog>

			{/* Стили для анимации пульсации цветом primary */}
			<style jsx global>{`
				@keyframes pulse-primary {
					0%,
					100% {
						border-color: var(--color-border);
						color: var(--color-foreground);
					}
					50% {
						border-color: var(--color-primary);
						color: var(--color-primary);
					}
				}
			`}</style>
		</div>
	)
}
