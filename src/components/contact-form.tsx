'use client';

import { useState, useTransition } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const submitting = status === 'sending' || isPending;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = (await response.json()) as { message?: string };
      startTransition(() => {
        setForm(initialState);
        setStatus('success');
        setMessage(data.message ?? 'Message sent successfully.');
      });
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Connect this route to your preferred backend service.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-slate-300">
        Message
        <textarea
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="min-h-36 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
          placeholder="Tell me what you want to build, collaborate on, or hire me for."
          required
        />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-200 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Sending...' : 'Send message'}
        </button>
        <p className={`text-sm ${status === 'error' ? 'text-rose-300' : 'text-slate-400'}`}>{message}</p>
      </div>
    </form>
  );
}
