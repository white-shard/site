import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Media } from "@/dashboard/payload-types"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getMediaURL(data: Media | number) {
	"use client"
	if (typeof data === "number") return "/"
	return data.url || "/"
}
