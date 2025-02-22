import { Metadata } from "next"
import { Block } from "payload"

export type RegisteredBlockData = {
	blockType: string
	dashboard: Block
	renderer: (data: never) => React.ReactNode
}

export type RegisteredChildPageController = {
	controllerId: string
	dashboard: Block
	metadata: (data: never, segments: string[]) => Promise<Metadata>
	renderer: (data: never, segments: string[]) => React.ReactNode
}
