"use client"

import { motion } from "framer-motion"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/shared/ui/accordion"

import { AnswersToQuestionsBlockData } from "../_types/answers-to-questions-block.type"

type Props = {
	data: AnswersToQuestionsBlockData
}

export function AnswersToQuestionsBlockRenderer({ data }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="flex flex-col gap-4"
		>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4 }}
				className="text-3xl font-bold"
			>
				{data.title}
			</motion.h2>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4 }}
				className="text-secondary max-w-xl"
			>
				{data.description}
			</motion.p>
			<Accordion type="single" collapsible>
				{data.questions.map((question, index) => (
					<motion.div
						key={question.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.4,
							delay: index * 0.1
						}}
						whileHover={{
							backgroundColor: "rgba(var(--primary-rgb), 0.1)",
							transition: { duration: 0.2 }
						}}
						className="transition-colors"
					>
						<AccordionItem className="border-none" value={question.id}>
							<AccordionTrigger className="cursor-pointer px-0 py-4 text-lg hover:no-underline md:text-xl">
								<motion.div
									className="w-full"
									whileHover={{
										x: 8,
										transition: {
											type: "spring",
											stiffness: 400,
											damping: 30
										}
									}}
								>
									{question.name}
								</motion.div>
							</AccordionTrigger>
							<AccordionContent className="text-secondary text-lg md:px-4">
								{question.answer}
							</AccordionContent>
						</AccordionItem>
					</motion.div>
				))}
			</Accordion>
		</motion.div>
	)
}
