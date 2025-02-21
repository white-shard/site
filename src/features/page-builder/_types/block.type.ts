import { Block } from "payload"

export type RegisteredBlockData = {
	blockType: string
	dashboard: Block
	renderer: (data: never) => React.ReactNode
}
