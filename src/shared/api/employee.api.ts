import { getAppCMS } from "../lib/payload"

export async function getEmployees() {
	const payload = await getAppCMS()
	const data = await payload.find({
		collection: "employees"
	})

	return data.docs
}
