import {
  axiosSkill,
  nodeJsSkill,
  postgreSQLSkill,
  prismaSkill,
  reactNativeSkill,
  reactSkill,
  tailwindCssSkill,
  tanstackQuerySkill,
  typescriptSkill,
  zustandSkill,
  type Skill,
} from './skills';

export interface Project {
  title: string;
  description: string;
  src: string;
  skills: Skill[];
  hasNDA: boolean;
  links?: {
    github?: string;
    demo?: string;
    projectPage?: string;
    credentials?: {
      user: string;
      pass: string;
    };
  };
}

export const architectureMigrationProject: Project = {
  title: 'Migración de Arquitectura & Optimización de Estado',
  description:
    'Eliminé la deuda técnica de un sistema migrando más de 400 peticiones crudas de JavaScript Fetch hacia una arquitectura centralizada con Axios, Zustand y variables de entorno. Con esto mejoré drásticamente la consistencia de los datos, el rendimiento de la aplicación y facilitó la gestión de múltiples entornos de desarrollo.',
  skills: [reactSkill, typescriptSkill, axiosSkill, zustandSkill],
  src: '/svgs/refactor.svg',
  hasNDA: true,
};

export const techLogisticsProject: Project = {
  title:
    'TechLogistics: Ecosistema Empresarial de Control Logístico y Seguridad Biométrica',
  description:
    'Diseñé y construí un ecosistema empresarial completo. Programé una API RESTful con Node.js y transacciones atómicas en Prisma, un panel administrativo web en React con analíticas dinámicas, y un aplicativo móvil en Expo con biometría y bloqueo por hardware binding criptográfico.',
  skills: [
    reactSkill,
    reactNativeSkill,
    typescriptSkill,
    nodeJsSkill,
    postgreSQLSkill,
    prismaSkill,
    tanstackQuerySkill,
    axiosSkill,
    zustandSkill,
    tailwindCssSkill,
  ],
  src: '/svgs/techlogistics.svg',
  hasNDA: false,
  links: {
    github: 'https://github.com/devLire/TechLogistics',
    demo: 'https://techlogistics.devlire.dev',
    projectPage: '/projects/techlogistics',
    credentials: {
      user: 'administrador@techlogistics.com',
      pass: '123456',
    },
  },
};

export const geolocationPrototypeProject: Project = {
  title: 'Prototipo Funcional de Geolocalización',
  description:
    'Desarrollé el MVP móvil de una aplicación de control de asistencia utilizando React Native CLI. Implementé la integración nativa con la API de localización del dispositivo y diseñé un sistema de validación estricta de permisos en tiempo real. El software se consolidó como un prototipo funcional de UI/UX.',
  skills: [reactSkill, typescriptSkill, zustandSkill],
  src: '/svgs/asistencia.svg',
  hasNDA: true,
};

export const projects: Project[] = [
  architectureMigrationProject,
  techLogisticsProject,
  geolocationPrototypeProject,
];
