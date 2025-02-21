import { postgresAdapter } from "@payloadcms/db-postgres"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { ru } from "@payloadcms/translations/languages/ru"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"

import {
	CasesCollection,
	MediaCollection,
	RequestCollection,
	UserCollection
} from "./collections"
import { PageCollection } from "./collections/page.collection"
import { SettingsGlobal } from "./globals"
import { ruTranslations } from "./translations"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
	admin: {
		user: UserCollection.slug,
		avatar: "default",
		theme: "dark",
		suppressHydrationWarning: true,
		importMap: {
			baseDir: "@/dashboard"
		}
	},
	i18n: {
		supportedLanguages: { ru },
		translations: {
			ru: ruTranslations
		}
	},
	collections: [
		UserCollection,
		PageCollection,
		CasesCollection,
		RequestCollection,
		MediaCollection
	],
	globals: [SettingsGlobal],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	localization: {
		locales: [{ code: "ru", label: "Русский" }],
		defaultLocale: "ru"
	},
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts")
	},
	routes: {
		admin: "/dashboard"
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI || ""
		}
	}),
	plugins: [payloadCloudPlugin()]
})
