"use client"

import { AnimatePresence, motion } from "framer-motion"
import { BriefcaseIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Employee, Media } from "@/dashboard/payload-types"

import { getMediaURL } from "@/shared/lib/utils"

export function EmployeesList({ employees }: { employees: Employee[] }) {
	const [selectedRole, setSelectedRole] = useState<string>(
		employees[0]?.role || ""
	)

	if (!employees.length) return null

	// Находим выбранного сотрудника
	const selectedEmployee =
		employees.find((emp) => emp.role === selectedRole) || employees[0]

	// Получаем все уникальные роли
	const roles = employees.map((emp) => emp.role)

	return (
		<div className="flex flex-col gap-8 md:flex-row">
			{/* Селектор ролей (слева) */}
			<div className="space-y-2 md:w-1/4">
				<div className="flex flex-row gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
					{roles.map((role) => (
						<button
							key={role}
							className={`cursor-pointer rounded-lg px-4 py-3 text-left transition-all duration-300 ${
								selectedRole === role
									? "bg-primary font-medium text-white"
									: "hover:bg-primary/10 border-primary/20 border-2 bg-transparent text-gray-600 hover:border-transparent dark:text-gray-400"
							} w-auto flex-shrink-0 md:flex-shrink`}
							onClick={() => setSelectedRole(role)}
						>
							{role}
						</button>
					))}
				</div>
			</div>

			{/* Информация о сотруднике (справа) */}
			<div className="md:w-3/4">
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedEmployee.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="flex flex-col justify-around gap-8 md:flex-row"
					>
						{/* Изображение сотрудника */}
						<div className="relative h-[400px] w-64 overflow-hidden rounded-xl">
							{selectedEmployee.picture && (
								<Image
									src={getMediaURL(selectedEmployee.picture as Media)}
									alt={selectedEmployee.name}
									fill
									className="object-cover"
								/>
							)}
						</div>

						{/* Информация о сотруднике */}
						<div className="flex flex-col md:w-1/2">
							<h2 className="mb-3 text-2xl font-bold md:text-3xl">
								{selectedEmployee.name}
							</h2>

							<div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
								<BriefcaseIcon className="mr-2 h-4 w-4" />
								<span>{selectedEmployee.experience}</span>
							</div>

							<p className="mb-6 text-gray-600 dark:text-gray-300">
								{selectedEmployee.description}
							</p>

							<div className="mt-auto flex items-center gap-3 rounded-lg bg-black/5 px-4 py-2.5 dark:bg-white/5">
								<div className="flex -space-x-1">
									<span className="inline-block rounded-full bg-white p-1.5" />
									{selectedEmployee.rank !== "Младший специалист" && (
										<span className="inline-block rounded-full bg-blue-500 p-1.5" />
									)}
									{selectedEmployee.rank !== "Старший специалист" &&
										selectedEmployee.rank !== "Младший специалист" && (
											<span className="inline-block rounded-full bg-red-500 p-1.5" />
										)}
								</div>
								<span className="text-sm font-medium">
									{selectedEmployee.rank}
								</span>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}
