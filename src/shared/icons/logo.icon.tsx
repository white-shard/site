import React from "react"

export function AppLogoIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1.5 1.5L7.99794 15.4242C8.32048 16.1153 8.89416 16.6577 9.60232 16.9409L23.5 22.5"
				style={{ stroke: "#F0F4F4" }}
				strokeWidth="3"
			/>
			<path
				d="M21 16L17.8327 7.85556C17.6215 7.31243 17.1839 6.88843 16.6344 6.69448L9 4"
				style={{ stroke: "#B7C1C1" }}
				strokeWidth="3"
			/>
		</svg>
	)
}
