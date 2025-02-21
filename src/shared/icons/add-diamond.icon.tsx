import { SVGProps } from "react"

export function AddDiamondIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M11 16h2v-3h3v-2h-3V8h-2v3H8v2h3zm1 6q-.4 0-.763-.137t-.637-.438l-7.975-8q-.275-.3-.45-.663T2 12t.175-.763t.45-.637l7.975-8q.3-.3.65-.45T12 2t.775.15t.65.45l7.95 8q.275.3.45.65T22 12t-.162.763t-.463.662l-7.95 8q-.275.275-.65.425T12 22"
			></path>
		</svg>
	)
}
