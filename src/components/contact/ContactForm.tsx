"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  "SEO",
  "Performance Marketing",
  "CRM Integration",
  "Social Media Marketing",
  "Web Development",
  "App Development",
];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  website: string;
  message: string;
  company: string; // honeypot — hidden from humans, bots fill it
};

const inputClasses =
  "w-full appearance-none rounded-xl border border-black/30 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Stagger the field groups in as the form scrolls into view.
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cf-field]",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none reverse" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  // Spring the confirmation card in after submit.
  useEffect(() => {
    if (!submitted || !successRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      successRef.current,
      { scale: 0.9, opacity: 0, y: 16 },
      { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: "back.out(1.7)" }
    );
  }, [submitted]);

  const onSubmit = (values: FormValues) => {
    if (values.company) return; // honeypot tripped — silently drop
    // TODO (Phase 5): POST to /api/contact and deliver via Resend/Nodemailer.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="flex flex-col items-center gap-4 rounded-2xl border border-black/5 bg-white p-8 text-center shadow-xl shadow-brand-900/5 sm:p-12"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-ink">Thank you!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Your message has been received. Our team will get back to you within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-black/5 bg-white p-5 shadow-xl shadow-brand-900/5 sm:p-8 lg:p-10"
    >
      <div className="space-y-5">
        <div data-cf-field="">
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-ink">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            className={inputClasses}
            {...register("fullName", { required: "Please enter your full name" })}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div data-cf-field="">
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/60" />
            <input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              className={`${inputClasses} pl-10`}
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div data-cf-field="">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            autoComplete="tel"
            className={inputClasses}
            {...register("phone")}
          />
        </div>

        <fieldset data-cf-field="">
          <legend className="mb-2.5 text-sm font-semibold text-ink">
            Please select the service(s) you&apos;d like to book:
          </legend>
          <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2">
            {SERVICES.map((service) => (
              <label
                key={service}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-ink"
              >
                <input
                  type="checkbox"
                  value={service}
                  className="h-4 w-4 rounded border-black/25 accent-brand-blue"
                  {...register("services")}
                />
                {service}
              </label>
            ))}
          </div>
        </fieldset>

        <div data-cf-field="">
          <label htmlFor="website" className="mb-1.5 block text-sm font-semibold text-ink">
            Website/Social URL <span className="text-red-500">*</span>
          </label>
          <input
            id="website"
            type="url"
            placeholder="Web/Social URL goes here"
            aria-invalid={!!errors.website}
            className={inputClasses}
            {...register("website", {
              required: "Please enter your website or social profile URL",
            })}
          />
          {errors.website && (
            <p className="mt-1.5 text-xs text-red-500">{errors.website.message}</p>
          )}
        </div>

        <div data-cf-field="">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
            Questions or Comments
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Message"
            className={`${inputClasses} resize-y`}
            {...register("message")}
          />
        </div>

        {/* Honeypot: invisible to humans, catnip for bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("company")}
        />

        <div data-cf-field="" className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-black px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-950 disabled:opacity-60 sm:w-auto sm:min-w-[240px]"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </form>
  );
}
