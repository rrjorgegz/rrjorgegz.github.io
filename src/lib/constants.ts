import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/rrjorgegz',
  linkedin: 'https://www.linkedin.com/in/rafael-ruben-jg/',
  mail: 'mailto:rrjorgegz@gmail.com',
  instagram: 'https://www.instagram.com/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/rrjorgegz',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science Engineer',
    institution: 'Universidad de las Ciencias Informáticas - UCI',
    link: 'https://uci.cu/',
    date: '2015 - 2020',
  },
]

export const EXPERIENCE = [
  {
    id: 'desoft',
    start: '2020',
    link: 'https://www.desoft.cu/',
    end: 'Current',
  },
  {
    id: 'peoplewalking',
    start: '2023',
    link: 'https://www.peoplewalking.com/',
    end: '2023 ',
  },
  {
    id: 'soft_system',
    start: '2023',
    link: '',
    end: '2023',
  },
  {
    id: 'iguanait',
    start: '2023',
    link: 'https://www.iguanait.com/',
    end: '2024',
  },
  {
    id: 'jaelsolution',
    start: '2024',
    link: 'https://jaelsolution.com/',
    end: '2024',
  },
  {
    id: 'idoogroup',
    start: '2024',
    link: 'https://www.idoogroup.com/',
    end: '2025',
  },
  {
    id: 'onreserva',
    start: '2025',
    link: 'https://www.onreserva.com/',
    end: 'Current',
  },
]
