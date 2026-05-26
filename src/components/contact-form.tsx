"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { propertyTypes, serviceTypes } from "@/lib/site-data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  propertyType: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const isComplete = useMemo(
    () => form.name && form.email && form.phone && form.serviceType && form.propertyType && form.message,
    [form],
  );

  function setField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Please enter a phone number.";
    if (!form.serviceType) nextErrors.serviceType = "Please choose a service type.";
    if (!form.propertyType) nextErrors.propertyType = "Please choose a property type.";
    if (form.message.trim().length < 10) {
      nextErrors.message = "Please include at least 10 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/5 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <Input id="name" value={form.name} onChange={(event) => setField("name", event.target.value)} placeholder="Your name" />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input id="email" type="email" value={form.email} onChange={(event) => setField("email", event.target.value)} placeholder="you@example.com" />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <Input id="phone" type="tel" value={form.phone} onChange={(event) => setField("phone", event.target.value)} placeholder="248-585-2808" />
        </Field>
        <Field id="serviceType" label="Service Type" error={errors.serviceType}>
          <Select value={form.serviceType} onValueChange={(value) => setField("serviceType", value)}>
            <SelectTrigger id="serviceType">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field id="propertyType" label="Property Type" error={errors.propertyType}>
          <Select value={form.propertyType} onValueChange={(value) => setField("propertyType", value)}>
            <SelectTrigger id="propertyType">
              <SelectValue placeholder="Choose a property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label="Message" error={errors.message}>
            <Textarea
              id="message"
              value={form.message}
              onChange={(event) => setField("message", event.target.value)}
              placeholder="Tell us about the property, service need, timing, and any urgent details."
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">
          For urgent 24/7 outdoor maintenance needs, call 248-585-2808.
        </p>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
          <Button type="submit" size="lg" disabled={!isComplete}>
            <Send aria-hidden="true" />
            Submit Request
          </Button>
        </motion.div>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"
          role="status"
        >
          <CheckCircle2 className="mt-0.5 size-5 text-emerald-700" aria-hidden="true" />
          <p className="text-sm leading-6">
            Thanks. Your request has been captured on this site.
          </p>
        </motion.div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
