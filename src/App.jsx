import React, { useState } from 'react'

// Simple colorful blob background decoration
const Blob = ({ className = '', color = 'from-fuchsia-500 via-rose-500 to-orange-400', opacity = 'opacity-30' }) => (
  <div className={`pointer-events-none absolute blur-3xl ${opacity}`} aria-hidden>
    <div className={`h-72 w-72 rounded-full bg-gradient-to-tr ${color} ${className}`} />
  </div>
)

// Phone frame to showcase in-app screenshots
const PhoneFrame = ({ children, className = '' }) => (
  <div className={`relative mx-auto h-[560px] w-[290px] rounded-[36px] bg-neutral-900 shadow-2xl shadow-fuchsia-500/20 ring-8 ring-neutral-800 ${className}`}>
    <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-800" />
    <div className="absolute bottom-4 left-1/2 z-10 h-1.5 w-24 -translate-x-1/2 rounded-full bg-neutral-700" />
    <div className="relative mx-auto mt-6 h-[510px] w-[262px] overflow-hidden rounded-[26px] bg-white">
      {children}
    </div>
  </div>
)

// Reusable small UI atoms for the mock screenshots
const Chip = ({ color = 'bg-emerald-100 text-emerald-700', children }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>{children}</span>
)

const Progress = ({ value = 50, color = 'bg-emerald-500' }) => (
  <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-200">
    <div className={`h-full ${color}`} style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }} />
  </div>
)

// Screenshot 1: Home / Dashboard
const ScreenshotDashboard = () => (
  <div className="flex h-full w-full flex-col bg-gradient-to-b from-white to-neutral-50">
    <div className="flex items-center justify-between px-4 pt-4">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-rose-500" />
        <div className="text-sm font-semibold text-neutral-800">BuddyBudget</div>
      </div>
      <Chip color="bg-fuchsia-100 text-fuchsia-700">Roomies</Chip>
    </div>

    <div className="px-4 pt-4">
      <div className="rounded-2xl bg-neutral-900 p-4 text-white">
        <div className="text-xs uppercase tracking-wide text-neutral-300">Shared balance</div>
        <div className="mt-1 text-3xl font-bold">$1,248.30</div>
        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-300">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> On track this month
        </div>
        <div className="mt-3">
          <Progress value={72} color="bg-emerald-400" />
          <div className="mt-1 text-[11px] text-neutral-400">72% of monthly budget used</div>
        </div>
      </div>
    </div>

    <div className="px-4 pt-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold text-neutral-800">Recent splits</div>
        <button className="text-xs font-medium text-fuchsia-600">View all</button>
      </div>
      <div className="space-y-2">
        {[
          { title: 'Groceries', who: 'You & Sam', amount: 86.4, tag: 'Essentials', color: 'bg-emerald-100 text-emerald-700' },
          { title: 'Internet Bill', who: 'Split 50/50', amount: 59.99, tag: 'Bills', color: 'bg-sky-100 text-sky-700' },
          { title: 'Date Night', who: 'You & Alex', amount: 42.0, tag: 'Fun', color: 'bg-rose-100 text-rose-700' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm ring-1 ring-neutral-100">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-300 to-rose-300" />
              <div>
                <div className="text-sm font-medium text-neutral-900">{item.title}</div>
                <div className="text-xs text-neutral-500">{item.who}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-neutral-900">${item.amount.toFixed(2)}</div>
              <div className="mt-1"><Chip color={item.color}>{item.tag}</Chip></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-auto grid grid-cols-3 gap-2 px-4 pb-3 pt-4">
      {['Home', 'Add', 'Goals'].map((label, i) => (
        <button key={label} className={`rounded-xl py-2 text-xs font-semibold ${i === 0 ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900 ring-1 ring-neutral-200'}`}>{label}</button>
      ))}
    </div>
  </div>
)

// Screenshot 2: Split Expense
const ScreenshotSplit = () => (
  <div className="flex h-full w-full flex-col bg-gradient-to-b from-white to-neutral-50">
    <div className="flex items-center justify-between px-4 pt-4">
      <button className="text-sm text-neutral-500">Back</button>
      <div className="text-sm font-semibold text-neutral-800">New split</div>
      <div className="w-8" />
    </div>

    <div className="px-4 pt-4">
      <label className="text-xs text-neutral-500">Amount</label>
      <div className="mt-1 flex items-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-neutral-100">
        <span className="text-neutral-400">$</span>
        <input aria-label="Amount" className="ml-2 w-full bg-transparent text-2xl font-bold outline-none" defaultValue="128.00" />
      </div>
    </div>

    <div className="px-4 pt-4">
      <label className="text-xs text-neutral-500">Participants</label>
      <div className="mt-1 flex items-center gap-2">
        {['You', 'Sam', 'Alex'].map((p, i) => (
          <div key={p} className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ring-1 ${i === 0 ? 'bg-fuchsia-600 text-white ring-fuchsia-600' : 'bg-white text-neutral-800 ring-neutral-200'}`}>
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" /> {p}
          </div>
        ))}
      </div>
    </div>

    <div className="px-4 pt-4">
      <label className="text-xs text-neutral-500">Split type</label>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {['Equal', 'By %', 'By items'].map((t, i) => (
          <button key={t} className={`rounded-xl px-3 py-2 text-sm font-semibold ring-1 ${i === 0 ? 'bg-neutral-900 text-white ring-neutral-900' : 'bg-white text-neutral-900 ring-neutral-200'}`}>{t}</button>
        ))}
      </div>
    </div>

    <div className="px-4 pt-4">
      <label className="text-xs text-neutral-500">Notes</label>
      <textarea aria-label="Notes" className="mt-1 h-20 w-full resize-none rounded-2xl bg-white p-3 text-sm shadow-sm ring-1 ring-neutral-100" defaultValue={'Weekly groceries and snacks.'} />
    </div>

    <div className="mt-auto px-4 pb-4 pt-6">
      <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-rose-600 py-3 text-white shadow-lg shadow-fuchsia-500/30">Save split</button>
    </div>
  </div>
)

// Screenshot 3: Goals
const ScreenshotGoals = () => (
  <div className="flex h-full w-full flex-col bg-gradient-to-b from-white to-neutral-50">
    <div className="px-4 pt-4">
      <div className="text-sm font-semibold text-neutral-800">Shared goals</div>
      <div className="text-xs text-neutral-500">Stay motivated together</div>
    </div>

    <div className="space-y-3 px-4 pt-4">
      {[
        { name: 'New Couch', saved: 420, target: 800, color: 'bg-amber-500' },
        { name: 'Weekend Trip', saved: 980, target: 1200, color: 'bg-sky-500' },
        { name: 'Rainy Day Fund', saved: 300, target: 1000, color: 'bg-emerald-500' },
      ].map((g, i) => (
        <div key={i} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-neutral-900">{g.name}</div>
            <Chip color="bg-violet-100 text-violet-700">Shared</Chip>
          </div>
          <div className="mt-2">
            <Progress value={(g.saved / g.target) * 100} color={g.color} />
            <div className="mt-2 flex items-center justify-between text-xs text-neutral-600">
              <span>${g.saved.toLocaleString()} saved</span>
              <span>${g.target.toLocaleString()} goal</span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            {['You', 'Sam', 'Alex'].map((p, idx) => (
              <div key={p} className="flex items-center gap-2 rounded-lg bg-neutral-50 px-2 py-1 ring-1 ring-neutral-100">
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${['bg-fuchsia-500','bg-rose-500','bg-amber-500'][idx]}`} />
                +${(g.saved / 3).toFixed(0)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-auto px-4 pb-4 pt-6">
      <button className="w-full rounded-xl bg-neutral-900 py-3 text-white ring-1 ring-neutral-900">Create new goal</button>
    </div>
  </div>
)

const Star = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const App = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-fuchsia-50 to-orange-50 text-neutral-900">
      {/* Navbar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-500 text-white shadow-lg">
            <span className="text-lg font-black">B</span>
          </div>
          <div className="text-lg font-extrabold tracking-tight">BuddyBudget</div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          <a href="#features" className="hover:text-neutral-900">Features</a>
          <a href="#how" className="hover:text-neutral-900">How it works</a>
          <a href="#screenshots" className="hover:text-neutral-900">Screenshots</a>
          <a href="#faq" className="hover:text-neutral-900">FAQ</a>
        </nav>
        <div className="hidden gap-3 md:flex">
          <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-neutral-200">Download</button>
          <button className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30">Get Early Access</button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <Blob className="-left-10 top-10" />
        <Blob className="right-0 top-40 h-80 w-80" color="from-sky-500 via-violet-500 to-fuchsia-500" opacity="opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:pb-20 lg:pt-10 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-fuchsia-700 shadow-sm ring-1 ring-fuchsia-100">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Now inviting beta users
              </div>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Split expenses. Set goals. Win money together.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-neutral-700">
                BuddyBudget makes it effortless for roommates, couples, and besties to track shared spending and crush savings goals—with a friendly, colorful vibe.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#screenshots" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white ring-1 ring-neutral-900">
                  See it in action
                </a>
                <a href="#waitlist" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-neutral-200">
                  Join the waitlist
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-neutral-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 5 ? 'text-amber-400' : 'text-neutral-300'}`} />
                ))}
                <span className="ml-1">Loved by 1,200+ early users</span>
              </div>
            </div>
            <div id="screenshots" className="relative flex items-center justify-center">
              <Blob className="left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2" color="from-amber-400 via-rose-400 to-fuchsia-500" />
              <div className="relative grid grid-cols-3 gap-4">
                <div className="col-span-1 self-end">
                  <PhoneFrame className="rotate-[-8deg]">
                    <ScreenshotDashboard />
                  </PhoneFrame>
                </div>
                <div className="col-span-1 -mt-8">
                  <PhoneFrame className="rotate-[8deg]">
                    <ScreenshotSplit />
                  </PhoneFrame>
                </div>
                <div className="col-span-1 self-start">
                  <PhoneFrame className="rotate-[-3deg]">
                    <ScreenshotGoals />
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Friendly features for shared money</h2>
          <p className="mt-3 text-neutral-700">Beautifully simple tools to keep everyone on the same page—without spreadsheets or awkward convos.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'One-tap splits', desc: 'Add expenses in seconds and split equally, by percent, or by items.', color: 'from-fuchsia-500 to-rose-500', icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M3 5h18v2H3zM3 17h18v2H3z"/><path d="M11 8h2v8h-2z"/></svg>
            ) },
            { title: 'Shared goals', desc: 'Create savings goals together and track progress in real-time.', color: 'from-emerald-500 to-amber-500', icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2l4 4-4 4-4-4 4-4zm0 7a7 7 0 100 14 7 7 0 000-14z"/></svg>
            ) },
            { title: 'Smart reminders', desc: 'Gentle nudges to settle up—no stress, no shaming.', color: 'from-sky-500 to-violet-500', icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11a6 6 0 10-12 0v5L4 18v1h16v-1l-2-2z"/></svg>
            ) },
            { title: 'Delightful insights', desc: 'See who pays for what and keep budgets balanced and fair.', color: 'from-amber-400 to-rose-400', icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M3 13h4v8H3zM10 3h4v18h-4zM17 8h4v13h-4z"/></svg>
            ) },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How BuddyBudget works</h2>
            <div className="mt-6 space-y-5">
              {[
                { step: 1, title: 'Create a group', text: 'Invite your roomies or partner. Set a monthly budget and choose how to split.' },
                { step: 2, title: 'Add expenses', text: 'Snap a receipt or add a quick note. Splits stay fair and transparent.' },
                { step: 3, title: 'Set goals together', text: 'Pick something to save for—like a trip or sofa—and watch progress climb.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-500 text-white font-extrabold shadow-md">{s.step}</div>
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-neutral-700">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Blob className="-right-6 top-6" color="from-sky-400 via-emerald-400 to-amber-400" opacity="opacity-30" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                <div className="mb-2 text-sm font-semibold">No-stress settling</div>
                <p className="text-sm text-neutral-700">Track who owes who and settle in a tap with clear summaries.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                <div className="mb-2 text-sm font-semibold">Privacy-first</div>
                <p className="text-sm text-neutral-700">Your data is encrypted and shared only with your group.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 sm:col-span-2">
                <div className="mb-2 text-sm font-semibold">Colorful and friendly by design</div>
                <p className="text-sm text-neutral-700">A joyful interface that makes money talk feel easy and collaborative.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-fuchsia-600 via-rose-600 to-orange-500 p-1 shadow-xl">
          <div className="grid gap-8 rounded-[22px] bg-white/90 p-8 backdrop-blur sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">Be the first to know</h3>
              <p className="mt-2 text-neutral-700">Join the waitlist for iOS and Android. We’ll send a friendly note when BuddyBudget launches.</p>
              <div className="mt-4 flex items-center gap-4 text-amber-600">
                <span className="inline-flex items-center gap-1 text-sm font-semibold"><span className="text-amber-400">★</span> No spam</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold"><span className="text-amber-400">★</span> Leave anytime</span>
              </div>
            </div>
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    aria-label="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm shadow-sm ring-1 ring-neutral-200 placeholder:text-neutral-400 focus:ring-2 focus:ring-fuchsia-500"
                  />
                  <button type="submit" className="whitespace-nowrap rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white ring-1 ring-neutral-900">
                    Join waitlist
                  </button>
                </form>
              ) : (
                <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800 ring-1 ring-emerald-100">
                  Thanks! You’re on the list. We’ll reach out soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / Testimonials */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">What early users say</h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote: 'My partner and I finally stopped guessing who paid last. It’s fun to use and super clear.',
              name: 'Jules P.',
              role: 'Beta user',
            },
            {
              quote: 'Our house split is drama-free now. Goals make saving for trips actually exciting.',
              name: 'Mina R.',
              role: 'Roommate',
            },
            {
              quote: 'Love the colors and the gentle reminders. Money talk doesn’t feel heavy anymore.',
              name: 'Devon K.',
              role: 'Couple user',
            },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-rose-400" />
                <p className="text-sm text-neutral-800">“{t.quote}”</p>
              </div>
              <div className="mt-4 text-sm font-semibold">{t.name} <span className="font-normal text-neutral-500">— {t.role}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">FAQ</h2>
        <div className="mx-auto mt-8 grid gap-4">
          {[
            { q: 'Is BuddyBudget free?', a: 'BuddyBudget will offer a generous free plan and an optional Plus plan with advanced insights. During beta, it’s free.' },
            { q: 'Which platforms are supported?', a: 'iOS and Android at launch. A web companion is planned.' },
            { q: 'Can I control who sees my data?', a: 'Yes. You choose who joins each group. Your data is private and encrypted.' },
          ].map((item, i) => (
            <details key={i} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <summary className="cursor-pointer list-none text-sm font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-200/60 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-rose-500 text-white"><span className="text-sm font-black">B</span></div>
              <span className="text-sm font-bold">BuddyBudget</span>
            </div>
            <div className="text-xs text-neutral-500">© {new Date().getFullYear()} BuddyBudget. All rights reserved.</div>
            <div className="flex items-center gap-3 text-sm">
              <a className="text-neutral-600 hover:text-neutral-900" href="#">Twitter</a>
              <a className="text-neutral-600 hover:text-neutral-900" href="#">Instagram</a>
              <a className="text-neutral-600 hover:text-neutral-900" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
