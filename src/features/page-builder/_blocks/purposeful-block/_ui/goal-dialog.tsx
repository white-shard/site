import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/shared/ui/dialog"

import { Goal } from "./types"

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
				<DialogDescription className="text-base">
					{selectedGoal?.description}
				</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}
