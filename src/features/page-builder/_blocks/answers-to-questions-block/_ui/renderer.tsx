"use client"

import { motion } from "framer-motion"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/shared/ui/accordion"
import { BlockHeader } from "@/shared/ui/block-header"

import { AnswersToQuestionsBlockData } from "../_types/answers-to-questions-block.type"

type Props = {
	data: AnswersToQuestionsBlockData
}

export function AnswersToQuestionsBlockRenderer({ data }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<BlockHeader title={data.title} description={data.description} />
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
		</div>
	)
}
