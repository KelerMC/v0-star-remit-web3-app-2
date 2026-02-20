"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { StellarWalletsKit, WalletNetwork } from '@oreit-tech/stellar-wallets-kit'
import { Horizon, Server } from '@stellar/stellar-sdk'

interface WalletContextType {
  isConnected: boolean
  isConnecting: boolean
  address: string | null
  balance: string | null
  error: string | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  kit: StellarWalletsKit | null
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
}

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [kit, setKit] = useState<StellarWalletsKit | null>(null)

  // Initialize Stellar Wallets Kit
  useEffect(() => {
    const stellarKit = new StellarWalletsKit({
      selectedWalletId: 'xbull',
      network: WalletNetwork.TESTNET,
    })
    setKit(stellarKit)
  }, [])

  // Fetch balance when address changes
  useEffect(() => {
    if (address) {
      fetchBalance(address)
    } else {
      setBalance(null)
    }
  }, [address])

  const fetchBalance = async (publicKey: string) => {
    try {
      const server = new Horizon.Server('https://horizon-testnet.stellar.org')
      const account = await server.loadAccount(publicKey)
      
      const xlmBalance = account.balances
        .find((balance: any) => balance.asset_type === 'native')
      
      if (xlmBalance) {
        setBalance(parseFloat(xlmBalance.balance).toFixed(7))
      } else {
        setBalance('0.0000000')
      }
    } catch (err) {
      console.error('Error fetching balance:', err)
      setBalance('0.0000000')
    }
  }

  const connectWallet = async () => {
    if (!kit) {
      setError('Wallet kit not initialized')
      return
    }

    setIsConnecting(true)
    setError(null)

    try {
      // Connect to wallet
      await kit.openModal({
        onWalletSelected: async (walletId) => {
          try {
            const { address } = await kit.getPublicKey()
            setAddress(address)
            setIsConnected(true)
            setIsConnecting(false)
          } catch (err) {
            console.error('Error getting public key:', err)
            setError('Failed to get wallet address')
            setIsConnecting(false)
          }
        },
        onUserDisconnected: () => {
          disconnectWallet()
        },
        onError: (err) => {
          console.error('Wallet connection error:', err)
          setError('Failed to connect wallet')
          setIsConnecting(false)
        }
      })
    } catch (err) {
      console.error('Connection error:', err)
      setError('Failed to open wallet modal')
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    if (kit) {
      kit.disconnect()
    }
    setIsConnected(false)
    setAddress(null)
    setBalance(null)
    setError(null)
  }

  const value: WalletContextType = {
    isConnected,
    isConnecting,
    address,
    balance,
    error,
    connectWallet,
    disconnectWallet,
    kit
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  )
}
