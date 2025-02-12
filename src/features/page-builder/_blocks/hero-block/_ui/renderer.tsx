"use client"

type Props = {
	data: never
}
export function HeroBlockRenderer(props: Props) {
	return <div>HeroBlock {props.data?.title}</div>
}
