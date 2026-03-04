"use client"

import { Menu, X, Sprout, Users, LogOut } from "lucide-react"
import { useState } from "react"
import { useWallet } from "@/contexts/wallet-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { role, setRole } = useWallet()
  const router = useRouter()

  const handleRoleChange = () => {
    setRole(null)
    router.push('/')
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/favicon-32x32.png" 
            alt="EcoXport Logo" 
            className="h-9 w-9 rounded-lg"
          />
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              EcoXport
            </span>
            {role && (
              <span className="ml-2 text-xs text-muted-foreground">
                • {role === 'producer' ? 'Productor' : 'Comprador'}
              </span>
            )}
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {role && (
            <>
              {role === 'producer' && (
                <>
                  <Link href="/dashboard" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Dashboard
                  </Link>
                  <Link href="/dashboard/productos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Productos
                  </Link>
                  <Link href="/dashboard/mensajes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Mensajes
                  </Link>
                  <Link href="/dashboard/estadisticas" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Estadísticas
                  </Link>
                  <Link href="/dashboard/monedero" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Monedero
                  </Link>
                  <Link href="/dashboard/perfil" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Perfil
                  </Link>
                </>
              )}
              
              {role === 'buyer' && (
                <>
                  <Link href="/marketplace" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Marketplace
                  </Link>
                  <Link href="/orders" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Mis Órdenes
                  </Link>
                </>
              )}
              
              <button
                onClick={handleRoleChange}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
                Cambiar rol
              </button>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {role && (
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              {role === 'producer' ? (
                <Sprout className="h-4 w-4 text-[oklch(0.58_0.14_165)]" />
              ) : (
                <Users className="h-4 w-4 text-[oklch(0.55_0.12_230)]" />
              )}
              <span className="text-sm font-medium text-foreground">
                {role === 'producer' ? 'Productor' : 'Comprador'}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {role && (
              <>
                {role === 'producer' && (
                  <>
                    <Link href="/dashboard" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Dashboard
                    </Link>
                    <Link href="/dashboard/productos" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Productos
                    </Link>
                    <Link href="/dashboard/mensajes" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Mensajes
                    </Link>
                    <Link href="/dashboard/estadisticas" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Estadísticas
                    </Link>
                    <Link href="/dashboard/monedero" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Monedero
                    </Link>
                    <Link href="/dashboard/perfil" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Perfil
                    </Link>
                  </>
                )}
                {role === 'buyer' && (
                  <>
                    <Link href="/marketplace" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Marketplace
                    </Link>
                    <Link href="/orders" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Mis Órdenes
                    </Link>
                  </>
                )}
                <button
                  onClick={() => {
                    handleRoleChange()
                    setMobileOpen(false)
                  }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  Cambiar rol
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
