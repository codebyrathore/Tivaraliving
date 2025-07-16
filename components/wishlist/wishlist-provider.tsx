"use client"

import type React from "react"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { useAuth } from "../auth/auth-provider"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
}

interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_WISHLIST" }
  | { type: "LOAD_WISHLIST"; payload: WishlistItem[] }

const WishlistContext = createContext<{
  state: WishlistState
  dispatch: React.Dispatch<WishlistAction>
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  clearWishlist: () => void
  isInWishlist: (id: string) => boolean
} | null>(null)

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (exists) return state

      const newItems = [...state.items, action.payload]
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
      }
    }

    case "CLEAR_WISHLIST":
      return { items: [], itemCount: 0 }

    case "LOAD_WISHLIST": {
      return {
        ...state,
        items: action.payload,
        itemCount: action.payload.length,
      }
    }

    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    itemCount: 0,
  })

  useEffect(() => {
    if (user) {
      const savedWishlist = localStorage.getItem(`tivara-wishlist-${user.id}`)
      if (savedWishlist) {
        try {
          const wishlistItems = JSON.parse(savedWishlist)
          dispatch({ type: "LOAD_WISHLIST", payload: wishlistItems })
        } catch (error) {
          console.error("Error loading wishlist from localStorage:", error)
        }
      }
    } else {
      dispatch({ type: "CLEAR_WISHLIST" })
    }
  }, [user])

  useEffect(() => {
    if (user) {
      localStorage.setItem(`tivara-wishlist-${user.id}`, JSON.stringify(state.items))
    }
  }, [state.items, user])

  const addToWishlist = (item: WishlistItem) => {
    if (!user) return
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeFromWishlist = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" })
  }

  const isInWishlist = (id: string) => {
    return state.items.some((item) => item.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
