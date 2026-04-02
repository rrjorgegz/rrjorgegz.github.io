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
  TITLE: 'Rafael Rubén - Senior ERP Developer',
  DESCRIPTION:
    'Rafael Rubén Jorge González - Computer Science Engineer | Senior ERP Developer — Odoo & Frappe/ERPNext',
  AUTHOR: 'Rafael Rubén Jorge González',
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
    id: 'onreserva',
    start: 'Sept 2025',
    link: 'https://www.onreserva.com/',
    end: 'Mar 2026',
  },
  {
    id: 'idoogroup',
    start: 'Dec 2024',
    link: 'https://www.idoogroup.com/',
    end: 'Aug 2025',
  },
  {
    id: 'jaelsolution',
    start: 'Sept 2024',
    link: 'https://jaelsolution.com/',
    end: 'Nov 2024',
  },
  {
    id: 'soft_system',
    start: 'Jun 2024',
    link: '',
    end: 'Jul 2024',
  },
  {
    id: 'iguanait',
    start: 'Aug 2023',
    link: 'https://www.iguanait.com/',
    end: 'May 2024',
  },
  {
    id: 'peoplewalking',
    start: 'Jan 2023',
    link: 'https://www.peoplewalking.com/',
    end: 'Jun 2023',
  },
  {
    id: 'desoft',
    start: 'Nov 2020',
    link: 'https://www.desoft.cu/',
    end: 'Dec 2022',
  },
]
