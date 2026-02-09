import type { Icon } from '@tabler/icons-svelte';

interface NavItem {
	title: string;
	href: string;
	icon?: Icon;
	external?: boolean;
}

export const mainNavItems: NavItem[] = [];

export const moreNavItems: NavItem[] = [];
