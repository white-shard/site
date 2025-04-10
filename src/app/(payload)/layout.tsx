/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from "@payload-config"
import "@payloadcms/next/css"
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts"
import type { ServerFunctionClient } from "payload"
import React, { Suspense } from "react"

import "./custom.scss"
import { importMap } from "./dashboard/importMap"

type Args = {
	children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
	"use server"
	return handleServerFunctions({
		...args,
		config,
		importMap
	})
}

const Layout = ({ children }: Args) => (
	<Suspense>
		<RootLayout
			config={config}
			importMap={importMap}
			serverFunction={serverFunction}
		>
			{children}
		</RootLayout>
	</Suspense>
)

export default Layout
