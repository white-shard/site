import { TelegramIcon } from "@/shared/icons/tg.icon"

import { ContactLink } from "./contact-link"

/**
 * Ссылка на Telegram с предустановленным профилем и сообщением
 */
export function TelegramLink() {
	return (
		<ContactLink
			icon={<TelegramIcon />}
			prefix="t.me/"
			hrefPattern="https://t.me/%profile%?text=%message%"
		/>
	)
}
