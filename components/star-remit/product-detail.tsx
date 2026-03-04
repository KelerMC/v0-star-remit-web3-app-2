"use client"

import { ArrowLeft, Shield, Award, Leaf, User, MessageCircle, ShoppingCart, MapPin, Truck, CheckCircle2, AlertCircle, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface ProductDetailProps {
  id: string
}

// Mock data - en producción vendría de una API
const PRODUCTS_DATA: Record<string, any> = {
  "1": {
    id: "1",
    name: "Arándanos Orgánicos Premium",
    producer: "Agrícola Los Andes SAC",
    price: "$4.50",
    unit: "kg",
    minOrder: "100 kg",
    available: "5,000 kg",
    origin: "Cajamarca, Perú",
    harvestDate: "Febrero 2026",
    shippingTime: "5-7 días",
    description: "Arándanos orgánicos de alta calidad, cultivados en los valles andinos a 2,800 msnm. Calibre jumbo, dulzor natural excepcional. Cosecha reciente con máxima frescura garantizada.",
    producerImage: "/placeholder-user.jpg",
    producerBio: "Agrícola Los Andes SAC es una empresa familiar con 15 años de experiencia en producción orgánica. Certificada por USDA Organic y Fair Trade.",
    producerRating: 4.9,
    totalOrders: 247,
    certifications: [
      { name: "USDA Organic", verified: true, date: "2024-2026" },
      { name: "GlobalGAP", verified: true, date: "2025-2027" },
      { name: "Fair Trade", verified: true, date: "2023-2026" }
    ],
    features: [
      "Calibre: 18-22mm (Jumbo)",
      "Dulzor: 14-16 Brix",
      "Humedad: <15%",
      "Sin pesticidas químicos",
      "Empaquetado en clamshells de 125g",
      "Cadena de frío garantizada"
    ],
    images: [
      "/products/arandanos.jpg",
      "/products/arandanos.jpg",
      "/products/arandanos.jpg"
    ]
  },
  // Más productos pueden agregarse aquí
}

export function ProductDetail({ id }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(100)
  const [showChat, setShowChat] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { sender: "producer", text: "¡Hola! ¿En qué puedo ayudarte?", time: "10:30" }
  ])

  const product = PRODUCTS_DATA[id] || PRODUCTS_DATA["1"]

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: "buyer", text: message, time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }) }])
      setMessage("")
      // Simular respuesta después de 2 segundos
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "producer", text: "Gracias por tu mensaje. Te responderé pronto.", time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }) }])
      }, 2000)
    }
  }

  const totalPrice = (parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Link 
          href="/marketplace" 
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Marketplace
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Columna Izquierda - Imágenes */}
          <div>
            {/* Imagen Principal */}
            <div className="mb-4 overflow-hidden rounded-2xl border border-border/60 bg-card/50">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Miniaturas */}
            <div className="flex gap-3">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === idx 
                      ? 'border-[oklch(0.58_0.14_165)]' 
                      : 'border-border/40 hover:border-border'
                  }`}
                >
                  <img src={img} alt={`Vista ${idx + 1}`} className="h-20 w-20 object-cover" />
                </button>
              ))}
            </div>

            {/* Info del Productor */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-bold text-foreground">Sobre el Productor</h3>
              <div className="flex items-start gap-4">
                <img 
                  src={product.producerImage} 
                  alt={product.producer}
                  className="h-16 w-16 rounded-full border-2 border-[oklch(0.58_0.14_165)] object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{product.producer}</h4>
                  <div className="mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{product.producerRating}</span>
                    <span className="text-sm text-muted-foreground">• {product.totalOrders} órdenes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.producerBio}</p>
                </div>
              </div>

              <button
                onClick={() => setShowChat(!showChat)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                {showChat ? 'Cerrar Chat' : 'Chatear con Productor'}
              </button>
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <h1 className="mb-2 text-4xl font-bold text-foreground">{product.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{product.origin}</span>
              </div>
            </div>

            {/* Precio */}
            <div className="mb-6 rounded-2xl border border-[oklch(0.58_0.14_165)]/30 bg-gradient-to-br from-[oklch(0.58_0.14_165)]/10 to-transparent p-6">
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{product.price}</span>
                <span className="text-xl text-muted-foreground">/ {product.unit}</span>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>Mínimo: {product.minOrder}</span>
                <span>•</span>
                <span>Disponible: {product.available}</span>
              </div>
            </div>

            {/* Certificaciones */}
            <div className="mb-6">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-muted-foreground">
                <Award className="h-4 w-4" />
                Certificaciones Verificadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert: any, idx: number) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 rounded-full border border-[oklch(0.58_0.14_165)]/30 bg-[oklch(0.58_0.14_165)]/10 px-3 py-1"
                  >
                    {cert.verified && <CheckCircle2 className="h-4 w-4 text-[oklch(0.58_0.14_165)]" />}
                    <span className="text-sm font-medium text-foreground">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-bold text-foreground">Descripción</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Características */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-bold text-foreground">Características</h3>
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {product.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Leaf className="h-4 w-4 text-[oklch(0.58_0.14_165)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Info de Envío */}
            <div className="mb-6 flex gap-4 rounded-xl border border-border/60 bg-card/50 p-4">
              <Truck className="h-5 w-5 text-[oklch(0.55_0.12_230)]" />
              <div>
                <p className="font-medium text-foreground">Envío: {product.shippingTime}</p>
                <p className="text-sm text-muted-foreground">Cosecha: {product.harvestDate}</p>
              </div>
            </div>

            {/* Selector de Cantidad */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Cantidad (kg)
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(100, quantity - 100))}
                  className="rounded-lg border border-border bg-secondary px-4 py-2 font-bold text-foreground transition-colors hover:bg-secondary/80"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(100, parseInt(e.target.value) || 100))}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-center font-bold text-foreground"
                  min="100"
                  step="100"
                />
                <button
                  onClick={() => setQuantity(quantity + 100)}
                  className="rounded-lg border border-border bg-secondary px-4 py-2 font-bold text-foreground transition-colors hover:bg-secondary/80"
                >
                  +
                </button>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Pedido mínimo: 100 kg
              </p>
            </div>

            {/* Protección de Pago */}
            <div className="mb-6 rounded-xl border border-[oklch(0.55_0.12_230)]/30 bg-[oklch(0.55_0.12_230)]/10 p-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-[oklch(0.55_0.12_230)]" />
                <div>
                  <p className="font-medium text-foreground">Pago 100% Protegido</p>
                  <p className="text-sm text-muted-foreground">
                    Tu dinero está en custodia segura hasta que confirmes la recepción del producto
                  </p>
                </div>
              </div>
            </div>

            {/* Total y Botón de Compra */}
            <div className="sticky bottom-6 rounded-2xl border border-border/60 bg-card/95 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg text-muted-foreground">Total:</span>
                <span className="text-3xl font-bold text-foreground">${totalPrice}</span>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90">
                <ShoppingCart className="h-5 w-5" />
                Realizar Pedido
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Al realizar el pedido, aceptas nuestros términos y condiciones
              </p>
            </div>
          </div>
        </div>

        {/* Chat Modal */}
        {showChat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl rounded-2xl border border-border/60 bg-background shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-border/60 p-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={product.producerImage} 
                    alt={product.producer}
                    className="h-10 w-10 rounded-full border-2 border-[oklch(0.58_0.14_165)]"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{product.producer}</p>
                    <p className="text-xs text-muted-foreground">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="rounded-lg p-2 transition-colors hover:bg-secondary"
                >
                  ✕
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-3 flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs rounded-2xl px-4 py-2 ${
                        msg.sender === 'buyer'
                          ? 'bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] text-white'
                          : 'bg-secondary text-foreground'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`mt-1 text-xs ${msg.sender === 'buyer' ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="border-t border-border/60 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.14_165)]"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
