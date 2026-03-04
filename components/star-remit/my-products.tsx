"use client"

import { useState } from "react"
import { Edit, Pause, Play, Trash2, Plus, Package, TrendingUp, AlertCircle } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  unit: string
  image: string
  stock: string
  minOrder: string
  status: "active" | "paused" | "out-of-stock"
  sales: number
  revenue: number
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Arándanos Orgánicos Premium",
    price: 4.50,
    unit: "kg",
    image: "/products/arandanos.jpg",
    stock: "5,000 kg",
    minOrder: "100 kg",
    status: "active",
    sales: 247,
    revenue: 18450
  },
  {
    id: 2,
    name: "Aguacate Hass Export",
    price: 3.20,
    unit: "kg",
    image: "/products/aguacate.jpg",
    stock: "10,000 kg",
    minOrder: "500 kg",
    status: "active",
    sales: 189,
    revenue: 12280
  },
  {
    id: 3,
    name: "Quinoa Real Premium",
    price: 5.80,
    unit: "kg",
    image: "/products/quinoa.jpg",
    stock: "2,000 kg",
    minOrder: "50 kg",
    status: "active",
    sales: 134,
    revenue: 8950
  },
  {
    id: 4,
    name: "Café Especial Geisha",
    price: 12.50,
    unit: "kg",
    image: "/products/cafe.jpg",
    stock: "800 kg",
    minOrder: "20 kg",
    status: "active",
    sales: 98,
    revenue: 15200
  },
  {
    id: 5,
    name: "Mango Kent Premium",
    price: 2.80,
    unit: "kg",
    image: "/products/mango.jpg",
    stock: "15,000 kg",
    minOrder: "1,000 kg",
    status: "paused",
    sales: 156,
    revenue: 9840
  },
  {
    id: 6,
    name: "Espárragos Verdes",
    price: 4.00,
    unit: "kg",
    image: "/products/esparragos.jpg",
    stock: "0 kg",
    minOrder: "200 kg",
    status: "out-of-stock",
    sales: 201,
    revenue: 11250
  }
]

export function MyProducts() {
  const [products] = useState<Product[]>(MOCK_PRODUCTS)
  const [editingProduct, setEditingProduct] = useState<number | null>(null)

  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "active":
        return <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
          <Play className="h-3 w-3" />
          Activo
        </span>
      case "paused":
        return <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">
          <Pause className="h-3 w-3" />
          Pausado
        </span>
      case "out-of-stock":
        return <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
          <AlertCircle className="h-3 w-3" />
          Sin Stock
        </span>
    }
  }

  const activeProducts = products.filter(p => p.status === "active").length
  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0)
  const totalSales = products.reduce((sum, p) => sum + p.sales, 0)

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              Mis Productos
            </h1>
            <p className="text-muted-foreground">
              Gestiona tu catálogo de exportación
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90">
            <Plus className="h-5 w-5" />
            Nuevo Producto
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Productos Activos</span>
              <Package className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
            </div>
            <p className="text-3xl font-bold text-foreground">{activeProducts}</p>
            <p className="mt-1 text-xs text-muted-foreground">de {products.length} totales</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ventas Totales</span>
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">{totalSales}</p>
            <p className="mt-1 text-xs text-muted-foreground">pedidos completados</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ingresos Totales</span>
              <TrendingUp className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">${totalRevenue.toLocaleString('en-US')}</p>
            <p className="mt-1 text-xs text-muted-foreground">todos los tiempos</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.14_165)]/50"
            >
              <div className="flex gap-6 p-6">
                {/* Image */}
                <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {getStatusBadge(product.status)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-bold text-[oklch(0.58_0.14_165)]">
                        ${product.price} <span className="text-sm text-muted-foreground">/ {product.unit}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Stock disponible</p>
                      <p className="font-semibold text-foreground">{product.stock}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Pedido mínimo</p>
                      <p className="font-semibold text-foreground">{product.minOrder}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ventas</p>
                      <p className="font-semibold text-foreground">{product.sales} pedidos</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ingresos</p>
                      <p className="font-semibold text-emerald-400">${product.revenue.toLocaleString('en-US')}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingProduct(product.id)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
                    >
                      <Edit className="h-4 w-4" />
                      Editar
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80">
                      {product.status === "active" ? (
                        <>
                          <Pause className="h-4 w-4" />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Activar
                        </>
                      )}
                    </button>
                    <button className="flex items-center justify-center rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
