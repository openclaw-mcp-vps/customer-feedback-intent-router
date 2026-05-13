export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Feedback Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route feedback to the{' '}
          <span className="text-[#58a6ff]">right teams</span>{' '}using AI
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically classify customer feedback and route it to product, support, or sales — with urgency scoring so nothing critical slips through.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $59/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No setup fees. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Intent Classification', 'Urgency Scoring', 'Team Routing', 'OpenAI Powered', 'Supabase Storage', 'Instant Alerts'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Receive Feedback', desc: 'Collect feedback via API, email, or widget from any source.' },
            { step: '02', title: 'AI Analysis', desc: 'OpenAI classifies intent and scores urgency from 1–10 instantly.' },
            { step: '03', title: 'Auto-Route', desc: 'Feedback lands in the right team inbox with full context attached.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold mb-2 tracking-widest">{item.step}</div>
              <div className="text-white font-semibold mb-2">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$59</div>
          <div className="text-[#6e7681] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited feedback routing',
              'AI intent classification',
              'Urgency scoring (1–10)',
              'Product, support & sales routing',
              'Slack & email notifications',
              'Analytics dashboard',
              'API access',
              'Priority support',
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI routing work?',
              a: 'We use OpenAI to analyze the text of each feedback submission, classify its intent (bug report, feature request, billing issue, etc.), and assign an urgency score. Based on these signals, feedback is routed to the correct team automatically.',
            },
            {
              q: 'Which teams can feedback be routed to?',
              a: 'Out of the box we support product, support, and sales teams. Each team gets a dedicated inbox with filtered views and notification settings you can customize.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. You can cancel anytime from your billing portal. Your access continues until the end of the current billing period with no additional charges.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        © {new Date().getFullYear()} FeedbackRouter. All rights reserved.
      </footer>
    </main>
  )
}
