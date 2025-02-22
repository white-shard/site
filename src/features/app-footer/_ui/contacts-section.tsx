import { getFooterData } from "@/shared/api/settings.api"

type Props = {
	contact: React.ReactNode
}

export async function ContactsSection({ contact }: Props) {
	const data = await getFooterData()

	return (
		<div>
			<h3 className="mb-6 font-semibold tracking-wider uppercase md:text-lg">
				Контакты
			</h3>
			<p className="text-secondary mb-2 leading-relaxed">
				{data.contactsDescription}
			</p>
			{contact}
		</div>
	)
}
