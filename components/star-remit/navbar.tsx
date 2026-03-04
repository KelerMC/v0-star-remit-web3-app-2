"use client"

import { Menu, X, Sprout, Users, LogOut } from "lucide-react"
import { useState } from "react"
import { useWallet } from "@/contexts/wallet-context"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { role, setRole } = useWallet()

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {role && (
            <>
              {role === 'producer' && (
                <>
                  <a href="#dashboard" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Dashboard
                  </a>
                  <a href="#productos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Mis Productos
                  </a>
                  <a href="#analytics" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Analytics IA
                  </a>
                </>
              )}
              
              {role === 'buyer' && (
                <>
                  <a href="#marketplace" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Marketplace
                  </a>
                  <a href="#mis-ordenes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Mis Órdenes
                  </a>
                </>
              )}
              
              <button
                onClick={() => setRole(null)}
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
                <Sprout className="h-4 w-4 text-[oklch(0.65_0.25_275)]" />
              ) : (
                <Users className="h-4 w-4 text-[oklch(0.55_0.2_250)]" />
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
                    <a href="#dashboard" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Dashboard
                    </a>
                    <a href="#productos" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Mis Productos
                    </a>
                  </>
                )}
                {role === 'buyer' && (
                  <>
                    <a href="#marketplace" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Marketplace
                    </a>
                    <a href="#mis-ordenes" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      Mis Órdenes
                    </a>
                  </>
                )}
                <button
                  onClick={() => {
                    setRole(null)
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
