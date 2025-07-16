import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM PST",
      action: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@tivaraliving.com",
      description: "We respond within 24 hours",
      action: "mailto:hello@tivaraliving.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available Now",
      description: "Instant wellness guidance",
      action: "#",
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      details: "123 Wellness Way, California",
      description: "By appointment only",
      action: "#",
    },
  ]

  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <div className="space-y-8">
      <div className="card-spiritual">
        <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Contact Information</h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-stone-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <method.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 group-hover:text-emerald-600 transition-colors">
                  {method.title}
                </h4>
                <p className="text-stone-700 font-medium">{method.details}</p>
                <p className="text-sm text-stone-500">{method.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="card-spiritual">
        <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-2 text-emerald-600" />
          Business Hours
        </h3>
        <div className="space-y-3">
          {hours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-0">
              <span className="font-medium text-stone-700">{schedule.day}</span>
              <span className="text-stone-600">{schedule.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <strong>Holiday Hours:</strong> We may have modified hours during holidays. Please call ahead to confirm.
          </p>
        </div>
      </div>
    </div>
  )
}
