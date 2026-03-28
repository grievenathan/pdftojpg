import Link from "next/link";
import Converter from "@/components/Converter";
import Logo from "@/components/Logo";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why convert PDF to JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG images are universally supported and easy to share. Converting PDF pages to JPG makes them perfect for presentations, social media, messaging apps, or embedding in documents.",
      },
    },
    {
      "@type": "Question",
      name: "Is this tool free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no limits. Convert as many PDFs as you want, as often as you want - no sign-up required.",
      },
    },
    {
      "@type": "Question",
      name: "Are my files safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your files never leave your device. Everything is processed locally in your browser - nothing is uploaded to any server.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a file size limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each file can be up to 50MB. Very large PDFs with many pages may take a moment depending on your device.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert multi-page PDFs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Every page in your PDF is converted to a separate JPG image. You can download them individually or as a ZIP file.",
      },
    },
    {
      "@type": "Question",
      name: "What quality are the JPG images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pages are rendered at 2x scale for crisp, high-resolution output. The JPG quality is set to 92% for an excellent balance of quality and file size.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="text-[15px] font-bold tracking-tight text-gray-900">
              PDF To JPG
            </span>
          </div>
          <span className="hidden text-sm text-muted sm:block">
            Free &middot; Fast &middot; Private
          </span>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pb-10 pt-16 sm:pt-24 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-muted">
              Your files never leave your device
            </span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Convert PDF to JPG
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Drop your PDFs below. Every page is converted to a high-quality JPG
            image - instantly, in your browser.
          </p>
        </section>

        {/* Converter */}
        <section className="pb-20">
          <Converter />
        </section>

        {/* Features */}
        <section className="pb-20">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              }
              title="Private"
              description="Files stay on your device. Nothing is uploaded - everything is processed locally in your browser."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              }
              title="Instant"
              description="No server round-trips. Conversions happen in milliseconds, powered by your browser."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 6v12.75c0 1.242 1.008 2.25 2.25 2.25z" />
                </svg>
              }
              title="High quality"
              description="Every page is rendered at 2x resolution for crisp, sharp images you can use anywhere."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-px overflow-hidden rounded-xl border border-border">
            <FaqItem
              question="Why convert PDF to JPG?"
              answer="JPG images are universally supported and easy to share. Converting PDF pages to JPG makes them perfect for presentations, social media, messaging apps, or embedding in documents."
            />
            <FaqItem
              question="Is this tool free?"
              answer="Yes, completely free with no limits. Convert as many PDFs as you want, as often as you want - no sign-up required."
            />
            <FaqItem
              question="Are my files safe?"
              answer="Your files never leave your device. Everything is processed locally in your browser - nothing is uploaded to any server. Close the tab and your files are gone from memory."
            />
            <FaqItem
              question="Is there a file size limit?"
              answer="Each file can be up to 50MB. Very large PDFs with many pages may take a moment depending on your device."
            />
            <FaqItem
              question="Can I convert multi-page PDFs?"
              answer="Yes! Every page in your PDF is converted to a separate JPG image. You can download them individually or as a ZIP file."
            />
            <FaqItem
              question="What quality are the JPG images?"
              answer="Pages are rendered at 2x scale for crisp, high-resolution output. The JPG quality is set to 92% for an excellent balance of quality and file size."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} pdftojpg.co.uk &middot; Powered by{" "}
              <a
                href="https://crestconvert.com/pdf-to-jpg"
                className="text-muted hover:text-gray-900 transition-colors"
              >
                Crest Convert
              </a>
            </p>
            <Link
              href="/privacy"
              className="text-sm text-muted hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-surface">
      <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-gray-900 hover:bg-surface-hover transition-colors">
        {question}
        <svg
          className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </summary>
      <div className="px-6 pb-4 text-sm leading-relaxed text-muted">
        {answer}
      </div>
    </details>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-6">
      <div className="mb-3 text-muted">
        {icon}
      </div>
      <h3 className="mb-1 text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
