import {
  Code2,
  Database,
  Server,
  Cloud,
  BrainCircuit,
  Smartphone,
} from 'lucide-react'

export const categories = [
  {
    id: 1,
    title: 'Frontend',
    description:
      'React, TypeScript, Tailwind CSS, Next.js and modern UI development.',
    icon: Code2,
    articles: 12,
  },
  {
    id: 2,
    title: 'Backend',
    description:
      'Node.js, Express, NestJS, APIs, authentication and architecture.',
    icon: Server,
    articles: 15,
  },
  {
    id: 3,
    title: 'Databases',
    description: 'PostgreSQL, MySQL, MongoDB, indexing and query optimization.',
    icon: Database,
    articles: 8,
  },
  {
    id: 4,
    title: 'DevOps',
    description: 'Docker, CI/CD, Linux, deployment and cloud infrastructure.',
    icon: Cloud,
    articles: 7,
  },
  {
    id: 5,
    title: 'Artificial Intelligence',
    description:
      'Machine Learning, LLMs, AI tools and intelligent applications.',
    icon: BrainCircuit,
    articles: 6,
  },
  {
    id: 6,
    title: 'Mobile',
    description:
      'React Native, Flutter and cross-platform application development.',
    icon: Smartphone,
    articles: 5,
  },
]
