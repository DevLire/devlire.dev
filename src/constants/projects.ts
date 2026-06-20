import {
  axiosSkill,
  nodeJsSkill,
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

export const projects: Project[] = [
  {
    title: 'Migración de Arquitectura & Optimización de Estado',
    description:
      'Me encargué de eliminar una deuda técnica, la cual consistia en el uso de fetch de JavaScript, escribiendo la url base de forma cruda en cada petición que se hacía, siendo tedioso de cambiar cada que se cambiada de entorno. Por ello, realicé la refactorización de más de 400 peticiones usando Axios y Zustand y variables de entorno para mejorar el rendimiento y la consistencia de datos',
    skills: [reactSkill, typescriptSkill, axiosSkill, zustandSkill],
    src: '/svgs/refactor.svg',
    hasNDA: true,
  },
  {
    title:
      'TechLogistics: Ecosistema Empresarial de Control Logístico y Seguridad Biométrica',
    description:
      'Ecosistema integral desarrollado en un Monorepo con pnpm workspaces. Desarrollé una API RESTful en Node.js (TypeScript) con Prisma ORM y transacciones atómicas; un panel web administrativo en React con gráficos interactivos; y una aplicación móvil nativa con Expo que implementa Hardware Binding criptográfico y biometría local para la auditoría de accesos y la gestión de inventario en tiempo real.',
    skills: [
      reactSkill,
      reactNativeSkill,
      typescriptSkill,
      nodeJsSkill,
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
  },
  {
    title: 'Prototipo Funcional de Geolocalización',
    description:
      'Desarrollé un aplicativo móvil con React Native para el control de asistencia. Implementé la API nativa de localización y un gestor que se aseguraba de que la app cuente en todo momento con el permiso de localización para su funcionamiento. El proyecto se consolidó como un MVP funcional de UI/UX debido a limitaciones en la integración del core backend.',
    skills: [reactSkill, typescriptSkill, zustandSkill],
    src: '/svgs/asistencia.svg',
    hasNDA: true,
  },
];
