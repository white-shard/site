"use server"

import config from "@payload-config"
import { getPayload } from "payload"

export const getAppCMS = async () => {
	return getPayload({ config })
}
