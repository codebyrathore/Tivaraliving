import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  photo: string
}

const team: TeamMember[] = [
  {
    name: "Dr. Priya Sharma",
    role: "Founder & Ayurvedic Expert",
    photo: "/placeholder.svg?height=240&width=240&text=Priya",
  },
  {
    name: "Rajesh Kumar",
    role: "Vastu & Energy Consultant",
    photo: "/placeholder.svg?height=240&width=240&text=Rajesh",
  },
  {
    name: "Maya Patel",
    role: "Head of Research",
    photo: "/placeholder.svg?height=240&width=240&text=Maya",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    photo: "/placeholder.svg?height=240&width=240&text=David",
  },
]

export function AboutTeam() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center">
        <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-12">Meet the Team</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member) => (
            <div key={member.name} className="space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg">
                <Image
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-stone-800">{member.name}</h3>
              <p className="text-sm text-stone-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
