import { Suspense } from "react"

export default function CaseLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <Suspense>{children}</Suspense>
}
