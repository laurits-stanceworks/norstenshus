import {
  Wifi,
  Coffee,
  Sun,
  Users,
  Lock,
  Phone,
  Monitor,
  Zap,
  Wind,
  Car,
  Shield,
  Lightbulb,
} from "lucide-react"

const facilities = [
  { icon: Wifi, label: "Fibernet" },
  { icon: Coffee, label: "Kaffe & te" },
  { icon: Sun, label: "Tagterrasse" },
  { icon: Users, label: "Mødelokaler" },
  { icon: Phone, label: "Telefonbokse" },
  { icon: Lock, label: "24/7 adgang" },
  { icon: Monitor, label: "AV-udstyr" },
  { icon: Zap, label: "Rengøring" },
  { icon: Wind, label: "Gårdhave" },
  { icon: Shield, label: "Sikkerhed" },
  { icon: Lightbulb, label: "Loungeområder" },
  { icon: Car, label: "Parkering" },
]

export function FacilitiesPreview() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {facilities.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg text-center hover:shadow-sm transition-shadow"
        >
          <Icon size={24} className="text-[#CA9665]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-[#262742] uppercase tracking-wide">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
