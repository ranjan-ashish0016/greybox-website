import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { CONTACT, CASE_STUDIES, SERVICES } from '@/data/content';

const SUGGESTED = [
  'What does GreyBox do?',
  'What services do you offer?',
  'Show me your case studies.',
  'What is CRO?',
  'How does your SEO strategy work?',
  'How can I contact GreyBox?',
];

const KB = [
  {
    keys: ['what does greybox', 'about greybox', 'who are you', 'what is greybox'],
    answer:
      'GreyBox Technologies is an online business growth consulting company, founded in 2009. We help medium to large enterprises scale up their profits, market visibility, visitor engagement and conversions. We are a small, driven company of experts who have changed the game for many clients — including Microsoft, Google, SAP, Philips, EY, Motorola, Times Internet, Bajaj FinServ and Hexaware.',
  },
  {
    keys: ['service', 'offer', 'expertise', 'what can you do'],
    answer: `Our areas of expertise are: ${SERVICES.map((s) => s.title).join(', ')}. Each engagement is built on strategy, measurement and thorough implementation — see the Case Studies page for the results.`,
  },
  {
    keys: ['help my business', 'grow', 'help me'],
    answer:
      'We start from your business objective, then apply years of insight, strategy and thorough implementation across traffic monetization, email marketing, product creation, SEO, CRO and paid search. Clients have seen results like a 701% organic traffic uplift and Rs. 13.45 ROI on every rupee of email spend. Tell us your challenge via the Contact page and we will get back to you.',
  },
  {
    keys: ['case stud', 'results', 'proof', 'clients'],
    answer: `We have five published case studies with measured results: ${CASE_STUDIES.map(
      (c) => `${c.title} (${c.tagline})`,
    ).join(' ')} Visit the Case Studies page for the full Problem → Strategy → Implementation → Result breakdowns.`,
  },
  {
    keys: ['cro', 'conversion rate', 'conversion optimization'],
    answer:
      'CRO (Conversion Rate Optimization) is the research-driven improvement of your funnels and user experience so more visitors become customers. In one e-commerce engagement, improving the checkout process produced an overall win of 147% in the funnel conversion rate.',
  },
  {
    keys: ['seo', 'search engine', 'organic'],
    answer:
      'Our Strategic SEO starts with a comprehensive site audit, then rebuilds the information and navigation architecture and the content and engagement strategy. For a not-for-profit Olympiad site, this produced a 701% uplift in organic traffic.',
  },
  {
    keys: ['contact', 'phone', 'email', 'address', 'reach', 'talk'],
    answer: `You can reach us at ${CONTACT.phone} or ${CONTACT.email}. Our address is ${CONTACT.address}. Or use the form on the Contact page and we will get back to you soon.`,
  },
  {
    keys: ['founder', 'manuj', 'rajeev', 'team', 'who runs'],
    answer:
      'GreyBox was founded by Manuj Bajaj (CEO) — business marketing coach, AdWords certified trainer and Amazon best-selling author of 26 books — and Rajeev Sharma (CTO) — web analyst, digital marketing consultant and coder with almost two decades of experience. See the About us page for full profiles.',
  },
  {
    keys: ['award', 'certificate', 'partner', 'certified'],
    answer:
      'GreyBox is a certified Google Partner, Google AdWords certified (Advertising Fundamentals, Advanced Search, Advanced Display) and certified in Google Analytics. Details are on the Awards and Certificates page.',
  },
  {
    keys: ['email marketing', 'email roi'],
    answer:
      'We build email marketing strategies with measurement designed in from day one — open rates, click rates and resulting sales, integrated with your e-commerce platform. One campaign produced an ROI of Rs. 13.45 on every rupee spent.',
  },
  {
    keys: ['ppc', 'adwords', 'sem', 'paid'],
    answer:
      'As a Google Partner, we run certified AdWords / PPC / SEM programs. Clients report over 35% growth in visit-to-lead conversions and over 30% reduction in cost per lead.',
  },
];

function findAnswer(text) {
  const q = text.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some((k) => q.includes(k))) return entry.answer;
  }
  return 'I can help with GreyBox’s services, case studies, founders, awards and contact details. Try one of the suggested questions, or ask about SEO, CRO, email marketing or PPC.';
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I’m the GreyBox assistant. Ask me anything about our services, case studies or how we can help your business grow.' },
  ]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const send = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((prev) => [...prev, { role: 'user', content: q }, { role: 'assistant', content: findAnswer(q) }]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close GreyBox assistant' : 'Open GreyBox assistant'}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-600/30 transition-all hover:bg-sky-700 hover:scale-105 active:scale-95"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="GreyBox AI assistant"
          className="fixed bottom-[5.5rem] right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-3 text-white">
            <Sparkles size={18} className="text-lime-400" aria-hidden="true" />
            <div>
              <p className="font-display text-sm font-bold">GreyBox Assistant</p>
              <p className="text-xs text-slate-300">Answers from our real website content</p>
            </div>
          </div>
          <div ref={bodyRef} className="max-h-80 flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 border-t border-slate-100 px-3 pt-3">
            {SUGGESTED.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 transition-colors hover:border-sky-300 hover:text-sky-700"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            className="flex items-center gap-2 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about GreyBox…"
              aria-label="Ask the GreyBox assistant"
              className="h-10 flex-1 rounded-lg border border-slate-200 px-3 text-sm focus:border-sky-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white transition-colors hover:bg-sky-700 active:scale-95"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
