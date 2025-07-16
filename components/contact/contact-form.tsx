"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, User, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  if (isSubmitted) {
    return (
      <div className="card-spiritual text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">Message Sent Successfully!</h3>
        <p className="text-stone-600 mb-6">
          Thank you for reaching out. Our wellness experts will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="btn-secondary">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="card-spiritual">
      <h2 className="font-playfair text-3xl font-bold text-stone-800 mb-6">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-stone-700">
              Full Name *
            </Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <Input
                id="name"
                type="text"
                required
                className="pl-10"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-stone-700">
              Email Address *
            </Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <Input
                id="email"
                type="email"
                required
                className="pl-10"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-stone-700">
            Phone Number
          </Label>
          <div className="relative mt-1">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
            <Input
              id="phone"
              type="tel"
              className="pl-10"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="inquiryType" className="text-stone-700">
            Inquiry Type *
          </Label>
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product">Product Questions</SelectItem>
              <SelectItem value="consultation">Wellness Consultation</SelectItem>
              <SelectItem value="order">Order Support</SelectItem>
              <SelectItem value="partnership">Partnership Inquiry</SelectItem>
              <SelectItem value="media">Media & Press</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="subject" className="text-stone-700">
            Subject *
          </Label>
          <Input
            id="subject"
            type="text"
            required
            className="mt-1"
            placeholder="Brief subject line"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-stone-700">
            Message *
          </Label>
          <Textarea
            id="message"
            required
            className="mt-1 min-h-[120px]"
            placeholder="Tell us how we can help you on your wellness journey..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
        <p className="text-sm text-emerald-700">
          <strong>Need immediate help?</strong> Call us at{" "}
          <a href="tel:+15551234567" className="font-medium hover:underline">
            +1 (555) 123-4567
          </a>{" "}
          or email{" "}
          <a href="mailto:hello@tivaraliving.com" className="font-medium hover:underline">
            hello@tivaraliving.com
          </a>
        </p>
      </div>
    </div>
  )
}
