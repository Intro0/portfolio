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
	import { getTagColors } from '$lib/stores/theme';
	import Site from '$lib/config/common';

	const courses = [
		'Foundations of Algorithms',
		'Operating Systems',
		'Computer Networks',
		'Data Structures & Algorithms',
		'Software QA & Testing',
		'Principles of Programming Languages',
		'Mobile Computing',
		'Foundations of Machine Learning',
		'Software Engineering'
	];
	const courseColors = getTagColors(courses);

	const orderTags = ['java', 'spring-boot', 'kafka', 'postgresql', 'docker', 'microservices'];
	const orderColors = getTagColors(orderTags);

	const dsTags = [
		'python',
		'udp-sockets',
		'multi-threading',
		'distributed-systems',
		'fault-tolerance'
	];
	const dsColors = getTagColors(dsTags);

	const compTags = ['c++', 'recursive-descent-parsing', 'code-generation', 'compilers'];
	const compColors = getTagColors(compTags);
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
				I'm a Computer Science master's student at Arizona State University with a B.S. in Computer
				Science. I enjoy backend and systems engineering, especially building reliable software and
				understanding how it works underneath.
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
		<div class="border-accent/20 bg-accent/5 space-y-5 rounded-xl border p-6">
			<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
				<div>
					<h3 class="text-text text-lg font-semibold">Arizona State University</h3>
					<p class="text-accent font-medium">M.S. in Computer Science</p>
					<p class="text-subtext1 text-sm">Accelerated 4+1 Program</p>
				</div>
				<div class="text-subtext1 text-sm md:text-right">
					<p>Aug 2026 – Dec 2027</p>
					<p>Tempe, AZ</p>
				</div>
			</div>
			<div class="border-surface1 border-t pt-5">
				<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
					<div>
						<h3 class="text-text text-lg font-semibold">Arizona State University</h3>
						<p class="text-subtext0">
							<span class="text-accent font-medium">B.S. in Computer Science</span> — GPA:
							<span class="text-green font-medium">3.88</span>
						</p>
						<p class="text-subtext1 text-sm">Aug 2022 – May 2026</p>
					</div>
					<div class="text-subtext1 text-sm md:text-right">
						<p>Tempe, AZ</p>
					</div>
				</div>
			</div>
			<div class="border-surface1 border-t pt-4">
				<h4 class="text-accent mb-3 text-sm font-semibold tracking-wider uppercase">
					Relevant Coursework
				</h4>
				<div class="flex flex-wrap gap-2">
					{#each courses as course, i}
						<span
							class="bg-surface0 rounded-md px-2.5 py-1 text-xs font-semibold"
							style="color: var(--color-{courseColors[i]})"
						>
							{course}
						</span>
					{/each}
				</div>
			</div>
			<div class="border-surface1 border-t pt-4">
				<h4 class="text-accent mb-3 text-sm font-semibold tracking-wider uppercase">
					<span class="inline-flex items-center gap-2">
						<IconCertificate size={16} />
						Certifications
					</span>
				</h4>
				<div class="flex items-start justify-between">
					<div>
						<p class="text-text font-semibold">
							CodePath Intermediate Technical Interview Prep (Advanced)
						</p>
					</div>
					<p class="text-subtext1 shrink-0 text-sm">Summer 2025</p>
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
		<div class="space-y-4">
			<!-- Tokyo Electron America -->
			<div class="border-surface0 bg-surface0/20 rounded-xl border p-6">
				<div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
					<div>
						<h3 class="text-text text-lg font-semibold">Software Engineering Intern (Contract)</h3>
						<p class="text-accent text-sm font-medium">Tokyo Electron America</p>
					</div>
					<div class="text-subtext1 text-sm md:text-right">
						<p>Aug 2025 – May 2026</p>
					</div>
				</div>
				<ul class="text-subtext0 mt-4 space-y-2 text-sm leading-relaxed">
					<li class="flex gap-2">
						<span class="text-accent mt-1.5 shrink-0">·</span>
						<span
							>Designed and implemented a C# state machine in Unity governing NPC behavior with
							multiple states and transition conditions; wired event-driven communication between
							subsystems to trigger cross-component behavior on state changes.</span
						>
					</li>
					<li class="flex gap-2">
						<span class="text-accent mt-1.5 shrink-0">·</span>
						<span
							>Led final integration of independently developed Unity modules into a single Meta
							Quest VR application using the Meta XR SDK, establishing correct state initialization,
							scene transitions, and end conditions for Android/Quest standalone deployment.</span
						>
					</li>
					<li class="flex gap-2">
						<span class="text-accent mt-1.5 shrink-0">·</span>
						<span
							>Debugged cross-module integration failures in C#/Unity where components passed in
							isolation but broke in combined runtime; resolved Quest 2 and Quest 3 device-specific
							geometry collision failures and UI layout inconsistencies.</span
						>
					</li>
				</ul>
			</div>
			<!-- Opportunity Hack -->
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
						<p>June 2025 – Aug 2025</p>
						<p>Remote</p>
					</div>
				</div>
				<ul class="text-subtext0 mt-4 space-y-2 text-sm leading-relaxed">
					<li class="flex gap-2">
						<span class="text-accent mt-1.5 shrink-0">·</span>
						<span
							>Led a 3-person team to design and ship a full-stack alumni platform serving 1,000+
							users, making key architectural decisions including technology selection and system
							design.</span
						>
					</li>
					<li class="flex gap-2">
						<span class="text-accent mt-1.5 shrink-0">·</span>
						<span
							>Designed the platform's data model and access control architecture, choosing Row
							Level Security (RLS) for role separation and Clerk for authentication with
							webhook-based account linking.</span
						>
					</li>
					<li class="flex gap-2">
						<span class="text-accent mt-1.5 shrink-0">·</span>
						<span
							>Delivered an interactive alumni world map with real-time filtering, a CSV bulk import
							tool that migrated 1,000+ legacy records, and an admin dashboard for database
							management and bulk email campaigns.</span
						>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Section: Skills -->
	<section id="skills" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconCode size={24} class="text-accent" />
			Skills
		</h2>
		<div class="border-accent/20 bg-accent/5 space-y-4 rounded-xl border p-6">
			{#each [{ category: 'Languages', items: [{ name: 'Python', icon: 'python/python-original' }, { name: 'Go', icon: 'go/go-original' }, { name: 'Java', icon: 'java/java-original' }, { name: 'C/C++', icon: 'cplusplus/cplusplus-original' }, { name: 'JavaScript', icon: 'javascript/javascript-original' }, { name: 'TypeScript', icon: 'typescript/typescript-original' }, { name: 'HTML/CSS', icon: 'html5/html5-original' }, { name: 'Bash', icon: 'bash/bash-original' }, { name: 'SQL', icon: 'azuresqldatabase/azuresqldatabase-original' }] }, { category: 'Frameworks & Databases', items: [{ name: 'Spring Boot', icon: 'spring/spring-original' }, { name: 'React', icon: 'react/react-original' }, { name: 'JUnit', icon: 'junit/junit-original' }, { name: 'Mockito', icon: 'java/java-original' }, { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' }] }, { category: 'Tools & Concepts', items: [{ name: 'Kafka', icon: 'apachekafka/apachekafka-original' }, { name: 'Docker', icon: 'docker/docker-original' }, { name: 'Git', icon: 'git/git-original' }, { name: 'Linux', icon: 'linux/linux-original' }] }] as group, i (group.category)}
				<div class={i > 0 ? 'border-surface1 border-t pt-4' : ''}>
					<h3 class="text-accent mb-2 text-xs font-semibold tracking-wider uppercase">
						{group.category}
					</h3>
					<div class="flex flex-wrap gap-x-6 gap-y-3">
						{#each group.items as skill (skill.name)}
							<div class="flex items-center gap-2.5 py-2">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{skill.icon}.svg"
									alt={skill.name}
									class="h-8 w-8"
								/>
								<span class="text-subtext0 text-sm font-medium">{skill.name}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Section: Projects -->
	<section id="projects" class="space-y-6 px-4 md:px-0">
		<h2 class="flex items-center gap-3 text-2xl font-bold">
			<IconStar size={24} class="text-accent" />
			Projects
		</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
			{#each [{ name: 'Redis Server', repo: 'Intro0/redis-from-scratch-go', description: 'A Redis-inspired server in Go with 13 commands over TCP, a buffered RESP parser, strings with TTL expiration, Redis Streams, concurrent Pub/Sub, and AOF persistence for SET operations with command replay on startup.', tags: ['go', 'tcp-sockets', 'concurrency', 'pub-sub', 'aof-persistence'] }, { name: 'Shell Clone', repo: 'Intro0/shell-from-scratch-go', description: 'A POSIX-like shell in Go with a REPL loop, 3 builtin commands, and PATH resolution that searches system directories and validates executable permissions before spawning child processes with full I/O passthrough.', tags: ['go', 'systems-programming', 'process-management'] }] as project (project.repo)}
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
					<div class="space-y-3 px-5 pt-5 pb-5">
						<h3 class="text-text group-hover:text-accent text-xl font-semibold transition-colors">
							{project.name}
						</h3>
						<p class="text-subtext0 line-clamp-2 text-sm">{project.description}</p>
						<div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
							<IconTag size={16} class="text-subtext0" />
							{#each project.tags as tag, i}
								{@const colors = getTagColors(project.tags)}
								<span
									class="bg-surface0 rounded px-2 py-1 font-semibold"
									style="color: var(--color-{colors[i]})"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</a>
			{/each}

			<!-- Distributed Order Processing System (no repo link) -->
			<div
				class="border-surface0 bg-base group flex flex-col overflow-hidden rounded-xl border shadow-lg"
			>
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
						<p class="text-accent mt-4 text-sm font-medium">Event-driven microservices system</p>
						<p class="text-subtext0 mt-2 text-sm leading-relaxed">
							Built 3 Spring Boot services (order, stock, email) communicating asynchronously via
							Kafka, persisting orders to PostgreSQL and fanning out to downstream consumers via a
							shared domain event model. Containerized with Docker Compose for one-command local
							deployment.
						</p>
					</div>
				</div>
				<div class="space-y-3 px-5 pt-5 pb-5">
					<h3 class="text-text text-xl font-semibold">Distributed Order Processing System</h3>
					<p class="text-subtext0 line-clamp-2 text-sm">
						Event-driven microservices with Kafka, Spring Boot, PostgreSQL, and Docker Compose for
						reliable order processing across distributed services.
					</p>
					<div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
						<IconTag size={16} class="text-subtext0" />
						{#each orderTags as tag, i}
							<span
								class="bg-surface0 rounded px-2 py-1 font-semibold"
								style="color: var(--color-{orderColors[i]})"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
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
				<div class="space-y-3 px-5 pt-5 pb-5">
					<h3 class="text-text text-xl font-semibold">Distributed Storage System</h3>
					<p class="text-subtext0 line-clamp-2 text-sm">
						Fault-tolerant distributed storage with XOR-based parity reconstruction, parallel
						striped I/O, and coordinated multi-process recovery across networked disks.
					</p>
					<div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
						<IconTag size={16} class="text-subtext0" />
						{#each dsTags as tag, i}
							<span
								class="bg-surface0 rounded px-2 py-1 font-semibold"
								style="color: var(--color-{dsColors[i]})"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
			<!-- Compiler (no repo link) -->
			<div
				class="border-surface0 bg-base group flex flex-col overflow-hidden rounded-xl border shadow-lg"
			>
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
						<p class="text-accent mt-4 text-sm font-medium">Programming Languages Class Project</p>
						<p class="text-subtext0 mt-2 text-sm leading-relaxed">
							A compiler in C++ with a recursive descent parser that directly generates a
							linked-list intermediate representation supporting 6 instruction types for
							assignments, conditionals, loops, and switch statements.
						</p>
					</div>
				</div>
				<div class="space-y-3 px-5 pt-5 pb-5">
					<h3 class="text-text text-xl font-semibold">Compiler</h3>
					<p class="text-subtext0 line-clamp-2 text-sm">
						Compiler with recursive descent parsing, intermediate code generation, symbol table
						management, and a PC-based execution engine.
					</p>
					<div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
						<IconTag size={16} class="text-subtext0" />
						{#each compTags as tag, i}
							<span
								class="bg-surface0 rounded px-2 py-1 font-semibold"
								style="color: var(--color-{compColors[i]})"
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
