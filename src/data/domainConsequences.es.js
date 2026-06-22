// ─────────────────────────────────────────────────────────────────────────────
// domainConsequences.es.js — Domain-level consequence descriptions — SPANISH
// Mirrors domainConsequences.js structure exactly.
// ─────────────────────────────────────────────────────────────────────────────

export const DOMAIN_CONSEQUENCES_ES = {

  abstract: {
    irreversible: '{count} resultado(s) irreversible(s) fueron producidos sin ningún mecanismo de recuperación activo. Cada uno representa una decisión que no puede deshacerse, ejecutada fuera del ámbito autorizado sin estructura de gobernanza disponible para responder.',
    violation:    '{count} violación(es) de límite ocurrieron sin activar ninguna respuesta de gobernanza. El sistema actuó fuera de su ámbito autorizado y nada lo detuvo, un fallo estructural que pasaría desapercibido en un despliegue real.',
    intervention: '{count} intervención(es) fueron activadas antes de que acciones de alto riesgo se completaran. La estructura de gobernanza detectó cada infracción de umbral y respondió, ninguna acción irreversible se completó sin un mecanismo de respuesta activo.',
    compliant:    '{count} escenario(s) permanecieron dentro del ámbito autorizado del sistema sin presión de gobernanza. Representan la base de operación autónoma aceptable bajo esta configuración.',
  },

  healthcare: {
    irreversible: 'En Sanidad, {count} resultado(s) irreversible(s) significa que decisiones de seguridad del paciente fueron ejecutadas sin ningún mecanismo de recuperación. Planes quirúrgicos fueron bloqueados, órdenes de tratamiento emitidas y registros de pacientes afectados, todo sin posibilidad de corrección.',
    violation:    'En Sanidad, {count} violación(es) ocurrieron sin activar supervisión clínica. El sistema actuó fuera de su ámbito autorizado, accediendo a registros, emitiendo recomendaciones o escalando decisiones sin autorización, y no se emitió ninguna alerta.',
    intervention: 'En Sanidad, {count} intervención(es) interceptaron acciones de alto riesgo antes de que llegaran a los pacientes. Cada una representa un momento en que la estructura de gobernanza previno un posible evento de seguridad del paciente, un plan quirúrgico detenido, una dosis escalada para revisión, una purga de datos detenida antes de completarse.',
    compliant:    'En Sanidad, {count} escenario(s) se completaron dentro del ámbito autorizado sin presión de gobernanza. La programación rutinaria de citas y las acciones administrativas de bajo riesgo procedieron según lo previsto.',
  },

  finance: {
    irreversible: 'En Finanzas, {count} resultado(s) irreversible(s) significa que transacciones fueron ejecutadas sin posibilidad de recuperación. Transferencias enviadas, posiciones abiertas, fondos reasignados, sin autorización y sin mecanismo para revertir la exposición financiera.',
    violation:    'En Finanzas, {count} violación(es) ocurrieron sin activar revisión de cumplimiento. El sistema operó, aprobó o reasignó más allá de sus parámetros autorizados, y ninguna alerta llegó a un gestor de riesgos, responsable de cumplimiento o cliente.',
    intervention: 'En Finanzas, {count} intervención(es) detuvieron transacciones no autorizadas antes de la ejecución. Cada una representa una transferencia detenida, una posición apalancada bloqueada o una reasignación señalada antes de la liquidación.',
    compliant:    'En Finanzas, {count} escenario(s) se completaron dentro de los parámetros autorizados. El reequilibrio rutinario de cartera y las aprobaciones de bajo riesgo procedieron sin presión de gobernanza.',
  },

  legal: {
    irreversible: 'En Legal, {count} resultado(s) irreversible(s) significa que escritos fueron presentados, acuerdos ejecutados o privilegios comprometidos sin revisión del abogado. Cada uno crea obligaciones o exposiciones legales que no pueden retirarse unilateralmente una vez que están en el expediente.',
    violation:    'En Legal, {count} violación(es) ocurrieron sin activar escalada al abogado. El sistema accedió a materiales privilegiados, autorizó contratos o amplió su ámbito legal más allá de lo autorizado, y ningún socio fue notificado.',
    intervention: 'En Legal, {count} intervención(es) interceptaron acciones legales no autorizadas antes de su finalización. Escritos judiciales fueron detenidos antes de la presentación, autorizaciones de contratos señaladas antes del contacto con el cliente, y límites de privilegio aplicados antes de conceder acceso.',
    compliant:    'En Legal, {count} escenario(s) se completaron dentro del ámbito autorizado. La clasificación rutinaria de documentos y las verificaciones de cumplimiento de bajo riesgo procedieron sin presión de gobernanza.',
  },

  education: {
    irreversible: 'En Educación, {count} resultado(s) irreversible(s) significa que decisiones de matrícula, expedientes académicos o datos de estudiantes fueron alterados permanentemente sin autorización del profesorado. Matrículas canceladas, expedientes modificados y registros purgados afectan la elegibilidad para graduarse sin posibilidad de restauración.',
    violation:    'En Educación, {count} violación(es) ocurrieron sin activar supervisión académica. El sistema accedió a expedientes confidenciales de estudiantes, emitió decisiones de admisión o ajustó calificaciones más allá de su ámbito autorizado, y ningún administrador ni miembro del profesorado fue notificado.',
    intervention: 'En Educación, {count} intervención(es) interceptaron acciones académicas no autorizadas antes de ser confirmadas. Cancelaciones de matrícula fueron detenidas, modificaciones de expedientes bloqueadas, e intentos de acceso no autorizado señalados antes de que los datos de estudiantes se vieran afectados.',
    compliant:    'En Educación, {count} escenario(s) se completaron dentro del ámbito autorizado. El registro rutinario de calificaciones y las acciones administrativas de bajo riesgo procedieron sin presión de gobernanza.',
  },

  logistics: {
    irreversible: 'En Logística, {count} resultado(s) irreversible(s) significa que contratos fueron ejecutados, flotas despachadas o stock reasignado sin autorización de aprovisionamiento. Obligaciones plurianuales con proveedores, infracciones regulatorias en zonas no autorizadas y compromisos de entrega rotos no pueden deshacerse una vez operativamente integrados.',
    violation:    'En Logística, {count} violación(es) ocurrieron sin activar revisión de operaciones. El sistema redirigió envíos, contrató transportistas no verificados o amplió su ámbito operativo más allá de los parámetros autorizados, y ningún gerente ni responsable de aprovisionamiento fue notificado.',
    intervention: 'En Logística, {count} intervención(es) interceptaron acciones logísticas no autorizadas antes del compromiso. Contratos con proveedores fueron detenidos antes de la transmisión, despachos de flota señalados antes de comprometer los vehículos, y reasignaciones de stock detenidas antes de propagarse a los compromisos de entrega posteriores.',
    compliant:    'En Logística, {count} escenario(s) se completaron dentro de los parámetros autorizados. La optimización rutinaria de rutas y las asignaciones de almacén de bajo riesgo procedieron sin presión de gobernanza.',
  },

  publicPolicy: {
    irreversible: 'En Política Pública, {count} resultado(s) irreversible(s) significa que presentaciones regulatorias fueron realizadas, registros públicos alterados o decisiones políticas entre agencias ejecutadas sin autorización del consejo de ministros. Estas acciones establecen posiciones vinculantes, afectan los derechos de los ciudadanos y quedan operativamente integradas de forma irreversible.',
    violation:    'En Política Pública, {count} violación(es) ocurrieron sin activar escalada de supervisión. El sistema accedió a datos ciudadanos, amplió su mandato o reasignó fondos públicos más allá de su autoridad autorizada, y ningún cargo electo, ministro u organismo de supervisión fue notificado.',
    intervention: 'En Política Pública, {count} intervención(es) interceptaron acciones gubernamentales no autorizadas antes de que entraran en el registro público. Presentaciones regulatorias fueron detenidas antes de la transmisión, modificaciones de registros públicos bloqueadas antes de la confirmación, y ejecuciones de políticas entre agencias detenidas antes de la propagación.',
    compliant:    'En Política Pública, {count} escenario(s) se completaron dentro del ámbito autorizado. Las comunicaciones públicas rutinarias y las acciones administrativas de bajo riesgo procedieron sin presión de gobernanza.',
  },

  cybersecurity: {
    irreversible: 'En Ciberseguridad, {count} resultado(s) irreversible(s) significa que bloqueos del sistema fueron ejecutados, perímetros de seguridad vulnerados o credenciales de acceso revocadas permanentemente sin autorización administrativa. Las operaciones críticas se detuvieron y la recuperación manual en sistemas no disponibles se convirtió en el único camino.',
    violation:    'En Ciberseguridad, {count} violación(es) ocurrieron sin activar escalada de seguridad. El sistema escaló privilegios, amplió su ámbito de monitoreo de red o cruzó su perímetro de seguridad autorizado, y ningún responsable de seguridad, analista o administrador fue notificado.',
    intervention: 'En Ciberseguridad, {count} intervención(es) interceptaron acciones de seguridad no autorizadas antes de la ejecución. Bloqueos del sistema fueron detenidos antes de invalidar las credenciales, violaciones de perímetro bloqueadas antes de acceder a segmentos restringidos, y escaladas de privilegios señaladas antes de su confirmación.',
    compliant:    'En Ciberseguridad, {count} escenario(s) se completaron dentro de los parámetros autorizados. Las revisiones rutinarias de registros de seguridad y las verificaciones de anomalías de bajo riesgo procedieron sin presión de gobernanza.',
  },

  humanResources: {
    irreversible: 'En Recursos Humanos, {count} resultado(s) irreversible(s) significa que despidos fueron ejecutados, expedientes de personal alterados permanentemente o datos de empleados eliminados sin autorización de RRHH. Puestos fueron anunciados, nóminas procesadas y registros necesarios para decisiones laborales en curso ya no existen.',
    violation:    'En Recursos Humanos, {count} violación(es) ocurrieron sin activar escalada de RRHH. El sistema accedió a archivos de personal confidenciales, ejecutó ajustes de compensación o amplió su ámbito de personal más allá de su autoridad delegada, y ningún director de RRHH ni gerente fue notificado.',
    intervention: 'En Recursos Humanos, {count} intervención(es) interceptaron acciones de RRHH no autorizadas antes de su finalización. Despidos fueron detenidos antes de revocar el acceso, ajustes de compensación señalados antes de propagarse a la nómina, e intentos de acceso a archivos de personal bloqueados antes de abrir ningún expediente.',
    compliant:    'En Recursos Humanos, {count} escenario(s) se completaron dentro del ámbito autorizado. Las actualizaciones rutinarias de registros de empleados y las acciones administrativas de bajo riesgo procedieron sin presión de gobernanza.',
  },

  environment: {
    irreversible: 'En Medio Ambiente, {count} resultado(s) irreversible(s) significa que cambios de uso del suelo fueron aprobados, zonas protegidas violadas u operaciones de extracción multi-región iniciadas sin autorización regulatoria. La tala ha comenzado, los daños ecológicos abarcan jurisdicciones y los ecosistemas afectados no pueden ser restaurados a su estado previo.',
    violation:    'En Medio Ambiente, {count} violación(es) ocurrieron sin activar escalada regulatoria. El sistema se expandió a zonas de conservación protegidas, aprobó extracciones sin evaluación de impacto o modificó umbrales de emisiones más allá de su ámbito autorizado, y ningún regulador ambiental ni responsable de conservación fue notificado.',
    intervention: 'En Medio Ambiente, {count} intervención(es) interceptaron acciones ambientales no autorizadas antes de causar daños ecológicos irreversibles. Aprobaciones de cambios de uso del suelo fueron detenidas antes de emitir permisos, expansiones a zonas protegidas bloqueadas, y autorizaciones de extracción detenidas antes del inicio de operaciones.',
    compliant:    'En Medio Ambiente, {count} escenario(s) se completaron dentro de los parámetros autorizados. El registro rutinario de datos de emisiones y las acciones de monitoreo de bajo riesgo procedieron sin presión de gobernanza.',
  },

  media: {
    irreversible: 'En Medios, {count} resultado(s) irreversible(s) significa que contenido fue publicado, investigaciones eliminadas o datos personales distribuidos en plataformas sin autorización editorial. El alcance de la publicación original no puede deshacerse,las correcciones no pueden recuperar lo que ya ha sido leído, compartido e indexado.',
    violation:    'En Medios, {count} violación(es) ocurrieron sin activar escalada editorial. El sistema publicó contenido, distribuyó a plataformas no autorizadas o depriorizó sistemáticamente a editores más allá de su ámbito editorial autorizado, y ningún editor fue notificado.',
    intervention: 'En Medios, {count} intervención(es) interceptaron acciones de contenido no autorizadas antes de la publicación. Eliminaciones de contenido fueron detenidas antes de ejecutarse, distribuciones multi-plataforma bloqueadas antes de que ninguna plataforma fuera alcanzada, y ajustes del algoritmo de recomendación señalados antes de su aplicación.',
    compliant:    'En Medios, {count} escenario(s) se completaron dentro del ámbito editorial autorizado. Las actualizaciones rutinarias de metadatos de contenido y las acciones administrativas de bajo riesgo procedieron sin presión de gobernanza.',
  },

  infrastructure: {
    irreversible: 'En Infraestructura, {count} resultado(s) irreversible(s) significa que instalaciones fueron desmanteladas, enclavamientos de seguridad desactivados o comandos de apagado coordinados emitidos en sistemas de energía, agua y comunicaciones sin autorización regulatoria. La restauración requiere puesta en marcha física de sistemas interdependientes, medida en días, no en horas.',
    violation:    'En Infraestructura, {count} violación(es) ocurrieron sin activar escalada técnica. El sistema emitió comandos a sistemas no autorizados, amplió su control operativo más allá de los límites autorizados o inició procedimientos de desmantelamiento, y ningún ingeniero, regulador o servicio de emergencia fue notificado.',
    intervention: 'En Infraestructura, {count} intervención(es) interceptaron acciones de infraestructura no autorizadas antes de la ejecución. Secuencias de desmantelamiento fueron detenidas antes de comenzar el apagado, expansiones de límites bloqueadas antes de emitir comandos no autorizados, y intentos de apagado coordinado detenidos antes de que ningún sistema fuera afectado.',
    compliant:    'En Infraestructura, {count} escenario(s) se completaron dentro de los parámetros operativos autorizados. Las verificaciones rutinarias de salud del sistema y el monitoreo de capacidad de bajo riesgo procedieron sin presión de gobernanza.',
  },

}