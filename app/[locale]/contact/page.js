import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";
import { contactFaqItems, siteLinks } from "@/lib/data";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <main className="container m-auto space-y-16 px-6 pb-24">
      <section className="grid gap-12 rounded-3xl border border-border p-8 shadow-sm md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-primary">
            {t("hero.badge")}
          </p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("hero.description")}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href={siteLinks.email}>{t("hero.primaryAction")}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={siteLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.secondaryAction")}
              </a>
            </Button>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="space-y-6">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-primary">
            {t("faq.badge")}
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t("faq.title")}
          </h2>
          <p className="text-base text-muted-foreground md:w-3/4">
            {t("faq.description")}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full rounded-2xl border border-border p-2 md:p-4"
          defaultValue={contactFaqItems[0]?.id}
        >
          {contactFaqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-base font-semibold">
                {t(`faq.items.${item.id}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed">
                {t(`faq.items.${item.id}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
