"use client"

import { useState } from "react"
import { Edit, Save, Upload, Award, MapPin, Globe, Phone, Mail, Calendar, Star, Package, Users } from "lucide-react"

export function ProfileDashboard() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    companyName: "Agrícola Los Andes SAC",
    description: "Productores de frutas orgánicas premium desde 1998. Especializados en arándanos, aguacates y productos de exportación con certificación internacional.",
    location: "La Libertad, Perú",
    phone: "+51 944 567 890",
    email: "contacto@agricolalosandes.pe",
    website: "www.agricolalosandes.pe",
    foundedYear: "1998",
    employees: "45-60",
    farmSize: "120 hectáreas"
  })

  const certificates = [
    {
      name: "USDA Organic",
      issuer: "USDA",
      validUntil: "Diciembre 2026",
      verified: true,
      image: "🌿"
    },
    {
      name: "GlobalGAP",
      issuer: "GlobalGAP",
      validUntil: "Marzo 2027",
      verified: true,
      image: "✓"
    },
    {
      name: "Fair Trade Certified",
      issuer: "Fair Trade International",
      validUntil: "Junio 2026",
      verified: true,
      image: "🤝"
    },
    {
      name: "ISO 22000",
      issuer: "ISO",
      validUntil: "Septiembre 2026",
      verified: true,
      image: "📋"
    },
    {
      name: "SENASA Export",
      issuer: "SENASA Perú",
      validUntil: "Noviembre 2026",
      verified: true,
      image: "🇵🇪"
    }
  ]

  const achievements = [
    { icon: Package, label: "247 Pedidos Completados", color: "text-emerald-400" },
    { icon: Star, label: "4.9 Rating Promedio", color: "text-yellow-400" },
    { icon: Users, label: "89 Clientes Satisfechos", color: "text-blue-400" },
    { icon: Globe, label: "12 Países Alcanzados", color: "text-[oklch(0.58_0.14_165)]" }
  ]

  const farmGallery = [
    { id: 1, image: "/products/arandanos.jpg", title: "Plantación de Arándanos" },
    { id: 2, image: "/products/aguacate.jpg", title: "Árboles de Aguacate" },
    { id: 3, image: "/products/cafe.jpg", title: "Cultivo de Café" },
    { id: 4, image: "/products/quinoa.jpg", title: "Campos de Quinoa" },
    { id: 5, image: "/products/mango.jpg", title: "Mangos Frescos" },
    { id: 6, image: "/products/esparragos.jpg", title: "Espárragos Orgánicos" }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Aquí iría la lógica para guardar los cambios
  }

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              👤 Mi Perfil
            </h1>
            <p className="text-muted-foreground">
              Gestiona tu información y certificaciones
            </p>
          </div>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            {isEditing ? (
              <>
                <Save className="h-5 w-5" />
                Guardar Cambios
              </>
            ) : (
              <>
                <Edit className="h-5 w-5" />
                Editar Perfil
              </>
            )}
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              {/* Avatar */}
              <div className="mb-6 text-center">
                <div className="relative mx-auto mb-4 h-32 w-32">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] text-5xl font-bold text-white">
                    AL
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-card bg-[oklch(0.58_0.14_165)] text-white transition-opacity hover:opacity-90">
                      <Upload className="h-5 w-5" />
                    </button>
                  )}
                </div>
                
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.companyName}
                    onChange={(e) => setProfileData({...profileData, companyName: e.target.value})}
                    className="mb-2 w-full rounded-lg border border-border bg-input px-3 py-2 text-center text-xl font-bold text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                ) : (
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    {profileData.companyName}
                  </h2>
                )}
                
                <div className="flex items-center justify-center gap-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-lg font-bold">4.9</span>
                  <span className="text-sm text-muted-foreground">(127 reviews)</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="flex-1 rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  ) : (
                    <span className="text-sm text-foreground">{profileData.location}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="flex-1 rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  ) : (
                    <span className="text-sm text-foreground">{profileData.phone}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="flex-1 rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  ) : (
                    <span className="text-sm text-foreground">{profileData.email}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.website}
                      onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                      className="flex-1 rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  ) : (
                    <a href={`https://${profileData.website}`} className="text-sm text-[oklch(0.58_0.14_165)] hover:underline">
                      {profileData.website}
                    </a>
                  )}
                </div>
              </div>

              {/* Company Stats */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Calendar className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-semibold text-foreground">{profileData.foundedYear}</p>
                    <p className="text-xs text-muted-foreground">Fundada</p>
                  </div>
                  <div>
                    <Users className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-semibold text-foreground">{profileData.employees}</p>
                    <p className="text-xs text-muted-foreground">Empleados</p>
                  </div>
                  <div>
                    <MapPin className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-semibold text-foreground">{profileData.farmSize}</p>
                    <p className="text-xs text-muted-foreground">Extensión</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-bold text-foreground">🏆 Logros</h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.label} className="flex items-center gap-3">
                    <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                    <span className="text-sm text-foreground">{achievement.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <div className="mb-6 rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Sobre Nosotros</h3>
              {isEditing ? (
                <textarea
                  value={profileData.description}
                  onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                  rows={4}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  {profileData.description}
                </p>
              )}
            </div>

            {/* Certificates */}
            <div className="mb-6 rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Certificaciones</h3>
                  <p className="text-sm text-muted-foreground">Verificadas y vigentes</p>
                </div>
                {isEditing && (
                  <button className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/80">
                    <Upload className="h-4 w-4" />
                    Agregar
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-4 rounded-xl border border-border/40 bg-gradient-to-br from-card/50 to-transparent p-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                      {cert.image}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold text-foreground">{cert.name}</p>
                        {cert.verified && (
                          <Award className="h-4 w-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-emerald-400">Válido hasta {cert.validUntil}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Farm Gallery */}
            <div className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Galería de la Finca</h3>
                  <p className="text-sm text-muted-foreground">Nuestras instalaciones y cultivos</p>
                </div>
                {isEditing && (
                  <button className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/80">
                    <Upload className="h-4 w-4" />
                    Subir Foto
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {farmGallery.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-sm font-semibold text-white">{photo.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
