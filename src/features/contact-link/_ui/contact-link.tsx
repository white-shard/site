import React, { HTMLAttributes, Suspense } from "react"

import { Skeleton } from "@/shared/ui/skeleton"

import { cn } from "@/shared/lib/utils"

import { Contact } from "./contact"

type Props = {
	/**
	 * Иконка, которая отображается перед ссылкой
	 */
	icon?: React.ReactElement
	/**
	 * Префикс, который добавляется перед значением профиля
	 *
	 * Например: "@" для Twitter или "t.me/" для Telegram
	 */
	prefix?: string
	/**
	 * Шаблон URL для перехода в чат мессенджера
	 *
	 * Например: "https://t.me/%profile%?text=%message%" для Telegram
	 *
	 * @template %profile% - профиль в мессенджере
	 * @template %message% - сообщение
	 */
	hrefPattern: string
	className?: HTMLAttributes<HTMLDivElement>["className"]
}

export async function ContactLink({
	icon,
	prefix,
	hrefPattern,
	className
}: Props) {
	return (
		<div className={cn("flex items-center gap-3", className)}>
			{icon}
			<Suspense fallback={<Skeleton className="h-6 w-36" />}>
				<Contact prefix={prefix} hrefPattern={hrefPattern} />
			</Suspense>
		</div>
	)
}
