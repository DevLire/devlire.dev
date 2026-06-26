import type { BaseSectionProps } from '@/types';
import { ObjetiveCard, type Objective } from '../../components/ObjetiveCard';
import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import {
  Cog,
  FileWarning,
  GitFork,
  ShieldAlert,
  Smartphone,
} from 'lucide-react';

const SYSTEM_OBJECTIVES: Objective[] = [
  {
    title: 'Control de acceso',
    description:
      'Garantizar que únicamente personal autorizado pudiera acceder al almacén, validando tanto la identidad del usuario como el dispositivo utilizado',
    icon: ShieldAlert,
  },
  {
    title: 'Gestión manual de dispositivos',
    description:
      'Los dispositivos utilizados por los empleados debían poder registrarse, autorizarse o revocarse desde una plataforma centralizada para mantener el control sobre los accesos.',
    icon: Smartphone,
  },

  {
    title: 'Auditoría de accesos',
    description:
      'Cada intento de acceso debía quedar registrado, permitiendo conocer quién accedió, cuándo lo hizo y qué método de autenticación utilizó.',
    icon: FileWarning,
  },
  {
    title: 'Control de permisos',
    description:
      'Los distintos perfiles de trabajadores requerían niveles de acceso diferentes, por lo que era necesario centralizar la gestión de roles y permisos desde un panel administrativo.',
    icon: GitFork,
  },
];

export const ObjectivesTechLogistics = ({ id }: BaseSectionProps) => {
  return (
    <SectionLayout id={id}>
      <SectionTitle icon={Cog} text="Necesidades operativas" />

      {/* Problemas */}
      <div className="container mx-auto px-4 lg:px-12">
        <h3 className="font-red-hat-display text-xl">
          Garantizar que únicamente personal autorizado pueda acceder al
          almacén, manteniendo trazabilidad completa de cada acceso y reduciendo
          riesgos de seguridad.
        </h3>

        {/* Bento Grid */}
        <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:mt-8 lg:gap-2">
          {SYSTEM_OBJECTIVES.map((objetive) => (
            <ObjetiveCard key={objetive.title} objetive={objetive} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
