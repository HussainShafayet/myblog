import Image from "next/image";

export const metadata = {
  title: "About | My Blog",
  description: "Learn more about me, my journey, and what drives this blog.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-14">
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">👋 Hey, I’m Shafayet</h1>
        <p className="text-muted-foreground text-lg">
          Developer, learner, and curious mind behind this blog.
        </p>
      </header>

      {/* Profile Card */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Image
          src="/profile.jpg" // Replace with your image in public/
          alt="Profile photo"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I’m a frontend developer with a passion for clean design, modern web technologies,
            and sharing knowledge through writing. I created this blog to document my journey and
            help others grow along the way.
          </p>
          <p className="mt-4">
            I enjoy crafting intuitive UIs, experimenting with new tools, and contributing to
            open-source when I can. Currently learning deeper into React internals, serverless
            architectures, and design systems.
          </p>
        </div>
      </div>

      {/* What I Do */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">💻 What I Do</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Build sleek user interfaces using React, Next.js, and Tailwind CSS</li>
          <li>Write blog posts to simplify complex frontend topics</li>
          <li>Experiment with serverless tools like Firebase & Vercel Functions</li>
          <li>Contribute to open-source when time allows</li>
        </ul>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">📜 My Journey</h2>
        <ol className="relative border-l border-gray-300 dark:border-gray-600">
          <li className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 top-1" />
            <time className="text-sm text-muted-foreground">2022</time>
            <p className="font-medium">Started learning web development</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              HTML, CSS, and some JS projects sparked the curiosity.
            </p>
          </li>
          <li className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 top-1" />
            <time className="text-sm text-muted-foreground">2023</time>
            <p className="font-medium">Dove into React & Tailwind</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built mini-projects, learned state management, and styled-components.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 top-1" />
            <time className="text-sm text-muted-foreground">2024 - Present</time>
            <p className="font-medium">Started this blog & sharing what I learn</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building in public while preparing for frontend roles.
            </p>
          </li>
        </ol>
      </div>

      {/* Mission */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">🎯 Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My goal is simple: learn deeply, build openly, and help others grow.
          I believe in the power of sharing — every post here reflects something
          I struggled with and want to make easier for others.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-black text-white dark:bg-white dark:text-black font-medium px-6 py-3 rounded-full hover:scale-105 transition transform"
        >
          📬 Get in Touch
        </a>
      </div>
    </section>
  );
}
