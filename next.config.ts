import { withPayload } from "@payloadcms/next/withPayload"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		dynamicIO: true
	}
}

export default withPayload(nextConfig)
