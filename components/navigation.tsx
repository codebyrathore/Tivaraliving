"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, User, Heart, Search, ChevronDown } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"
import { useWishlist } from "@/components/wishlist/wishlist-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { Logo } from "@/components/logo"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const { state: cartState, dispatch: cartDispatch } = useCart()
  const { state: wishlistState } = useWishlist()
  const { user, isAuthenticated, logout, isAdmin } = useAuth()

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleShopMouseEnter = () => setIsShopDropdownOpen(true)
  const handleShopMouseLeave = () => setIsShopDropdownOpen(false)
  const handleUserMouseEnter = () => setIsUserDropdownOpen(true)
  const handleUserMouseLeave = () => setIsUserDropdownOpen(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group" onMouseEnter={handleShopMouseEnter} onMouseLeave={handleShopMouseLeave}>
              <button className="flex items-center space-x-1 text-stone-700 hover:text-emerald-600 font-medium transition-colors">
                <span>Shop</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isShopDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Shop Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-stone-200 transition-all duration-200 ${
                  isShopDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Link
                      href="/shop/body"
                      className="group p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                          <span className="text-emerald-600 font-semibold">B</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-stone-800 group-hover:text-emerald-600">Tivara Body</h3>
                          <p className="text-xs text-stone-600">Wellness & Nutrition</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/shop/space"
                      className="group p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                          <span className="text-amber-600 font-semibold">S</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-stone-800 group-hover:text-emerald-600">Tivara Space</h3>
                          <p className="text-xs text-stone-600">Sacred Spaces</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/shop/mind"
                      className="group p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <span className="text-purple-600 font-semibold">M</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-stone-800 group-hover:text-emerald-600">Tivara Mind</h3>
                          <p className="text-xs text-stone-600">Mental Wellness</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/collections"
                      className="group p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                          <span className="text-rose-600 font-semibold">C</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-stone-800 group-hover:text-emerald-600">Collections</h3>
                          <p className="text-xs text-stone-600">Curated Sets</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="border-t border-stone-200 pt-4">
                    <Link
                      href="/shop"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors group"
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      <div>
                        <h3 className="font-semibold text-stone-800 group-hover:text-emerald-600">View All Products</h3>
                        <p className="text-xs text-stone-600">Browse our complete catalog</p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-stone-400 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/journal" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              Journal
            </Link>
            <Link href="/community" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-stone-700 hover:text-emerald-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {isAuthenticated ? (
              <>
                <Link href="/quiz">
                  <Button className="btn-primary text-sm px-4 py-2">Take Quiz</Button>
                </Link>

                <Link href="/wishlist" className="text-stone-700 hover:text-emerald-600 transition-colors relative">
                  <Heart className="w-5 h-5" />
                  {wishlistState.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistState.itemCount}
                    </span>
                  )}
                </Link>

                <button
                  onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                  className="text-stone-700 hover:text-emerald-600 transition-colors relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartState.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartState.itemCount}
                    </span>
                  )}
                </button>

                <div className="relative group" onMouseEnter={handleUserMouseEnter} onMouseLeave={handleUserMouseLeave}>
                  <button className="flex items-center space-x-2 text-stone-700 hover:text-emerald-600 transition-colors">
                    <User className="w-5 h-5" />
                    <span className="text-sm">{user?.firstName || user?.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isUserDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* User Dropdown */}
                  <div
                    className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-stone-200 transition-all duration-200 ${
                      isUserDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        Orders
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      {isAdmin() && (
                        <>
                          <div className="border-t border-stone-200 my-1"></div>
                          <Link
                            href="/admin"
                            className="block px-4 py-2 text-emerald-600 hover:bg-emerald-50 font-medium transition-colors"
                            onClick={() => setIsUserDropdownOpen(false)}
                          >
                            Admin Dashboard
                          </Link>
                        </>
                      )}
                      <div className="border-t border-stone-200 my-1"></div>
                      <button
                        onClick={() => {
                          logout()
                          setIsUserDropdownOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/signin" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  <User className="w-5 h-5" />
                </Link>
                <Link href="/signup">
                  <Button className="btn-primary text-sm px-4 py-2">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-stone-700 hover:text-emerald-600 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/shop"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/shop/body"
                  className="block text-stone-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tivara Body
                </Link>
                <Link
                  href="/shop/space"
                  className="block text-stone-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tivara Space
                </Link>
                <Link
                  href="/shop/mind"
                  className="block text-stone-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tivara Mind
                </Link>
                <Link
                  href="/collections"
                  className="block text-stone-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Collections
                </Link>
              </div>
              <Link
                href="/journal"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Journal
              </Link>
              <Link
                href="/community"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/about"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-stone-200">
                {isAuthenticated ? (
                  <>
                    <Link href="/quiz" onClick={() => setIsOpen(false)}>
                      <Button className="btn-primary w-full mb-3">Take Wellness Quiz</Button>
                    </Link>
                    <div className="flex justify-center space-x-6 mb-4">
                      <Link
                        href="/wishlist"
                        className="text-stone-700 hover:text-emerald-600 transition-colors relative"
                        onClick={() => setIsOpen(false)}
                      >
                        <Heart className="w-5 h-5" />
                        {wishlistState.itemCount > 0 && (
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {wishlistState.itemCount}
                          </span>
                        )}
                      </Link>
                      <button
                        onClick={() => {
                          cartDispatch({ type: "TOGGLE_CART" })
                          setIsOpen(false)
                        }}
                        className="text-stone-700 hover:text-emerald-600 transition-colors relative"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        {cartState.itemCount > 0 && (
                          <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartState.itemCount}
                          </span>
                        )}
                      </button>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="/dashboard"
                        className="block text-stone-700 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/orders"
                        className="block text-stone-700 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Orders
                      </Link>
                      <Link
                        href="/profile"
                        className="block text-stone-700 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Profile
                      </Link>
                      {isAdmin() && (
                        <Link
                          href="/admin"
                          className="block text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                        className="block text-stone-700 hover:text-emerald-600 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <Link href="/signin" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="btn-primary w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
