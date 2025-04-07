import { BlockHeader } from "@/shared/ui/block-header"

import { getEmployees } from "@/shared/api/employee.api"

import { EmployeeBlockData } from "../_types/employee-block.types"

import { EmployeesList } from "./employee-list"

type Props = {
	data: EmployeeBlockData
}

export async function EmployeeBlockRenderer({ data }: Props) {
	const employees = await getEmployees()
	return (
		<div className="flex flex-col gap-8">
			<BlockHeader title={data.title} description={data.description} />
			<EmployeesList employees={employees} />
		</div>
	)
}
