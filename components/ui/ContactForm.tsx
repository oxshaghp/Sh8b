"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = await response.json();

      if (!response.ok || !payload?.success) {
        const message =
          payload?.message ?? t("toast.error", { defaultValue: "Error" });
        throw new Error(message);
      }

      toast.success(t("toast.success"));
      setFormState(initialState);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : t("toast.error", { defaultValue: "Error" })
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-6 rounded-2xl border border-border p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="space-y-1">
        <Label htmlFor="contact-name">{t("form.name")}</Label>
        <Input
          id="contact-name"
          name="name"
          placeholder={t("form.namePlaceholder")}
          autoComplete="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="contact-email">{t("form.email")}</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder={t("form.emailPlaceholder")}
          autoComplete="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="contact-message">{t("form.message")}</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder={t("form.messagePlaceholder")}
          value={formState.message}
          onChange={handleChange}
          required
        />
      </div>

      <p className="text-xs text-muted-foreground">{t("form.helper")}</p>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? t("form.submitting") : t("form.submit")}
      </Button>
    </form>
  );
}
