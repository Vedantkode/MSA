import { FormEvent, ReactNode, useState } from "react"

type IconName = "arrow" | "book" | "briefcase" | "calendar" | "chart" | "check" | "chevron" | "clock" | "close" | "document" | "education" | "mail" | "map" | "menu" | "phone" | "shield" | "spark" | "user" | "whatsapp"

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-5 3 3 5-7" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
    document: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
    education: (
      <>
        <path d="m3 10 9-5 9 5-9 5z" />
        <path d="M7 13v4c3 2 7 2 10 0v-4M21 10v6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-4-1-2 2c-3.8-1.4-6.6-4.2-8-8l2-2-1-4Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z" />
        <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.5l1 2.3-.8 1c.8 1.6 2 2.8 3.7 3.5l.9-1.1 2.4 1.1v.6c0 .6-.4 1.3-1 1.6-1 .5-2.5.2-4.6-1-2.4-1.4-4.2-3.5-4.8-5.3-.4-1.2.1-2 .5-2.4" />
      </>
    ),
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#home"
      className="group flex items-center gap-3"
      aria-label="Mr Stock Advisor home"
    >
      {/* Logo 3 Vector Emblem */}
      <span className="relative flex size-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="size-12" fill="none">
          <defs>
            <linearGradient id="goldCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="30%" stopColor="#FDE047" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="goldArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="barLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="barDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Outer Golden Ring */}
          <circle
            cx="48"
            cy="52"
            r="32"
            stroke="url(#goldCircleGrad)"
            strokeWidth="6.5"
            fill="none"
          />

          {/* Bar 1 (Left - Shortest) 3D Pillars */}
          <path d="M36 68 V38 L40 36 V68 Z" fill="url(#barDark)" />
          <path d="M40 68 V36 L44 34.5 V68 Z" fill="url(#barLight)" />

          {/* Bar 2 (Middle - Medium) 3D Pillars */}
          <path d="M46 68 V28 L50 26 V68 Z" fill="url(#barDark)" />
          <path d="M50 68 V26 L54 24.5 V68 Z" fill="url(#barLight)" />

          {/* Bar 3 (Right - Tallest) 3D Pillars */}
          <path d="M56 68 V19 L60 17 V68 Z" fill="url(#barDark)" />
          <path d="M60 68 V17 L64 15.5 V68 Z" fill="url(#barLight)" />

          {/* Dynamic Lightning Growth Arrow Surging Upward */}
          <path
            d="M24 67 L44 48 L40 55 L68 34 L78 28 L73 39 L65 37 L48 57 L52 50 Z"
            fill="url(#goldArrowGrad)"
            filter="url(#logoShadow)"
          />
          {/* Arrowhead precision tip */}
          <polygon
            points="70,25 86,22 81,38 76,33 70,36"
            fill="url(#goldArrowGrad)"
            filter="url(#logoShadow)"
          />
        </svg>
      </span>

      {/* Brand Name Lockup */}
      <span className="flex flex-col">
        <span
          className={`text-lg font-black tracking-tight leading-none ${
            inverse ? "text-white" : "text-navy-950"
          }`}
        >
          MR STOCK <span className="text-blue-600">ADVISOR</span>
        </span>
        <span
          className={`mt-1.5 block text-[10px] font-extrabold uppercase tracking-[0.2em] ${
            inverse ? "text-amber-400" : "text-amber-600"
          }`}
        >
          Invest · Learn · Grow
        </span>
      </span>
    </a>
  )
}

const navItems = [
  ["Home", "home"],
  ["About Us", "about"],
  ["IPO Information", "ipos"],
  ["Learn Stock Market", "learn"],
  ["Services", "services"],
  ["Contact", "contact"],
  ["Enquiry", "enquiry"],
]

const WHATSAPP_PHONE = "918299569548"
const WHATSAPP_COURSES_MESSAGE = "hi I want to know About your courses."
const WHATSAPP_COURSES_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_COURSES_MESSAGE)}`
const ENQUIRY_EMAIL = "vedantpandey737@gmail.com"

function Button({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
}: {
  children: ReactNode
  href: string
  variant?: "primary" | "secondary" | "light" | "whatsapp"
  className?: string
  target?: string
  rel?: string
}) {
  const styles = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700",
    secondary:
      "border border-slate-300 bg-white text-navy-950 hover:border-blue-300 hover:bg-blue-50",
    light:
      "bg-white text-blue-700 shadow-lg shadow-navy-950/10 hover:bg-blue-50",
    whatsapp:
      "bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-600",
  }
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Main navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={WHATSAPP_COURSES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-11 items-center justify-center rounded-xl border border-emerald-200 text-emerald-600 transition hover:bg-emerald-50"
            aria-label="Contact on WhatsApp"
          >
            <Icon name="whatsapp" />
          </a>
          <Button href="#enquiry">
            Open Demat Account <Icon name="arrow" className="size-4" />
          </Button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-xl border border-slate-200 text-navy-950 lg:hidden"
          aria-label="Toggle navigation"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl lg:hidden">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              onClick={() => setOpen(false)}
              href={`#${id}`}
              className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
            >
              {label}
            </a>
          ))}
          <Button href="#enquiry" className="mt-4 w-full">
            Open Demat Account
          </Button>
          <Button
            href={WHATSAPP_COURSES_URL}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full"
          >
            <Icon name="whatsapp" className="size-4" /> Chat on WhatsApp
          </Button>
        </nav>
      )}
    </header>
  )
}

function SectionTitle({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string
  title: string
  body?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-10 max-w-2xl text-center"
          : "mb-7 max-w-xl"
      }
    >
      <div className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
        <span className="h-px w-5 bg-blue-600" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-4 leading-7 text-slate-600">{body}</p>}
    </div>
  )
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-8 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-5 shadow-2xl shadow-navy-950/15 sm:p-7">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Market overview
            </p>
            <p className="mt-1 font-extrabold text-navy-950">
              Today’s snapshot
            </p>
          </div>
          <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-[10px] font-bold text-amber-700">
            DEMO DATA
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">NIFTY 50</p>
            <p className="mt-2 text-xl font-extrabold text-navy-950">
              Sample Index
            </p>
            <p className="mt-1 text-xs font-bold text-emerald-600">
              Market education only
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">SENSEX</p>
            <p className="mt-2 text-xl font-extrabold text-navy-950">
              Demo View
            </p>
            <p className="mt-1 text-xs font-bold text-blue-600">
              Not live data
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-slate-100 p-4">
          <div className="mb-2 flex justify-between text-xs font-semibold">
            <span className="text-slate-500">Market trend illustration</span>
            <span className="text-emerald-600">Learn the movement</span>
          </div>
          <svg viewBox="0 0 480 150" className="w-full overflow-visible">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2563eb" stopOpacity=".25" />
                <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 125 C35 116 42 95 75 103 S125 119 157 79 S208 92 244 66 S292 81 322 49 S367 61 397 31 S446 42 480 14 V150 H0Z"
              fill="url(#area)"
            />
            <path
              d="M0 125 C35 116 42 95 75 103 S125 119 157 79 S208 92 244 66 S292 81 322 49 S367 61 397 31 S446 42 480 14"
              fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="480"
              cy="14"
              r="6"
              fill="#fff"
              stroke="#2563eb"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-blue-600 p-4 text-white">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <Icon name="education" />
          </span>
          <div>
            <p className="text-sm font-bold">New to investing?</p>
            <p className="text-xs text-blue-100">
              Start with simple, Hindi-first lessons.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:flex">
        <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Icon name="shield" />
        </span>
        <div>
          <p className="text-xs font-extrabold text-navy-950">Clarity first</p>
          <p className="text-[10px] text-slate-500">No return promises</p>
        </div>
      </div>
    </div>
  )
}

const ipos = [
  {
    name: "Aarav Consumer Ltd.",
    type: "Mainboard",
    open: "12 Mar 2026",
    close: "16 Mar 2026",
    band: "₹000 – ₹000",
    status: "Upcoming",
    group: "upcoming",
  },
  {
    name: "Northstar Infra Ltd.",
    type: "Mainboard",
    open: "18 Mar 2026",
    close: "20 Mar 2026",
    band: "₹000 – ₹000",
    status: "Upcoming",
    group: "upcoming",
  },
  {
    name: "Greenleaf Systems",
    type: "SME",
    open: "04 Mar 2026",
    close: "06 Mar 2026",
    band: "₹000 – ₹000",
    status: "Past IPO",
    group: "past",
  },
  {
    name: "Vistara Digital Ltd.",
    type: "Mainboard",
    open: "18 Feb 2026",
    close: "20 Feb 2026",
    band: "₹000 – ₹000",
    status: "Past IPO",
    group: "past",
  },
]

const articles = [
  {
    icon: "chart" as IconName,
    category: "शुरुआत करें",
    title: "Stock Market Basics: शेयर बाज़ार क्या है?",
    body: "शेयर बाज़ार की बुनियादी बातें आसान हिंदी में समझें और अपनी सीखने की यात्रा शुरू करें.",
    time: "6 min read",
    tone: "bg-blue-50 text-blue-600",
  },
  {
    icon: "briefcase" as IconName,
    category: "Demat Account",
    title: "Demat Account कैसे काम करता है?",
    body: "Demat और trading account के बीच अंतर और account खोलने से पहले ज़रूरी बातें.",
    time: "5 min read",
    tone: "bg-violet-50 text-violet-600",
  },
  {
    icon: "document" as IconName,
    category: "IPO Guide",
    title: "IPO क्या है और apply कैसे करें?",
    body: "Price band, lot size, allotment और listing जैसे IPO terms को सरलता से समझें.",
    time: "7 min read",
    tone: "bg-amber-50 text-amber-600",
  },
  {
    icon: "shield" as IconName,
    category: "Risk Management",
    title: "जोखिम को समझना क्यों ज़रूरी है?",
    body: "बाज़ार के जोखिम, diversification और informed decision-making की भूमिका जानें.",
    time: "8 min read",
    tone: "bg-emerald-50 text-emerald-600",
  },
]

const services = [
  [
    "chart",
    "Stock Market Information",
    "Market concepts, broad trends, and important events explained in a clear, accessible format.",
  ],
  [
    "document",
    "IPO Information",
    "Upcoming and recently listed IPO information presented for easier understanding.",
  ],
  [
    "briefcase",
    "Demat Account Assistance",
    "Guided assistance for completing the Demat account opening process digitally.",
  ],
  [
    "education",
    "Investor Education",
    "Beginner-friendly learning resources in Hindi for better-informed participation.",
  ],
  [
    "spark",
    "Market News & Updates",
    "Curated market headlines and daily highlights without the information overload.",
  ],
] as [IconName, string, string][]

function App() {
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [ipoGroup, setIpoGroup] = useState<"upcoming" | "past">("upcoming")

  async function submitEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus("idle")
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name") as string
    const mobile = data.get("mobile") as string
    const email = data.get("email") as string
    const type = data.get("type") as string
    const message = (data.get("message") as string) || "No additional message provided."

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Full Name": name,
          "Mobile Number": mobile,
          "Email Address": email,
          "Enquiry Type": type,
          Message: message,
          _subject: `New MSA Advisory Enquiry from ${name} (${type})`,
          _template: "table",
          _captcha: "false",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage(
          "Thank you! Your enquiry has been submitted successfully. We will get back to you shortly.",
        )
        form.reset()
      } else {
        setSubmitStatus("error")
        setStatusMessage(
          "Something went wrong while submitting your enquiry. Please try again or reach out to us directly on WhatsApp.",
        )
      }
    } catch {
      setSubmitStatus("error")
      setStatusMessage(
        "Unable to send your enquiry right now. Please check your connection or contact us directly on WhatsApp.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Header />
      <main>
        <section id="home" className="relative overflow-hidden bg-hero">
          <div className="absolute left-0 top-0 h-full w-full opacity-50 grid-pattern" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
                <span className="flex size-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon name="spark" className="size-3" />
                </span>
                Clear information for confident learners
              </div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
                Your trusted partner in the{" "}
                <span className="relative text-blue-600">
                  stock market
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 260 12"
                    fill="none"
                  >
                    <path
                      d="M3 9c58-7 155-8 254-5"
                      stroke="#34d399"
                      strokeWidth="5"
                      strokeLinecap="round"
                      opacity=".6"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Stay informed with market updates, IPO information, and stock
                market education in Hindi—made simpler for Indian investors.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#ipos">
                  Explore IPO Information{" "}
                  <Icon name="arrow" className="size-4" />
                </Button>
                <Button href="#enquiry" variant="secondary">
                  Open Demat Account
                </Button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
                {[
                  ["shield", "Transparent", "No return claims"],
                  ["education", "Hindi-first", "Easy education"],
                  ["user", "Beginner-friendly", "Human assistance"],
                ].map(([icon, title, copy]) => (
                  <div key={title} className="flex items-center gap-3">
                    <span className="text-blue-600">
                      <Icon name={icon as IconName} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy-950">{title}</p>
                      <p className="text-xs text-slate-500">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <HeroDashboard />
          </div>
        </section>

        <section id="ipos" className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div>
              <SectionTitle
                eyebrow="IPO centre"
                title="Track the IPO journey"
                body="Understand key dates, price bands, and status at a glance. The entries below are fictional sample content."
              />
            </div>
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setIpoGroup("upcoming")}
                  className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                    ipoGroup === "upcoming"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Upcoming IPOs
                </button>
                <button
                  type="button"
                  onClick={() => setIpoGroup("past")}
                  className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                    ipoGroup === "past"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Past IPOs
                </button>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {ipos
                .filter((ipo) => ipo.group === ipoGroup)
                .map((ipo) => (
                  <article
                    key={ipo.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="flex items-start justify-between p-6">
                      <div className="flex gap-3">
                        <span className="flex size-12 items-center justify-center rounded-xl bg-blue-50 font-extrabold text-blue-600">
                          {ipo.name.slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                          <h3 className="font-extrabold text-navy-950">
                            {ipo.name}
                          </h3>
                          <p className="mt-1 text-xs text-slate-500">
                            {ipo.type} · Sample IPO
                          </p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
                          ipo.group === "upcoming"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {ipo.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-px border-y border-slate-100 bg-slate-100">
                      <div className="bg-white p-4">
                        <p className="text-[10px] font-bold uppercase text-slate-400">
                          Opens
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-700">
                          {ipo.open}
                        </p>
                      </div>
                      <div className="bg-white p-4">
                        <p className="text-[10px] font-bold uppercase text-slate-400">
                          Closes
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-700">
                          {ipo.close}
                        </p>
                      </div>
                      <div className="col-span-2 bg-white p-4">
                        <p className="text-[10px] font-bold uppercase text-slate-400">
                          Price band
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-700">
                          {ipo.band}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50/70 px-5 py-3 text-xs font-semibold text-blue-700">
                      <Icon name="document" className="size-4" />
                      Indicative information only
                    </div>
                  </article>
                ))}
            </div>
            <div className="mt-8 grid overflow-hidden rounded-2xl bg-navy-950 text-white md:grid-cols-[1fr_auto] md:items-center">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  IPO notifications
                </p>
                <h3 className="mt-2 text-xl font-extrabold">
                  Get IPO updates on Email or WhatsApp
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Choose your preferred contact method in the enquiry form. We
                  will only contact you after receiving your consent.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row md:border-l md:border-t-0">
                <Button href="#enquiry" variant="light">
                  <Icon name="mail" className="size-4" /> Email Updates
                </Button>
                <Button
                  href={WHATSAPP_COURSES_URL}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" className="size-4" /> WhatsApp Updates
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="overflow-hidden py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -left-8 -top-8 size-48 rounded-full bg-blue-100 blur-3xl" />
              <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-navy-950 p-7 text-white shadow-2xl sm:min-h-[30rem] sm:p-9">
                <div className="absolute -right-16 -top-16 size-56 rounded-full bg-blue-500/10" />
                <div className="relative flex items-start justify-between gap-5">
                  <span className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold tracking-wider">
                    MSA ADVISORY
                  </span>
                  <span className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-emerald-400/10 text-emerald-400 sm:size-24">
                    <Icon name="spark" className="size-12 sm:size-14" />
                  </span>
                </div>
                <div className="relative my-10 sm:my-auto sm:py-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                    Our approach
                  </p>
                  <p className="max-w-sm text-xl font-bold leading-snug sm:text-2xl">
                    “Better financial participation begins with clear
                    information and patient learning.”
                  </p>
                </div>
                <div className="relative grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    ["01", "Understand"],
                    ["02", "Learn"],
                    ["03", "Decide"],
                  ].map(([n, text]) => (
                    <div
                      key={n}
                      className="rounded-xl border border-white/10 bg-white/8 p-3 sm:p-4"
                    >
                      <p className="text-xs font-bold text-emerald-400">{n}</p>
                      <p className="mt-3 text-[11px] font-semibold sm:text-xs">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <SectionTitle
                align="left"
                eyebrow="About MSA Advisory"
                title="Helping you navigate with clarity"
                body="MSA Advisory is an information and education-led platform for Indian stock market learners. We simplify market updates, IPO information, and essential concepts so you can build understanding at your own pace."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  [
                    "chart",
                    "Market Information",
                    "Important market context in a structured, easy-to-scan format.",
                  ],
                  [
                    "education",
                    "Investor Education",
                    "Beginner-friendly explanations, with a focus on learning in Hindi.",
                  ],
                  [
                    "briefcase",
                    "Digital Convenience",
                    "Simple assistance for online Demat account opening and enquiries.",
                  ],
                ].map(([icon, title, body]) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm last:sm:col-span-2"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon name={icon as IconName} />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-navy-950">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 lg:px-8 lg:pb-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl bg-blue-600 p-7 text-white shadow-2xl shadow-blue-900/15 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-5">
              <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 sm:flex">
                <Icon name="briefcase" className="size-7" />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-100">
                  Demat Account Opening
                </p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Ready to open your Demat account?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
                  Get guided assistance with the digital account opening
                  process. You can review the details and ask questions before
                  proceeding.
                </p>
              </div>
            </div>
            <Button
              href="#enquiry"
              variant="light"
              className="w-full lg:w-auto"
            >
              Start Demat Account Opening
              <Icon name="arrow" className="size-4" />
            </Button>
          </div>
        </section>

        <section id="learn" className="bg-blue-50/60 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="ज्ञान की शुरुआत"
              title="Learn Stock Market in Hindi"
              body="Build your foundation with simple, practical articles designed for beginners."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group flex flex-col rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span
                    className={`mb-6 flex size-12 items-center justify-center rounded-xl ${article.tone}`}
                  >
                    <Icon name={article.icon} />
                  </span>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                    {article.category}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug text-navy-950">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {article.body}
                  </p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                      <Icon name="clock" className="size-3" />
                      {article.time}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="What we offer"
              title="Support for every step of learning"
              body="Neutral, information-led services designed to help you understand and access the market—not promises of investment performance."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([icon, title, body], index) => (
                <article
                  key={title}
                  className={`group rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                    index === 0
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-xl ${
                      index === 0 ? "bg-white/15" : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon name={icon} />
                  </span>
                  <h3
                    className={`mt-6 text-lg font-extrabold ${
                      index === 0 ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      index === 0 ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    {body}
                  </p>
                </article>
              ))}
              <article className="flex flex-col justify-between rounded-2xl bg-emerald-50 p-6">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    Need help?
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-navy-950">
                    Let’s find the right starting point.
                  </h3>
                </div>
                <Button
                  href={WHATSAPP_COURSES_URL}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 self-start"
                >
                  <Icon name="whatsapp" /> Chat With Us
                </Button>
              </article>
            </div>
          </div>
        </section>

        <section id="enquiry" className="bg-navy-950 py-16 text-white lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-400">
                <span className="h-px w-5 bg-emerald-400" />
                Get in touch
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Have a question? Let’s talk.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-slate-300">
                Share your details and our team will get in touch with you promptly
                via email or phone. Your information is kept completely private.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  ["check", "Simple, guided assistance"],
                  ["check", "Prompt response to your queries"],
                  ["check", "Your privacy and consent matter"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                  >
                    <span className="flex size-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <Icon name={icon as IconName} className="size-4" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <form
              onSubmit={submitEnquiry}
              className="rounded-3xl bg-white p-6 text-slate-700 shadow-2xl sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-navy-950">
                  Full Name
                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="text-sm font-bold text-navy-950">
                  Mobile Number
                  <input
                    name="mobile"
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="text-sm font-bold text-navy-950">
                  Email Address
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="text-sm font-bold text-navy-950">
                  Enquiry Type
                  <select
                    name="type"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option>Demat Account Assistance</option>
                    <option>Market Information</option>
                    <option>IPO Information</option>
                    <option>IPO Email Updates</option>
                    <option>IPO WhatsApp Updates</option>
                    <option>Investor Education</option>
                    <option>General Enquiry</option>
                  </select>
                </label>
                <label className="text-sm font-bold text-navy-950 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              </div>
              <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
                <input
                  required
                  type="checkbox"
                  className="mt-0.5 size-4 accent-blue-600"
                />
                I consent to being contacted regarding this enquiry via email or phone.
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <svg
                      className="size-4 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Submit Enquiry <Icon name="arrow" className="size-4" />
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Icon name="check" className="size-4" />
                  </span>
                  <p className="text-xs font-semibold leading-5 text-emerald-800">
                    {statusMessage}
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                    <Icon name="close" className="size-3.5" />
                  </span>
                  <p className="text-xs font-semibold leading-5 text-red-800">
                    {statusMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>

        <section id="contact" className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-2">
              <div className="p-7 sm:p-10">
                <SectionTitle
                  align="left"
                  eyebrow="Contact us"
                  title="We’re here to help"
                  body="Reach out during business hours using our official contact details below. We are here to assist you."
                />
                <div className="space-y-5">
                  {[
                    ["phone", "Phone", "+91 82995 69548"],
                    ["mail", "Business email", "Kanpurmoneymarket@gmail.com"],
                    [
                      "map",
                      "Office address",
                      "Your verified office address, City, India",
                    ],
                  ].map(([icon, label, value]) => (
                    <div key={label} className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon name={icon as IconName} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-navy-950">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  href={WHATSAPP_COURSES_URL}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8"
                >
                  <Icon name="whatsapp" /> Chat With Us
                </Button>
              </div>
              <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-slate-100 grid-pattern">
                <div className="absolute size-48 rounded-full bg-blue-200/70 blur-3xl" />
                <div className="relative text-center">
                  <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl">
                    <Icon name="map" className="size-8" />
                  </span>
                  <p className="mt-4 font-extrabold text-navy-950">
                    Map placeholder
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Verified location will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6">
              Clear market information, IPO updates, Demat assistance, and
              beginner-friendly financial education in Hindi.
            </p>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Content is for information and education only and should not be
              treated as investment advice.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm">
              {navItems.slice(0, 5).map(([label, id]) => (
                <a key={id} className="block hover:text-white" href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Services</h3>
            <div className="mt-5 space-y-3 text-sm">
              <a className="block hover:text-white" href="#services">
                Market Information
              </a>
              <a className="block hover:text-white" href="#services">
                IPO Information
              </a>
              <a className="block hover:text-white" href="#services">
                Demat Assistance
              </a>
              <a className="block hover:text-white" href="#learn">
                Investor Education
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Contact</h3>
            <div className="mt-5 space-y-4 text-sm">
              <a href="tel:+918299569548" className="flex items-center gap-2 hover:text-white transition">
                <Icon name="phone" className="size-4 shrink-0" />
                +91 82995 69548
              </a>
              <a href="mailto:Kanpurmoneymarket@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                <Icon name="mail" className="size-4 shrink-0" />
                Kanpurmoneymarket@gmail.com
              </a>
              <p className="flex gap-2">
                <Icon name="map" className="size-4 shrink-0" />
                Verified office address, City, India
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 MSA Advisory. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#contact" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#contact" className="hover:text-white">
                Applicable Risk Disclosures
              </a>
            </div>
          </div>
        </div>
      </footer>
      <a
        href={WHATSAPP_COURSES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-900/20 transition hover:scale-105 hover:bg-emerald-600"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon name="whatsapp" className="size-7" />
      </a>
    </div>
  )
}

export default App
