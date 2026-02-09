<script lang="ts">
	import LinkWithIcon from '$components/LinkWithIcon.svelte';
	import { Home } from '$lib/config/pages';
	import {
		IconSchool,
		IconCode,
		IconMail,
		IconBrandGithub,
		IconBrandLinkedin,
		IconBriefcase,
		IconCertificate,
		IconMapPin,
		IconDownload,
		IconStar,
		IconTag
	} from '@tabler/icons-svelte';
	import { getRandomAccentColor } from '$lib/stores/theme';
	import Site from '$lib/config/common';
</script>

<div class="mx-auto max-w-6xl space-y-20 px-0 py-8 md:space-y-24 md:px-4 md:py-12">
	<!-- Section: About -->
	<section id="about" class="flex flex-col items-center gap-8 px-4 md:flex-row md:px-0">
		<div class="flex w-full items-center justify-center md:w-1/2">
			<img
				src="/images/headshot.jpeg"
				alt="Kenny Nguyen"
				class="h-56 w-56 rounded-full object-cover shadow-lg md:h-96 md:w-96"
			/>
		</div>
		<div class="w-full space-y-5 md:w-1/2">
			<p class="text-subtext0 flex items-center gap-1.5 text-sm">
				<IconMapPin size={16} class="text-accent" />
				Gilbert, AZ
			</p>
			<h1 class="text-3xl font-bold md:text-4xl">
				Hey! I'm <span class="text-accent">Kenny Nguyen</span>
			</h1>
			<p class="text-subtext0 max-w-prose text-lg leading-relaxed">
				I'm a Computer Science student at Arizona State University in the accelerated 4+1 program,
				working towards both my B.S. and M.S. I'm most interested in backend engineering and lately
				I've been working in Go. Always looking for new opportunities to learn and build.
			</p>
			<div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
				{#each Home.socialLinks as link (link.href)}
					<LinkWithIcon
						href={link.href}
						text={link.text}
						icon={link.icon}
						external={true}
						class="text-sm"
					/>
					{#if link !== Home.socialLinks[Home.socialLinks.length - 1]}
						<span class="text-overlay1 text-xs">|</span>
					{/if}
				{/each}
				<span class="text-overlay1 text-xs">|</span>
				<a
					href="/resume.pdf"
					download
					class="text-accent hover:text-accent/70 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
				>
					<IconDownload size={16} />
					Resume
				</a>
			</div>
		</div>
	</section>

	<!-- Section: Education -->
	<section id="education" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconSchool size={24} class="text-accent" />
			Education
		</h2>
		<div class="border-surface0 bg-surface0/20 space-y-4 rounded-xl border p-6">
			<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
				<div>
					<h3 class="text-text text-lg font-semibold">Arizona State University</h3>
					<p class="text-subtext0">
						<span class="text-accent font-medium">M.S. in Computer Science</span> — Accelerated 4+1 Program
					</p>
					<p class="text-subtext1 text-sm">Expected May 2027</p>
				</div>
				<div class="text-subtext1 text-right text-sm">
					<p>Tempe, AZ</p>
				</div>
			</div>
			<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
				<div>
					<h3 class="text-text text-lg font-semibold">Arizona State University</h3>
					<p class="text-subtext0">
						<span class="text-accent font-medium">B.S. in Computer Science</span> — GPA:
						<span class="text-green font-medium">3.88</span>
					</p>
					<p class="text-subtext1 text-sm">Expected May 2026</p>
				</div>
				<div class="text-subtext1 text-right text-sm">
					<p>Tempe, AZ</p>
				</div>
			</div>
			<div class="border-surface1 border-t pt-4">
				<h4 class="text-accent mb-3 text-sm font-semibold tracking-wider uppercase">
					Relevant Coursework
				</h4>
				<div class="flex flex-wrap gap-2">
					{#each ['Foundations of Algorithms', 'Mobile Computing', 'Foundations of Machine Learning', 'Software QA & Testing', 'Computer Networks', 'Software Engineering', 'Programming Languages', 'Operating Systems', 'Data Structures & Algorithms'] as course}
						<span
							class="bg-surface0 rounded-md px-2.5 py-1 text-xs font-semibold"
							style="color: var(--color-{getRandomAccentColor()})"
						>
							{course}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- Certification -->
		<div class="border-accent/20 bg-accent/5 rounded-xl border p-6">
			<div class="flex items-start gap-3">
				<IconCertificate size={20} class="text-accent mt-0.5" />
				<div>
					<h3 class="text-accent font-semibold">
						CodePath Intermediate Technical Interview Prep (Advanced)
					</h3>
					<p class="text-subtext1 text-sm">Summer 2025</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Section: Experience -->
	<section id="experience" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconBriefcase size={24} class="text-accent" />
			Experience
		</h2>
		<div class="border-surface0 bg-surface0/20 rounded-xl border p-6">
			<div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
				<div>
					<h3 class="text-text text-lg font-semibold">Software Engineer Intern</h3>
					<div class="flex items-center gap-3">
						<p class="text-accent text-sm font-medium">Opportunity Hack</p>
						<a
							href="https://github.com/2025-Arizona-Opportunity-Hack-Summer/JungleScript-Dell-ArteInternation"
							target="_blank"
							rel="noopener noreferrer"
							class="text-subtext0 hover:text-accent transition-colors"
							aria-label="View project on GitHub"
						>
							<IconBrandGithub size={16} />
						</a>
					</div>
				</div>
				<div class="text-subtext1 text-sm md:text-right">
					<p>Summer 2025</p>
					<p>Remote</p>
				</div>
			</div>
			<ul class="text-subtext0 mt-4 space-y-2 text-sm leading-relaxed">
				<li class="flex gap-2">
					<span class="text-accent mt-1.5 shrink-0">·</span>
					<span
						>Collaborated in a 3-person team to architect and develop a full-stack alumni platform
						for a global community of over 1,000 users, leading the Next.js frontend and Supabase
						(PostgreSQL) backend.</span
					>
				</li>
				<li class="flex gap-2">
					<span class="text-accent mt-1.5 shrink-0">·</span>
					<span
						>Translated complex UI/UX designs into a dynamic world map using Mapbox GL JS,
						implementing robust state management for stable rendering of 1,000+ alumni data points
						during real-time filtering.</span
					>
				</li>
				<li class="flex gap-2">
					<span class="text-accent mt-1.5 shrink-0">·</span>
					<span
						>Engineered an end-to-end security model by integrating Clerk for authentication and
						implementing Row Level Security (RLS) policies in Supabase for strict data access rules.</span
					>
				</li>
				<li class="flex gap-2">
					<span class="text-accent mt-1.5 shrink-0">·</span>
					<span
						>Built a comprehensive admin dashboard enabling migration of 1,000+ legacy records
						through a CSV import tool with custom data validation, and integrated Mailgun for
						targeted bulk-email campaigns.</span
					>
				</li>
			</ul>
			<a
				href="https://github.com/2025-Arizona-Opportunity-Hack-Summer/JungleScript-Dell-ArteInternation"
				target="_blank"
				rel="noopener noreferrer"
				class="border-surface1 mt-5 block overflow-hidden rounded-lg border transition-opacity hover:opacity-80"
			>
				<img
					src="/images/ohack.png"
					alt="Dell'Arte Alumni Platform — interactive world map with alumni search and filtering"
					class="w-full"
				/>
			</a>
		</div>
	</section>

	<!-- Section: Skills -->
	<section id="skills" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconCode size={24} class="text-accent" />
			Skills
		</h2>
		{#each [{ category: 'Languages', items: [{ name: 'Go', icon: 'go/go-original' }, { name: 'Python', icon: 'python/python-original' }, { name: 'Java', icon: 'java/java-original' }, { name: 'C++', icon: 'cplusplus/cplusplus-original' }, { name: 'C', icon: 'c/c-original' }, { name: 'TypeScript', icon: 'typescript/typescript-original' }, { name: 'JavaScript', icon: 'javascript/javascript-original' }, { name: 'SQL', icon: 'azuresqldatabase/azuresqldatabase-original' }, { name: 'Kotlin', icon: 'kotlin/kotlin-original' }, { name: 'HTML', icon: 'html5/html5-original' }, { name: 'CSS', icon: 'css3/css3-original' }] }, { category: 'Frameworks & Libraries', items: [{ name: 'Next.js', icon: 'nextjs/nextjs-original' }, { name: 'React', icon: 'react/react-original' }, { name: 'Node.js', icon: 'nodejs/nodejs-original' }, { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' }] }, { category: 'Databases & Services', items: [{ name: 'PostgreSQL', icon: 'postgresql/postgresql-original' }, { name: 'Supabase', icon: 'supabase/supabase-original' }] }, { category: 'Developer Tools', items: [{ name: 'Git', icon: 'git/git-original' }, { name: 'Linux', icon: 'linux/linux-original' }, { name: 'Vercel', icon: 'vercel/vercel-original' }] }] as group (group.category)}
			<div class="border-surface0 bg-surface0/20 rounded-xl border px-4 py-3">
				<h3 class="text-accent mb-2 text-xs font-semibold tracking-wider uppercase">
					{group.category}
				</h3>
				<div class="flex flex-wrap gap-x-4 gap-y-2">
					{#each group.items as skill (skill.name)}
						<div class="flex items-center gap-1.5 py-1">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{skill.icon}.svg"
								alt={skill.name}
								class="h-5 w-5"
							/>
							<span class="text-subtext0 text-xs">{skill.name}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</section>

	<!-- Section: Projects -->
	<section id="projects" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconStar size={24} class="text-accent" />
			Projects
		</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
			{#each [{ name: 'Redis Clone', repo: 'Intro0/redis-from-scratch-go', description: 'A Redis server built from scratch in Go implementing the RESP protocol, key-value storage with TTL expiration, concurrent client handling, and Redis Streams.', tags: ['go', 'tcp-sockets', 'concurrency', 'resp-protocol'] }, { name: 'Shell Clone', repo: 'Intro0/shell-from-scratch-go', description: 'A POSIX-like shell built from scratch in Go with a REPL, builtin commands, PATH resolution, and external program execution.', tags: ['go', 'systems-programming', 'process-management'] }] as project (project.repo)}
				<a
					href="https://github.com/{project.repo}"
					target="_blank"
					rel="noopener noreferrer"
					class="border-surface0 bg-base hover:border-accent group flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl"
				>
					<!-- Repo card with light grey background -->
					<div
						class="flex-1 overflow-hidden rounded-t-xl p-6"
						style="background: rgba(160, 170, 185, 0.25)"
					>
						<div
							class="bg-surface0 border-surface1 flex h-full flex-col rounded-xl border p-5 shadow-xl transition-transform duration-300 group-hover:scale-[1.03]"
						>
							<div class="flex items-center gap-1.5">
								<span class="bg-red h-3 w-3 rounded-full"></span>
								<span class="bg-yellow h-3 w-3 rounded-full"></span>
								<span class="bg-green h-3 w-3 rounded-full"></span>
							</div>
							<p class="text-accent mt-4 text-sm font-medium">{project.repo}</p>
							<p class="text-subtext0 mt-2 text-sm leading-relaxed">{project.description}</p>
						</div>
					</div>

					<!-- Project info -->
					<div class="space-y-3 px-5 pt-2 pb-5">
						<h3 class="text-text group-hover:text-accent text-xl font-semibold transition-colors">
							{project.name}
						</h3>
						<p class="text-subtext0 line-clamp-2 text-sm">{project.description}</p>
						<div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
							<IconTag size={16} class="text-subtext0" />
							{#each project.tags as tag}
								<span
									class="bg-surface0 rounded px-2 py-1 font-semibold"
									style="color: var(--color-{getRandomAccentColor()})"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</a>
			{/each}

			<!-- Distributed Storage (no repo link) -->
			<div
				class="border-surface0 bg-base group flex flex-col overflow-hidden rounded-xl border shadow-lg"
			>
				<!-- Terminal card with grey background -->
				<div
					class="flex-1 overflow-hidden rounded-t-xl p-6"
					style="background: rgba(160, 170, 185, 0.25)"
				>
					<div
						class="bg-surface0 border-surface1 flex h-full flex-col rounded-xl border p-5 shadow-xl"
					>
						<div class="flex items-center gap-1.5">
							<span class="bg-red h-3 w-3 rounded-full"></span>
							<span class="bg-yellow h-3 w-3 rounded-full"></span>
							<span class="bg-green h-3 w-3 rounded-full"></span>
						</div>
						<p class="text-accent mt-4 text-sm font-medium">Computer Networks Class Project</p>
						<p class="text-subtext0 mt-2 text-sm leading-relaxed">
							A fault-tolerant distributed storage system with Block-Interleaved Distributed Parity,
							UDP networking, and multi-threaded parallel I/O across networked storage nodes.
						</p>
					</div>
				</div>

				<!-- Project info -->
				<div class="space-y-3 px-5 pt-2 pb-5">
					<h3 class="text-text text-xl font-semibold">Distributed Storage System</h3>
					<p class="text-subtext0 line-clamp-2 text-sm">
						Fault-tolerant distributed storage with XOR-based parity reconstruction, parallel
						striped I/O, and coordinated multi-process recovery across networked disks.
					</p>
					<div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
						<IconTag size={16} class="text-subtext0" />
						{#each ['python', 'udp-sockets', 'multi-threading', 'distributed-systems', 'fault-tolerance'] as tag}
							<span
								class="bg-surface0 rounded px-2 py-1 font-semibold"
								style="color: var(--color-{getRandomAccentColor()})"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Section: Contact -->
	<section id="contact" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconMail size={24} class="text-accent" />
			Contact
		</h2>
		<p class="text-subtext0 max-w-prose text-lg leading-relaxed">
			I'm always open to new opportunities and conversations. Feel free to reach out!
		</p>
		<div class="flex flex-wrap gap-4">
			<a
				href="mailto:{Site.out.email}"
				class="bg-accent/10 border-accent/30 text-accent hover:bg-accent/20 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
			>
				<IconMail size={18} />
				Email Me
			</a>
			<a
				href={Site.out.github}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-surface0/50 border-surface1 text-text hover:bg-surface1 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
			>
				<IconBrandGithub size={18} />
				GitHub
			</a>
			<a
				href={Site.out.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-surface0/50 border-surface1 text-text hover:bg-surface1 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
			>
				<IconBrandLinkedin size={18} />
				LinkedIn
			</a>
		</div>
	</section>
</div>
