import { type Icon, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte';
import { dev } from '$app/environment';

interface Site {
	name: string;
	url: string;
	description: string;
	tags: string[];
	seo: {
		author: string;
		location: {
			city: string;
			region: string;
			country: string;
		};
	};
	out: {
		github: string;
		linkedin: string;
		email: string;
	};
}

const Site: Site = {
	name: 'Kenny Nguyen',
	url: dev ? 'http://localhost:5173' : 'https://kennynguyen.me',
	description:
		'Kenny Nguyen - CS student at Arizona State University. Building software that solves real problems.',
	tags: [
		'Kenny Nguyen',
		'Computer Science',
		'Arizona State University',
		'Software Engineer',
		'Backend Engineer',
		'Go Developer',
		'Systems Programming'
	],
	seo: {
		author: 'Kenny Nguyen',
		location: {
			city: 'Tempe',
			region: 'Arizona',
			country: 'USA'
		}
	},
	out: {
		github: 'https://github.com/Intro0',
		linkedin: 'https://www.linkedin.com/in/kenny-nguyenn/',
		email: 'kennytrung0603@icloud.com'
	}
};

export default Site;

export const Socials = [
	{
		url: Site.out.github,
		label: 'GitHub',
		icon: IconBrandGithub,
		footer: true
	},
	{
		url: Site.out.linkedin,
		label: 'LinkedIn',
		icon: IconBrandLinkedin,
		footer: true
	}
];
