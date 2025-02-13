"use client"

import Image from "next/image"
import React, { Suspense, useEffect, useRef, useState } from "react"

interface Card3DProps {
	images?: string[]
	zIndex?: number
	top?: string
	left?: string
	width: string
	aspectRatio: number
}

export function Card3DSlider({
	images = [],
	zIndex = 0,
	top = "0",
	left = "0",
	width,
	aspectRatio
}: Card3DProps) {
	const [currentImage, setCurrentImage] = useState(0)
	const [size, setSize] = useState<{ width: number; height: number }>({
		width: 0,
		height: 0
	})
	const cardRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length)
		}, 10000)

		return () => clearInterval(interval)
	}, [images])

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!cardRef.current) return

			const { left, top, width, height } =
				cardRef.current.getBoundingClientRect()
			const centerX = left + width / 2

			const centerY = top + height / 2
			const rotateY = ((e.clientX - centerX) / width) * 5
			const rotateX = ((centerY - e.clientY) / height) * 5
			const limitedRotateX = Math.max(-5, Math.min(5, rotateX))

			const limitedRotateY = Math.max(-5, Math.min(5, rotateY))
			cardRef.current.style.transform = `perspective(1000px) rotateX(${limitedRotateX}deg) rotateY(${limitedRotateY}deg)`

			setSize({ width, height })
		}

		document.addEventListener("mousemove", handleMouseMove)

		return () => {
			document.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	return (
		<div
			ref={cardRef}
			className="border-secondary absolute overflow-hidden rounded-xl border-[1px] bg-white shadow-xl transition-transform duration-200 ease-out"
			style={{
				width,
				aspectRatio: `${aspectRatio}`,
				transformStyle: "preserve-3d",
				zIndex,
				top,
				left
			}}
		>
			{images[currentImage] && (
				<Suspense fallback={null}>
					<Image
						{...size}
						src={images[currentImage]}
						alt={`Slide ${currentImage + 1}`}
						className="h-full w-full rounded-xl object-cover"
					/>
				</Suspense>
			)}
		</div>
	)
}

export default Card3DSlider
