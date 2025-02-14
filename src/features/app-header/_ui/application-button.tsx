import { Button } from "@/shared/ui/button"

import { PhoneApplicationIcon } from "@/shared/icons/phone-application.icon"

export function ApplicationButton() {
	return (
		<>
			<Button className="hidden md:block">Оставить заявку</Button>
			<PhoneApplicationIcon className="text-primary size-6 md:hidden" />
		</>
	)
}
