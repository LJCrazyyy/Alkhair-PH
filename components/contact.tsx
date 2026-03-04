"use client"

import React, { useState } from "react"
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const serviceName =
      serviceLabels[formData.service] || "General Inquiry"

    const subject = encodeURIComponent(
      `[Website Inquiry] ${serviceName} - ${formData.firstName} ${formData.lastName}`
    )

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
    <section
      id="contact"
      className="relative py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Clients/Live2.png"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              READY TO SCALE?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              MAKE YOUR NEXT MOVE COUNT, LET'S LEVEL UP RESULTS
            </p>

            <p className="text-lg text-gray-400 mb-4">
              Fill the given form or contact us at
            </p>

            <p className="text-3xl md:text-4xl font-semibold">
              alkhair.live@gmail.com
            </p>
          </div>

          {/* RIGHT SIDE FORM CARD */}
          <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center">
                <p className="text-green-400 text-xl">
                  Thanks for submitting!
                </p>
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
                    className="bg-background/80 border-border text-white placeholder:text-gray-500"
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-background/80 border-border text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/80 border-border text-white placeholder:text-gray-500"
                  required
                />

                <Input
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background/80 border-border text-white placeholder:text-gray-500"
                />

                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="bg-background/80 border-border text-white">
                    <SelectValue placeholder="Service Inquiry" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="livestream" className="text-white">
                      Livestreaming Services
                    </SelectItem>
                    <SelectItem value="account" className="text-white">
                      Account Management
                    </SelectItem>
                    <SelectItem value="content" className="text-white">
                      Content Creation
                    </SelectItem>
                    <SelectItem value="combo" className="text-white">
                      Combo Packages
                    </SelectItem>
                    <SelectItem value="general" className="text-white">
                      General Inquiry
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background/80 border-border text-white placeholder:text-gray-500 resize-none"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-6 text-lg disabled:opacity-50"
                >
                  {loading ? "Sending..." : "INQUIRE US"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}