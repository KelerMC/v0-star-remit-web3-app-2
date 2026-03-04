"use client"

import { useState } from "react"
import { Send, Search, MessageCircle, Clock, CheckCheck, Package } from "lucide-react"

interface Message {
  id: number
  sender: "buyer" | "producer"
  text: string
  timestamp: string
  read: boolean
}

interface Conversation {
  id: number
  buyer: string
  buyerCountry: string
  product: string
  lastMessage: string
  timestamp: string
  unread: number
  status: "active" | "completed" | "pending"
  avatar: string
  messages: Message[]
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    buyer: "Fresh Market USA",
    buyerCountry: "🇺🇸 Estados Unidos",
    product: "Arándanos Orgánicos 500kg",
    lastMessage: "Perfecto, confirmo el pedido para el 15 de marzo",
    timestamp: "Hace 10 min",
    unread: 2,
    status: "active",
    avatar: "FM",
    messages: [
      {
        id: 1,
        sender: "buyer",
        text: "Hola, estoy interesado en 500kg de arándanos orgánicos. ¿Tienes disponibilidad para envío el 15 de marzo?",
        timestamp: "10:30 AM",
        read: true
      },
      {
        id: 2,
        sender: "producer",
        text: "¡Hola! Sí, tenemos disponibilidad. El precio es $4.50/kg para ese volumen. Incluye certificados USDA Organic y GlobalGAP.",
        timestamp: "10:35 AM",
        read: true
      },
      {
        id: 3,
        sender: "buyer",
        text: "Excelente. ¿Cuál sería el tiempo de envío a California?",
        timestamp: "10:40 AM",
        read: true
      },
      {
        id: 4,
        sender: "producer",
        text: "El envío refrigerado toma aproximadamente 5-7 días vía aérea. Te enviaré toda la documentación necesaria.",
        timestamp: "10:42 AM",
        read: true
      },
      {
        id: 5,
        sender: "buyer",
        text: "Perfecto, confirmo el pedido para el 15 de marzo",
        timestamp: "Hace 10 min",
        read: false
      }
    ]
  },
  {
    id: 2,
    buyer: "Berlin Organic Store",
    buyerCountry: "🇩🇪 Alemania",
    product: "Quinoa Real 200kg",
    lastMessage: "¿Los certificados incluyen Fair Trade?",
    timestamp: "Hace 2 horas",
    unread: 1,
    status: "active",
    avatar: "BO",
    messages: [
      {
        id: 1,
        sender: "buyer",
        text: "Guten Tag! Necesito quinoa certificada. ¿Los certificados incluyen Fair Trade?",
        timestamp: "8:30 AM",
        read: false
      }
    ]
  },
  {
    id: 3,
    buyer: "Tokyo Premium Foods",
    buyerCountry: "🇯🇵 Japón",
    product: "Café Geisha 50kg",
    lastMessage: "Pedido recibido en perfectas condiciones. ¡Gracias!",
    timestamp: "Hace 1 día",
    unread: 0,
    status: "completed",
    avatar: "TP",
    messages: [
      {
        id: 1,
        sender: "buyer",
        text: "Pedido recibido en perfectas condiciones. ¡Gracias!",
        timestamp: "Ayer 3:45 PM",
        read: true
      }
    ]
  },
  {
    id: 4,
    buyer: "Montreal Fresh Market",
    buyerCountry: "🇨🇦 Canadá",
    product: "Aguacate Hass 1000kg",
    lastMessage: "Esperando confirmación de envío",
    timestamp: "Hace 3 horas",
    unread: 0,
    status: "pending",
    avatar: "MF",
    messages: [
      {
        id: 1,
        sender: "producer",
        text: "Tu pedido está listo para envío. Te confirmaremos el tracking en las próximas 24 horas.",
        timestamp: "Hace 3 horas",
        read: true
      }
    ]
  }
]

export function MessagesDashboard() {
  const [conversations] = useState<Conversation[]>(MOCK_CONVERSATIONS)
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0])
  const [messageText, setMessageText] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unread, 0)

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedConversation) return
    
    // Aquí iría la lógica para enviar el mensaje
    setMessageText("")
  }

  const getStatusBadge = (status: Conversation["status"]) => {
    switch (status) {
      case "active":
        return <span className="text-xs text-emerald-400">● En conversación</span>
      case "completed":
        return <span className="text-xs text-muted-foreground">✓ Completado</span>
      case "pending":
        return <span className="text-xs text-yellow-400">⏳ Pendiente</span>
    }
  }

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            💬 Mensajes
          </h1>
          <p className="text-muted-foreground">
            Comunícate con tus compradores internacionales
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Conversaciones Activas</span>
              <MessageCircle className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
            </div>
            <p className="text-3xl font-bold text-foreground">
              {conversations.filter(c => c.status === "active").length}
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Mensajes Sin Leer</span>
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">{totalUnread}</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pedidos Completados</span>
              <CheckCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">
              {conversations.filter(c => c.status === "completed").length}
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
              {/* Search */}
              <div className="border-b border-border/60 p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar conversaciones..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-border bg-input py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
              </div>

              {/* Conversation Items */}
              <div className="max-h-[600px] overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`w-full border-b border-border/40 p-4 text-left transition-colors hover:bg-secondary/50 ${
                      selectedConversation?.id === conv.id ? "bg-secondary" : ""
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] text-sm font-bold text-white">
                          {conv.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{conv.buyer}</p>
                          <p className="text-xs text-muted-foreground">{conv.buyerCountry}</p>
                        </div>
                      </div>
                      {conv.unread > 0 && (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[oklch(0.58_0.14_165)] text-xs font-bold text-white">
                          {conv.unread}
                        </span>
                      )}
                    </div>

                    <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Package className="h-3 w-3" />
                      <span>{conv.product}</span>
                    </div>

                    <p className="mb-2 line-clamp-1 text-sm text-muted-foreground">
                      {conv.lastMessage}
                    </p>

                    <div className="flex items-center justify-between">
                      {getStatusBadge(conv.status)}
                      <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {selectedConversation ? (
              <div className="flex h-[700px] flex-col rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
                {/* Chat Header */}
                <div className="border-b border-border/60 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] text-lg font-bold text-white">
                      {selectedConversation.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {selectedConversation.buyer}
                      </h3>
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-muted-foreground">
                          {selectedConversation.buyerCountry}
                        </p>
                        {getStatusBadge(selectedConversation.status)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-border/40 bg-secondary/50 px-3 py-2">
                    <Package className="h-4 w-4 text-[oklch(0.58_0.14_165)]" />
                    <span className="text-sm text-foreground">
                      {selectedConversation.product}
                    </span>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto p-6">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "producer" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.sender === "producer"
                            ? "bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] text-white"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`mt-1 text-xs ${
                            message.sender === "producer"
                              ? "text-white/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp}
                          {message.sender === "producer" && message.read && (
                            <CheckCheck className="ml-1 inline h-3 w-3" />
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t border-border/60 p-4">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Escribe un mensaje..."
                      className="flex-1 rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                    >
                      <Send className="h-5 w-5" />
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-[700px] items-center justify-center rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
                <div className="text-center">
                  <MessageCircle className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">
                    Selecciona una conversación para comenzar
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
