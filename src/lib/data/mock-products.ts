import { FinancialProduct } from '../types';

export const mockProducts: FinancialProduct[] = [
  {
    id: '1',
    name: 'Cuenta Digital Premium',
    type: 'Cuenta de Ahorro',
    category: 'cuenta',
    description: 'Cuenta digital sin comisiones con tarjeta de débito internacional y beneficios exclusivos.',
    interestRate: 1.5,
    benefits: [
      'Sin comisiones de mantenimiento',
      'Tarjeta de débito internacional',
      'Reintegro de comisiones en cajeros',
      'App móvil exclusiva'
    ],
    imageUrl: '/images/products/cuenta-digital.jpg',
    monthlyFee: 0,
  },
  {
    id: '2',
    name: 'Tarjeta Oro',
    type: 'Tarjeta de Crédito',
    category: 'tarjeta',
    description: 'Tarjeta de crédito con programa de recompensas y beneficios exclusivos para viajeros frecuentes.',
    interestRate: 24.9,
    benefits: [
      'Puntos en cada compra',
      'Seguro de viaje gratuito',
      'Acceso a salas VIP en aeropuertos',
      'Descuentos en restaurantes'
    ],
    imageUrl: '/images/products/tarjeta-credito.jpg',
    annualFee: 120,
  },
  {
    id: '3',
    name: 'Fondo Diversificado Global',
    type: 'Fondo de Inversión',
    category: 'fondo',
    description: 'Fondo que invierte en una cartera diversificada de acciones internacionales para maximizar el crecimiento a largo plazo.',
    riskLevel: 'medio',
    benefits: [
      'Diversificación internacional',
      'Gestión profesional',
      'Liquidez en 48 horas',
      'Informes trimestrales detallados'
    ],
    imageUrl: '/images/products/fondo-inversion.jpg',
    minAmount: 1000,
    performance: [5.2, 6.8, 7.1, 4.3, 8.2, 6.9],
  },
  {
    id: '4',
    name: 'Seguro de Vida Total',
    type: 'Seguro',
    category: 'seguro',
    description: 'Seguro de vida completo con coberturas adicionales para enfermedades graves y accidentes.',
    benefits: [
      'Cobertura por fallecimiento',
      'Indemnización por enfermedad grave',
      'Asistencia médica internacional',
      'Protección a beneficiarios'
    ],
    imageUrl: '/images/products/seguro.jpg',
    monthlyFee: 45,
  },
  {
    id: '5',
    name: 'Hipoteca Flexible',
    type: 'Préstamo Hipotecario',
    category: 'préstamo',
    description: 'Préstamo hipotecario con posibilidad de ajustar cuotas según necesidades y realizar pagos anticipados sin penalización.',
    interestRate: 3.75,
    benefits: [
      'Plazo hasta 30 años',
      'Sin comisiones por amortización anticipada',
      'Posibilidad de carencia',
      'Cuota adaptable a tus necesidades'
    ],
    imageUrl: '/images/products/hipoteca.jpg',
    term: 'Hasta 30 años',
  },
  {
    id: '6',
    name: 'Plan de Pensiones Estable',
    type: 'Plan de Pensiones',
    category: 'inversión',
    description: 'Plan de pensiones con enfoque conservador para asegurar un retiro tranquilo con ingresos estables.',
    riskLevel: 'bajo',
    benefits: [
      'Ventajas fiscales',
      'Inversiones de bajo riesgo',
      'Asesoramiento personalizado',
      'Proyecciones de capital futuro'
    ],
    imageUrl: '/images/products/pension.jpg',
    performance: [2.1, 2.3, 2.5, 2.2, 2.4, 2.6],
  },
  {
    id: '7',
    name: 'Tarjeta Platinum',
    type: 'Tarjeta de Crédito Premium',
    category: 'tarjeta',
    description: 'Tarjeta exclusiva con beneficios premium, concierge personal y privilegios únicos en todo el mundo.',
    interestRate: 22.5,
    benefits: [
      'Concierge personal 24/7',
      'Acceso ilimitado a salas VIP',
      'Seguro multirriesgo premium',
      'Eventos exclusivos solo para miembros'
    ],
    imageUrl: '/images/products/tarjeta-credito.jpg',
    annualFee: 350,
  },
  {
    id: '8',
    name: 'Fondo Tecnológico',
    type: 'Fondo de Inversión Sectorial',
    category: 'fondo',
    description: 'Fondo especializado en empresas tecnológicas con alto potencial de crecimiento.',
    riskLevel: 'alto',
    benefits: [
      'Exposición al sector tech',
      'Potencial de alto rendimiento',
      'Gestión activa especializada',
      'Rebalanceo automático'
    ],
    imageUrl: '/images/products/fondo-inversion.jpg',
    minAmount: 2500,
    performance: [12.3, 15.7, -8.2, 24.5, 18.9, 10.3],
  },
  {
    id: '9',
    name: 'Préstamo Personal Express',
    type: 'Préstamo Personal',
    category: 'préstamo',
    description: 'Préstamo personal con aprobación rápida en 24 horas y mínimos requisitos.',
    interestRate: 7.95,
    benefits: [
      'Aprobación en 24 horas',
      'Sin comisiones de apertura',
      'Plazo flexible de 1 a 5 años',
      'Sin aval necesario'
    ],
    imageUrl: '/images/products/prestamo-personal.jpg',
    term: '1-5 años',
  },
  {
    id: '10',
    name: 'Seguro Hogar Integral',
    type: 'Seguro',
    category: 'seguro',
    description: 'Seguro completo para tu hogar con coberturas ampliadas y asistencia 24 horas.',
    benefits: [
      'Cobertura contra robo e incendio',
      'Responsabilidad civil',
      'Asistencia en el hogar 24/7',
      'Indemnización por inhabitabilidad'
    ],
    imageUrl: '/images/products/seguro-hogar.jpg',
    monthlyFee: 28,
  },
  {
    id: '11',
    name: 'Cuenta Joven',
    type: 'Cuenta de Ahorro',
    category: 'cuenta',
    description: 'Cuenta especial para menores de 30 años, sin comisiones y con ventajas exclusivas para jóvenes.',
    interestRate: 1.8,
    benefits: [
      'Sin comisiones hasta 30 años',
      'Tarjeta personalizable',
      'Descuentos en ocio y cultura',
      'Reintegro en compras online'
    ],
    imageUrl: '/images/products/cuenta-digital.jpg',
    monthlyFee: 0,
  },
  {
    id: '12',
    name: 'Plan Inversión Sostenible',
    type: 'Fondo de Inversión ESG',
    category: 'inversión',
    description: 'Fondo que invierte exclusivamente en empresas sostenibles con criterios ESG rigurosos.',
    riskLevel: 'medio',
    benefits: [
      'Inversión de impacto positivo',
      'Empresas sostenibles',
      'Informe de impacto anual',
      'Diversificación internacional'
    ],
    imageUrl: '/images/products/inversion-sostenible.jpg',
    minAmount: 500,
    performance: [4.8, 5.3, 6.2, 5.7, 6.5, 7.1],
  }
]; 