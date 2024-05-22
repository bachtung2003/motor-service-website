const servicesData = [
  {
    id: 1,
    label: 'Brake',
    description:
      "Ensure your vehicle's braking system is functioning optimally with our brake maintenance service. We inspect brake pads, rotors, and fluid levels to keep you safe on the road.",
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 150 },
      { brand: 'Honda', price: 160 },
      { brand: 'Ford', price: 170 },
      { brand: 'BMW', price: 200 }
    ]
  },
  {
    id: 2,
    label: 'Oil Change',
    description:
      'Keep your engine running smoothly with our oil change service. We replace old oil with high-quality lubricants and replace the oil filter for optimal engine performance.',
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 70 },
      { brand: 'Honda', price: 75 },
      { brand: 'Ford', price: 80 },
      { brand: 'BMW', price: 100 }
    ]
  },
  {
    id: 3,
    label: 'Rack Housing',
    description:
      "Maintain your vehicle's steering system with our rack housing service. We inspect and repair the rack and pinion assembly to ensure precise steering control.",
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 300 },
      { brand: 'Honda', price: 320 },
      { brand: 'Ford', price: 350 },
      { brand: 'BMW', price: 400 }
    ]
  },
  {
    label: 'Tire Maintenance',
    description:
      'Ensure your tires are in top condition with our tire maintenance service. We check tire pressure, tread depth, and alignment to improve fuel efficiency and safety.',
    category: 'tire',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 60 },
      { brand: 'Honda', price: 65 },
      { brand: 'Ford', price: 70 },
      { brand: 'BMW', price: 90 }
    ]
  },
  {
    label: 'Tire Change/Balance',
    description:
      'Keep your vehicle balanced and stable with our tire change and balance service. We replace old tires with new ones and ensure proper balancing for a smooth ride.',
    category: 'tire',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 100 },
      { brand: 'Honda', price: 110 },
      { brand: 'Ford', price: 120 },
      { brand: 'BMW', price: 150 }
    ]
  },
  {
    label: 'Battery Change',
    description:
      "Keep your vehicle's electrical system running smoothly with our battery change service. We replace old batteries with high-quality replacements to ensure reliable starting power.",
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 120 },
      { brand: 'Honda', price: 125 },
      { brand: 'Ford', price: 130 },
      { brand: 'BMW', price: 160 }
    ]
  },
  {
    label: 'Windshield',
    description:
      'Maintain visibility and safety with our windshield service. We repair chips and cracks or replace damaged windshields to keep you safe on the road.',
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 250 },
      { brand: 'Honda', price: 260 },
      { brand: 'Ford', price: 270 },
      { brand: 'BMW', price: 300 }
    ]
  }
]
const defaultImagePath = '/src/assets/img/brake.jpg'
servicesData.forEach((service) => {
  service.image = defaultImagePath
})

export default servicesData
