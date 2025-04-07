import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

import { Button } from "@/shared/ui/button"

import { AnimationParam, Goal } from "../_types/purposeful-block.types"

type GoalButtonProps = {
	goal: Goal
	animationParams: AnimationParam
	onClick: (goal: Goal) => void
	className?: string
}

export function GoalButton({
	goal,
	animationParams,
	onClick,
	className
}: GoalButtonProps) {
	const buttonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		// Принудительно запускаем анимацию при монтировании компонента
		if (buttonRef.current) {
			const button = buttonRef.current
			button.style.animation = "none"
			// Форсируем перерисовку
			void button.offsetWidth
			button.style.animation = `pulse-primary ${animationParams.duration}s infinite ease-in-out`
		}
	}, [animationParams.duration])

	// Создаем варианты анимации для framer-motion
	const pulseVariants = {
		pulse: {
			scale: [
				1,
				animationParams.scale,
				1,
				1 - (animationParams.scale - 1) * 0.5,
				1
			],
			opacity: [1, 0.9, 1, 0.95, 1],
			borderColor: [
				"var(--color-border)",
				"var(--color-primary)",
				"var(--color-border)",
				"var(--color-primary)",
				"var(--color-border)"
			],
			color: [
				"var(--color-foreground)",
				"var(--color-primary)",
				"var(--color-foreground)",
				"var(--color-primary)",
				"var(--color-foreground)"
			]
		}
	}

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			variants={pulseVariants}
			animate="pulse"
			transition={{
				repeat: Infinity,
				duration: animationParams.duration,
				ease: "easeInOut"
			}}
			className={className}
		>
			<Button
				ref={buttonRef}
				className="h-auto w-full min-w-[120px] flex-col p-2 text-left text-sm transition-colors sm:min-w-[160px] sm:p-3 sm:text-base"
				variant="outline"
				title={goal.title}
				onClick={() => onClick(goal)}
				style={{
					borderColor: "inherit",
					color: "inherit"
				}}
			>
				<div className="max-w-full truncate font-semibold">{goal.title}</div>
			</Button>
		</motion.div>
	)
}
