"use client"

import { Search, Filter, Star, MapPin, Award, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  producer: string
  location: string
  price: number
  unit: string
  image: string
  rating: number
  reviews: number
  certificates: string[]
  available: string
  minOrder: string
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Arándanos Orgánicos Premium",
    producer: "Agrícola Los Andes SAC",
    location: "La Libertad, Perú",
    price: 4.50,
    unit: "kg",
    image: "/products/arandanos.jpg",
    rating: 4.9,
    reviews: 127,
    certificates: ["USDA Organic", "GlobalGAP", "Fair Trade"],
    available: "5,000 kg",
    minOrder: "100 kg"
  },
  {
    id: 2,
    name: "Aguacate Hass Export",
    producer: "FrutAndina Export",
    location: "Lima, Perú",
    price: 3.20,
    unit: "kg",
    image: "/products/aguacate.jpg",
    rating: 4.8,
    reviews: 89,
    certificates: ["GlobalGAP", "SENASA"],
    available: "10,000 kg",
    minOrder: "500 kg"
  },
  {
    id: 3,
    name: "Quinoa Real Premium",
    producer: "Andean Grains Co.",
    location: "Puno, Perú",
    price: 5.80,
    unit: "kg",
    image: "/products/quinoa.jpg",
    rating: 5.0,
    reviews: 56,
    certificates: ["USDA Organic", "Fair Trade", "Kosher"],
    available: "2,000 kg",
    minOrder: "50 kg"
  },
  {
    id: 4,
    name: "Café Especial Geisha",
    producer: "Café Selva Alta",
    location: "Junín, Perú",
    price: 12.50,
    unit: "kg",
    image: "/products/cafe.jpg",
    rating: 4.9,
    reviews: 203,
    certificates: ["Rainforest Alliance", "USDA Organic"],
    available: "500 kg",
    minOrder: "25 kg"
  },
  {
    id: 5,
    name: "Mango Kent Premium",
    producer: "Tropical Fruits SAC",
    location: "Piura, Perú",
    price: 2.80,
    unit: "kg",
    image: "/products/mango.jpg",
    rating: 4.7,
    reviews: 145,
    certificates: ["GlobalGAP", "SENASA"],
    available: "8,000 kg",
    minOrder: "200 kg"
  },
  {
    id: 6,
    name: "Espárragos Verdes",
    producer: "Agro Ica Export",
    location: "Ica, Perú",
    price: 4.00,
    unit: "kg",
    image: "/products/esparragos.jpg",
    rating: 4.8,
    reviews: 92,
    certificates: ["GlobalGAP", "BRC", "HACCP"],
    available: "3,500 kg",
    minOrder: "150 kg"
  }
]

const CERTIFICATE_COLORS: Record<string, string> = {
  "USDA Organic": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "GlobalGAP": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Fair Trade": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "SENASA": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Kosher": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Rainforest Alliance": "bg-green-500/20 text-green-400 border-green-500/30",
  "BRC": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "HACCP": "bg-pink-500/20 text-pink-400 border-pink-500/30"
}

export function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Marketplace de{" "}
            <span className="bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] bg-clip-text text-transparent">
              Exportación
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Productos premium directamente de productores peruanos · Certificados verificados digitalmente
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar productos, productores, certificados..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-border bg-input py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary/80">
            <Filter className="h-5 w-5" />
            Filtros
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.14_165)] hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  ✓ Verificado
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Product Name */}
                <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-[oklch(0.58_0.14_165)]">
                  {product.name}
                </h3>

                {/* Producer */}
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  {product.producer}
                </p>

                {/* Location & Rating */}
                <div className="mb-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {product.location}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                {/* Certificates */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.certificates.map((cert) => (
                    <span
                      key={cert}
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${CERTIFICATE_COLORS[cert] || "bg-secondary text-foreground"}`}
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Availability */}
                <div className="mb-4 flex justify-between text-sm text-muted-foreground">
                  <span>Disponible: <span className="font-medium text-foreground">{product.available}</span></span>
                  <span>Min: <span className="font-medium text-foreground">{product.minOrder}</span></span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-foreground">${product.price}</span>
                    <span className="text-muted-foreground">/{product.unit}</span>
                  </div>
                  <span className="rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-4 py-2 font-semibold text-white transition-opacity hover:opacity-90">
                    Ver Detalle
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
