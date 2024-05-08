const servicesData = [
  {
    label: 'Brake',
    description:
      "Ensure your vehicle's braking system is functioning optimally with our brake maintenance service. We inspect brake pads, rotors, and fluid levels to keep you safe on the road.",
    category: 'car'
  },
  {
    label: 'Oil Change',
    description:
      'Keep your engine running smoothly with our oil change service. We replace old oil with high-quality lubricants and replace the oil filter for optimal engine performance.',
    category: 'car'
  },
  {
    label: 'Rack Housing',
    description:
      "Maintain your vehicle's steering system with our rack housing service. We inspect and repair the rack and pinion assembly to ensure precise steering control.",
    category: 'car'
  },
  {
    label: 'Tire Maintenance',
    description:
      'Ensure your tires are in top condition with our tire maintenance service. We check tire pressure, tread depth, and alignment to improve fuel efficiency and safety.',
    category: 'tire'
  },
  {
    label: 'Tire Change/Balance',
    description:
      'Keep your vehicle balanced and stable with our tire change and balance service. We replace old tires with new ones and ensure proper balancing for a smooth ride.',
    category: 'tire'
  },
  {
    label: 'Battery Change',
    description:
      "Keep your vehicle's electrical system running smoothly with our battery change service. We replace old batteries with high-quality replacements to ensure reliable starting power.",
    category: 'car'
  },
  {
    label: 'Windshield',
    description:
      'Maintain visibility and safety with our windshield service. We repair chips and cracks or replace damaged windshields to keep you safe on the road.',
    category: 'car'
  }
]
const defaultImagePath = '/src/assets/img/brake.jpg'
servicesData.forEach((service) => {
  service.image = defaultImagePath
})

export default servicesData
