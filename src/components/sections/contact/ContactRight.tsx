'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactRight: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )

      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          setStatus('❌ Failed to send.');
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-3xl text-black w-full md:text-[70px]  leading-snug">
          Let’s Talk! <br />
          Message me to get in touch.
        </h1>

      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 md:mt-20 gap-6 flex-grow justify-start"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-500 text-base py-3"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-500 text-base py-3"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border-b text-black border-gray-400 focus:outline-none focus:border-black placeholder-gray-500 text-base py-3 resize-none"
          rows={6}
          required
        />
        <button
          type="submit"
          className="w-full text-base uppercase border border-black bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-200"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p className="text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};
