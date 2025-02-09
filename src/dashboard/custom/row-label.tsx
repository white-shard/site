"use client"

import { useRowLabel } from "@payloadcms/ui"

export const ArrayRowLabel = () => {
	const { data, rowNumber } = useRowLabel<{
		label?: string
		title?: string
		name?: string
	}>()

	const customLabel = `Item ${String(rowNumber).padStart(2, "0")} `

	return <h4>{data.label || data.title || data.name || customLabel}</h4>
}
