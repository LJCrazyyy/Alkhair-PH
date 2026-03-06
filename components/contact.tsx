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
import { Briefcase, ShieldCheck, Clock, Smile } from "lucide-react"

const serviceLabels: Record<string, string> = {
  livestream: "Livestreaming Services",
  account: "Account Management",
  content: "Content Creation",
  combo: "Combo Packages",
  general: "General Inquiry",
}

const features = [
  {
    id: 1,
    title: "Professional",
    description: "Offers professional ecommerce and digital marketing services with expert knowledge, skills, and years of industry experience.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Reliable",
    description: "Reliable solutions backed by professional staff experienced in digital growth strategies and consistent service excellence.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Timely",
    description: "Timely delivery of campaigns, content, and sales support with professional handling and efficient digital solutions.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Satisfying",
    description: "Satisfying results from skilled, experienced staff focused on driving conversions, engagement, and measurable business growth.",
    icon: Smile,
  },
]

const testimonials = [
  {
    id: 1,
    text: "I recently purchased a 5-hour SPJ and I am honored to improve the picture quality in livestreaming and the sound to a crystal clear stream unique again SPJ",
    author: "Client Name",
  },
]

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
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

    const serviceName = serviceLabels[formData.service] || "General Inquiry"

    const subject = encodeURIComponent(
      `[Website Inquiry] ${serviceName} - ${formData.firstName} ${formData.lastName}`
    )

    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Service: ${serviceName}

Message:
${formData.message}`
    )

    window.location.href = `mailto:alkhair.live@gmail.com?subject=${subject}&body=${body}`

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contact us by Call or WhatsApp to schedule your ecommerce consultation
          </h2>
        </div>

        {/* Features Grid - icons now white */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.id} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-muted/70 rounded-full flex items-center justify-center border border-border/60 backdrop-blur-sm">
                    <Icon className="w-9 h-9 text-white" strokeWidth={2.2} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-muted/40 rounded-lg p-12 mb-16 border border-border/50">
          <div className="flex justify-center">
            <div className="flex gap-5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125 shadow-lg shadow-primary/40"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form / Scale Section */}
        <div className="relative bg-card text-card-foreground rounded-2xl p-10 md:p-14 overflow-hidden border border-border shadow-2xl">
          {/* Background Image with overlay */}
          <div className="absolute inset-0">
            <img
              src="/Clients/Live2.png"
              alt="background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-black/70" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center z-10">
            {/* Left text column */}
            <div>
              <h3 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-foreground">
                READY TO SCALE?
              </h3>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
                MAKE YOUR NEXT MOVE COUNT, LET'S LEVEL UP RESULTS
              </p>

              <p className="text-lg text-muted-foreground mb-4">
                Fill the form below or contact us directly at
              </p>

              <p className="text-3xl md:text-4xl font-bold tracking-wide text-white">
                info.alkhairph@gmail.com
              </p>
            </div>

            {/* Right form column */}
            <div className="bg-background/80 backdrop-blur-xl border border-border rounded-2xl p-8 md:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-hover-green text-2xl font-semibold">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-destructive/20 border border-destructive/40 rounded-lg p-4 text-destructive text-center">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-input border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/30"
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-input border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/30"
                      required
                    />
                  </div>

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/30"
                    required
                  />

                  <Input
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/30"
                  />

                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger className="bg-input border-input text-foreground data-[placeholder]:text-muted-foreground focus:border-ring focus:ring-ring/30">
                      <SelectValue placeholder="Service Inquiry" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground border-border">
                      <SelectItem value="livestream">Livestreaming Services</SelectItem>
                      <SelectItem value="account">Account Management</SelectItem>
                      <SelectItem value="content">Content Creation</SelectItem>
                      <SelectItem value="combo">Combo Packages</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-input border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/30 resize-none"
                    required
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full text-primary-foreground font-bold py-6 text-lg transition-all disabled:opacity-50 hover:bg-hover-green hover:text-hover-green-foreground"
                  >
                    {loading ? "Sending..." : "INQUIRE NOW"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}