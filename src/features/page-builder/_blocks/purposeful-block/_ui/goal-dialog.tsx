import { RichText } from "@payloadcms/richtext-lexical/react"

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from "@/shared/ui/dialog"

import { Goal } from "../_types/purposeful-block.types"

type GoalDialogProps = {
	selectedGoal: Goal | null
	onOpenChange: (open: boolean) => void
}

export function GoalDialog({ selectedGoal, onOpenChange }: GoalDialogProps) {
	return (
		<Dialog open={!!selectedGoal} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl">{selectedGoal?.title}</DialogTitle>
				</DialogHeader>
				<RichText
					className="richText"
					data={selectedGoal?.description as never}
				/>
			</DialogContent>
		</Dialog>
	)
}
