"use client"

import { motion } from "framer-motion"
import { useState } from "react"

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

	const handleGoalClick = (goal: Goal) => {
		setSelectedGoal(goal)
	}

	return (
		<div className="relative">
			<div className="my-6 flex flex-wrap items-center justify-center gap-4">
				{data.goals.slice(0, 4).map((goal, i) => (
					<motion.div
						key={i}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className="max-w-xs"
					>
						<Button
							className="h-auto flex-col p-3 text-left"
							variant="outline"
							title={goal.description}
							onClick={() => handleGoalClick(goal)}
						>
							<div className="font-semibold">{goal.title}</div>
						</Button>
					</motion.div>
				))}
			</div>

			<div className="flex items-center justify-center gap-6">
				{/* Левые цели */}
				<div className="flex flex-col gap-4">
					{data.goals.slice(4, 6).map((goal, i) => (
						<motion.div
							key={i + 4}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
							className="max-w-xs"
						>
							<Button
								className="h-auto flex-col p-3 text-left"
								variant="outline"
								title={goal.description}
								onClick={() => handleGoalClick(goal)}
							>
								<div className="font-semibold">{goal.title}</div>
							</Button>
						</motion.div>
					))}
				</div>

				{/* Слово в центре */}
				<div className="flex-shrink-0">
					<h1 className="bg-clip-text px-12 py-4 text-6xl font-bold">
						{data.service}
					</h1>
				</div>

				{/* Правые цели */}
				<div className="flex flex-col gap-4">
					{data.goals.slice(6, 8).map((goal, i) => (
						<motion.div
							key={i + 6}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
							className="max-w-xs"
						>
							<Button
								className="h-auto flex-col p-3 text-left"
								variant="outline"
								title={goal.description}
								onClick={() => handleGoalClick(goal)}
							>
								<div className="font-semibold">{goal.title}</div>
							</Button>
						</motion.div>
					))}
				</div>
			</div>

			{/* Нижние цели */}
			<div className="mt-6 flex flex-wrap items-center justify-center gap-4">
				{data.goals.slice(8).map((goal, i) => (
					<motion.div
						key={i + 8}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className="max-w-xs"
					>
						<Button
							className="h-auto flex-col p-3 text-left"
							variant="outline"
							title={goal.description}
							onClick={() => handleGoalClick(goal)}
						>
							<div className="font-semibold">{goal.title}</div>
						</Button>
					</motion.div>
				))}
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
		</div>
	)
}
