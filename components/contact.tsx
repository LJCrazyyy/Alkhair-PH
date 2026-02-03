"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const serviceLabels: Record<string, string> = {
  livestream: "Livestreaming Services",
  account: "Account Management",
  content: "Content Creation",
  combo: "Combo Packages",
  general: "General Inquiry",
}

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const serviceName = serviceLabels[formData.service] || "General Inquiry"
    const subject = encodeURIComponent(`[Website Inquiry] ${serviceName} - ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(
`Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Service: ${serviceName}

Message:
${formData.message}
`
    )
    
    window.location.href = `mailto:alkhair.live@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          CONTACT US
        </h2>
        <p className="text-gray-400 text-center mb-12">
          ALTERNATIVELY YOU CAN FILL IN THE FOLLOWING CONTACT FORM:
        </p>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-card border border-green-800 rounded-xl p-8 text-center">
              <p className="text-green-400 text-lg">Thanks for submitting!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-red-400 text-center">
                  {error}
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-card border-border text-white placeholder:text-gray-500"
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-card border-border text-white placeholder:text-gray-500"
                  required
                />
              </div>
              
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-card border-border text-white placeholder:text-gray-500"
                required
              />
              
              <Input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="bg-card border-border text-white placeholder:text-gray-500"
              />
              
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="bg-card border-border text-gray-500">
                  <SelectValue placeholder="Service Inquiry" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="livestream" className="text-white">Livestreaming Services</SelectItem>
                  <SelectItem value="account" className="text-white">Account Management</SelectItem>
                  <SelectItem value="content" className="text-white">Content Creation</SelectItem>
                  <SelectItem value="combo" className="text-white">Combo Packages</SelectItem>
                  <SelectItem value="general" className="text-white">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-card border-border text-white placeholder:text-gray-500 resize-none"
                required
              />
              
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-6 disabled:opacity-50"
              >
                {loading ? "Sending..." : "INQUIRE US"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
