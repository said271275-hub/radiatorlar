export const categories = [
  { slug: 'radiators', title: 'Radiatorlar', image: '/images/cat-radiators.jpg' },
  { slug: 'bimetal', title: 'Bimetall radiatorlar', image: '/images/cat-bimetal.jpg' },
  { slug: 'aluminium', title: 'Alyuminiy radiatorlar', image: '/images/cat-aluminium.jpg' },
  { slug: 'tubular', title: 'Trubkali radiatorlar', image: '/images/cat-tubular.jpg' },
  { slug: 'panel', title: 'Panelli radiatorlar', image: '/images/cat-panel.jpg' },
  { slug: 'towel', title: 'Sochiq quritgichlar', image: '/images/cat-towel.jpg' },
  { slug: 'floor', title: 'Issiq pollar', image: '/images/cat-floor.jpg' },
  { slug: 'convectors', title: 'Konvektorlar', image: '/images/cat-convectors.jpg' },
]

export const brands = ['Zehnder', 'Rommer', 'Zenden', 'Askon', 'Kermi']

const base = [
  { name: 'Rommer Profi 500', category: 'tubular', brand: 'Rommer', price: 2099000, old: 3099000, material: "po'lat", area: '50 m² gacha', pressure: '10 bar' },
  { name: 'Zehnder Charleston 2050', category: 'aluminium', brand: 'Zehnder', price: 1849000, old: 2499000, material: 'alyuminiy', area: '40 m² gacha', pressure: '16 bar' },
  { name: 'Zenden 500 Bimetal', category: 'bimetal', brand: 'Zenden', price: 1499000, old: 1999000, material: 'bimetall', area: '30 m² gacha', pressure: '25 bar' },
  { name: 'Kermi Profil-K 22', category: 'panel', brand: 'Kermi', price: 1299000, old: 1599000, material: "po'lat", area: '25 m² gacha', pressure: '10 bar' },
  { name: 'Askon Therm Plus', category: 'convectors', brand: 'Askon', price: 999000, old: 1399000, material: "po'lat", area: '20 m² gacha', pressure: '10 bar' },
  { name: 'Rommer Towel Pro', category: 'towel', brand: 'Rommer', price: 749000, old: 999000, material: "zanglamas po'lat", area: '8 m² gacha', pressure: '8 bar' },
  { name: 'Zehnder Zenith 1800', category: 'tubular', brand: 'Zehnder', price: 3299000, old: 4199000, material: "po'lat", area: '60 m² gacha', pressure: '10 bar' },
  { name: 'Zenden Floor Mat 150', category: 'floor', brand: 'Zenden', price: 599000, old: 749000, material: 'kabel', area: '5 m² gacha', pressure: '—' },
  { name: 'Kermi Therm-X2 Design', category: 'radiators', brand: 'Kermi', price: 2799000, old: 3599000, material: 'alyuminiy', area: '45 m² gacha', pressure: '12 bar' },
]

export const products = base.map((p, i) => ({
  id: String(i + 1),
  code: String(98456734 + i),
  discount: 12,
  application: 'uy uchun',
  heatOutput: '20.1 m²',
  image: `/images/product-${(i % 6) + 1}.jpg`,
  ...p,
}))

export const kits = [1, 2, 3, 4].map((n) => ({
  id: 'kit-' + n,
  name: "Radiatorni ulash to'plami",
  price: 198000,
  image: '/images/kit.jpg',
}))

export const specs = [
  ['Balandligi, mm', '200 mm'],
  ['Kengligi', 'devorga o‘rnatiladigan'],
  ['Chuqurligi', 'ixcham o‘lcham'],
  ['O‘qlararo masofa', '500 mm'],
  ['Ulanish turi', 'yon / pastki ulanish'],
  ['Isitish maydoni', '50 m² gacha'],
  ['Konstruktsiya turi', "po'lat"],
  ['Issiqlik tashuvchi', 'suv yoki antifriz'],
  ['Maksimal bosim', '10 bar gacha'],
  ['Maksimal harorat', '95°C'],
  ['Material', "po'lat"],
  ['Kafolat', '10 yil'],
  ['Ishlab chiqaruvchi davlat', 'Rossiya / Germaniya'],
  ['Brend', 'Zenden'],
]

export const formatPrice = (n) => n.toLocaleString('uz-UZ') + " so'm"
