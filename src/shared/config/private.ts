import { z } from "zod"

const privateConfigSchema = z.object({
	NEXT_PUBLIC_SITE_URL: z.string(),
	NEXT_PUBLIC_API_URL: z.string(),
	REVALIDATE_VERY_RARE: z.string().default("86400"),
	REVALIDATE_RARE: z.string().default("3600"),
	REVALIDATE_FREQUENT: z.string().default("60")
})

export const privateConfig = privateConfigSchema.parse(process.env)
