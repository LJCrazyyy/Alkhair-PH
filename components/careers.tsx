import { Button } from "@/components/ui/button"

const openings = [
  {
    title: "Livestream Host",
    type: "Full-time",
    description: "Engage audiences and drive sales through dynamic live selling sessions.",
  },
  {
    title: "Account Manager",
    type: "Full-time",
    description: "Manage brand accounts and optimize performance on eCommerce platforms.",
  },
  {
    title: "Content Creator",
    type: "Full-time / Part-time",
    description: "Create compelling product videos and marketing content.",
  },
]

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest mb-4">JOIN OUR TEAM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CAREERS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Be part of the leading live selling agency in the Philippines
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {openings.map((job, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-gray-500 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-1">{job.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{job.type}</p>
              <p className="text-gray-400 text-sm">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            VIEW ALL OPENINGS
          </Button>
        </div>
      </div>
    </section>
  )
}
