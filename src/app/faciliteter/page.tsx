import type { Metadata } from "next"
import Image from "next/image"
import {
  Wifi, Coffee, Sun, Users, Phone, Lock, Monitor, Zap,
  Wind, Car, Shield, Lightbulb, Droplets, Volume2, Key,
  Star, Heart, Globe, Tv, Package,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Faciliteter & Kontorfaciliteter — Nordstens Hus Hillerød",
  description: "Alt inkluderet: fibernet, mødelokaler, tagterrasse, kaffe, 24/7 adgang og daglig rengøring. Se alle faciliteter på Nordstens Hus i Hillerød.",,
}

const facilities = [
  {
    icon: Wifi,
    title: "Højhastigheds fibernet",
    description: "Sikker og hurtig internetforbindelse med CAT6 kabling i hele bygningen.",
  },
  {
    icon: Users,
    title: "Mødelokaler med AV",
    description: "Moderne mødelokaler udstyret med skærme og videomødeudstyr.",
  },
  {
    icon: Phone,
    title: "Telefonbokse",
    description: "6 dedikerede telefonbokse til fortrolige samtaler og fokuseret arbejde.",
  },
  {
    icon: Sun,
    title: "Tagterrasse",
    description: "Unik tagterrasse med udsigt — til møder, pauser eller networking udendørs.",
  },
  {
    icon: Wind,
    title: "Gårdhave",
    description: "Smuk gårdhave omgivet af den historiske bygnings arkitektur.",
  },
  {
    icon: Coffee,
    title: "Køkkener & kaffe",
    description: "Delte køkkener med gratis kaffe, te og drikkevarer inkluderet.",
  },
  {
    icon: Lock,
    title: "24/7 adgang",
    description: "Salto mobil nøglesystem giver dig adgang til bygningen hele døgnet.",
  },
  {
    icon: Zap,
    title: "Daglig rengøring",
    description: "Professionel rengøring af alle fællesområder og dit kontor hver dag.",
  },
  {
    icon: Lightbulb,
    title: "Loungeområder",
    description: "Indbydende lounges til uformel networking, læsning eller pauser.",
  },
  {
    icon: Monitor,
    title: "Ergonomisk indretning",
    description: "HAY møbler og ergonomiske løsninger gennemgående i hele bygningen.",
  },
  {
    icon: Shield,
    title: "Sikkerhed",
    description: "Overvågningssystem og adgangskontrol sikrer tryghed for dig og din virksomhed.",
  },
  {
    icon: Volume2,
    title: "Akustik & belysning",
    description: "Optimal akustik og belysning designet til koncentration og velvære.",
  },
  {
    icon: Droplets,
    title: "Brusefaciliteter",
    description: "Brusere til dig der cykler til arbejde eller træner i løbet af dagen.",
  },
  {
    icon: Globe,
    title: "Netværksarrangementer",
    description: "Regelmæssige events og arrangementer der bringer fællesskabet sammen.",
  },
  {
    icon: Key,
    title: "Mobil nøgleadgang",
    description: "Åbn alle døre med din telefon via Salto systemet — ingen fysiske nøgler.",
  },
  {
    icon: Heart,
    title: "Hjemlig atmosfære",
    description: "Et varmt og imødekommende miljø der føles som et hjem uden for hjemmet.",
  },
  {
    icon: Car,
    title: "Parkering",
    description: "Parkeringsmuligheder i nærheden af bygningen mod betaling.",
  },
  {
    icon: Tv,
    title: "Stille zoner",
    description: "Afskærmede områder til dybdegående koncentrationsarbejde.",
  },
  {
    icon: Package,
    title: "Postmodtagelse",
    description: "Vi modtager din post og pakker, så du aldrig går glip af en levering.",
  },
  {
    icon: Star,
    title: "Erhvervsadresse",
    description: "Brug Slotsgade 13-15, Hillerød som din officielle virksomhedsadresse.",
  },
]

const sections = [
  {
    image: "/images/meeting-paris.jpg",
    heading: "State of the art mødelokaler",
    body: "I Nordstens Workspace møder du højeste kvalitet i alt — fra mursten til mødelokaler, der kommer i flere størrelser. Alle husets mødelokaler er udstyret med de nyeste skærme, systemer til videoopkald og hurtigt og stabilt internet, så du kan afvikle præsentationer, møder og workshops optimalt og helt uden bekymringer. Efter dine møder kan du invitere deltagerne op på tagterrassen eller hygge i gården.",
    reverse: false,
    objectPosition: "center 50%",
  },
  {
    image: "/images/faciliteter-salto.jpg",
    heading: "Teknologi og komfort hånd i hånd",
    body: "Vi har skabt et arbejdsmiljø, der sætter både teknologi og komfort i centrum. Med vores Salto-briklåsesystem, som du styrer direkte fra din mobil, bliver dagen lidt lettere og mere sikker. Med optimal belysning og god akustik i alle rum skaber Nordstens Workspace en behagelig og inspirerende atmosfære, hver gang du træder ind på din arbejdsplads.",
    reverse: true,
  },
  {
    image: "/images/faciliteter-rooftop.jpg",
    heading: "Unik tagterrasse og indbydende gårdmiljø",
    body: "Nyd godt af din store, private tagterrasse — den perfekte ramme for alt fra uformelle møder til større arrangementer. Du kan arbejde i det fri (vi har lagt el ind), koble af og se det hele lidt fra oven, eller netværke med andre lejere i et afslappet miljø. Gårdmiljøet er en grøn og social oase i stueetagen, omgivet af kaffebar, øl- og vinbar, restaurant og butik.",
    reverse: false,
  },
  {
    image: "/images/faciliteter-phone-booth.jpg",
    heading: "Telefonrum til dine private samtaler",
    body: "Når du har brug for at tage en privat samtale eller deltage i et online møde, har vi 6 dedikerede telefonrum, der giver dig den ro og det privatliv, du har brug for. Her kan du føle dig tryg og uforstyrret og fokusere fuldt ud på dine samtaler.",
    reverse: true,
  },
  {
    image: "/images/faciliteter-coffee.jpg",
    heading: "Gratis kaffe og te i vores fælleskøkkener",
    body: "I vores fuldt udstyrede fælleskøkkener er der altid gratis kaffe og te — den perfekte anledning til en velfortjent pause, idéudveksling med kolleger og nye bekendtskaber. Køkkenerne er indrettet som hyggelige fællesområder med cafémiljø, hvor uformelle samtaler kan blomstre og styrke fællesskabet.",
    reverse: false,
  },
  {
    image: "/images/interior-b.jpg",
    heading: "Netværksstruktur og sikkerhed",
    body: "Vores netværk er sikkert og stabilt og giver dig trådløst internet i hele bygningen. IT-infrastrukturen inkluderer alt fra firewall og CAT6-kabling til muligheden for at oprette dit eget lukkede netværk. Datasikkerhed er vigtigt for dig, og derfor har vi investeret i den nyeste teknologi inden for IT-sikkerhed. Så kan du føle dig tryg ved at dele og arbejde med dine data.",
    reverse: true,
  },
  {
    image: "/images/interior-a.jpg",
    heading: "Kan arbejde føles som hjemme?",
    body: "Vi har gjort et godt forsøg! For Nordstens Workspace er meget mere end et kontorfællesskab – det er et levende miljø, hvor vi har kombineret fortidens unikke håndværk med ultramoderne komfort. I huset handler det om mennesker, fællesskab og fleksibilitet, så du kan føle dig hjemme, selv når du er på arbejde. Nordstens Workspace er skabt med stor kærlighed til detaljen og designet til at imødekomme nutidens behov for inspirerende og funktionelle arbejdsmiljøer.",
    reverse: false,
  },
  {
    image: "/images/faciliteter-lounge2.jpg",
    heading: "Find roen i vores loungeområder og café",
    body: "Når du trænger til en pause, finder du ro og fornyet energi i vores afslappende loungeområder og hyggelige cafémiljøer, der også giver gode rammer for samtale og socialisering med de andre kontorkolleger.",
    reverse: true,
  },
  {
    image: "/images/courtyard.jpg",
    heading: "Rum for pauser og social samvær",
    body: "Hos Nordstens Workspace går vi langt for at skabe balance i hverdagen. Med adgang til bad og en smuk tagterrasse kan du både opfriske dig og nyde udelivet uden at forlade bygningen. Vores indbydende gårdmiljø giver dig også mulighed for at tage en pause i grønne omgivelser eller arrangere uformelle møder over en kop kaffe.",
    reverse: false,
  },
]

export default function FaciliteterPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image src="/images/faciliteter-hero.jpg" alt="Faciliteter" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Faciliteter
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Faciliteter der løfter din arbejdsdag
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Meget mere end et traditionelt kontorlejemål. Alt hvad du behøver er inkluderet — fra dag ét.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 sm:p-8 bg-[#f5f4f0] rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon size={28} className="text-[#9d2e1e] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#8397a9] font-semibold mb-2">{title}</h3>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating image-text sections */}
      <div>
        {sections.map(({ image, heading, body, reverse, objectPosition }, i) => (
          <div
            key={heading}
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} ${
              i % 2 === 0 ? "bg-[#f5f4f0]" : "bg-white"
            }`}
          >
            <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[460px] shrink-0">
              <Image src={image} alt={heading} fill className="object-cover" style={objectPosition ? { objectPosition } : undefined} />
            </div>
            <div className="flex-1 flex items-center px-8 sm:px-12 md:px-16 py-10 md:py-16">
              <div className="max-w-lg">
                <h2 className="text-[#8397a9] text-xl sm:text-2xl md:text-3xl font-light mb-5">
                  {heading}
                </h2>
                <p className="text-[#6b6b7a] leading-relaxed">{body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
