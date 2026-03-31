import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Convert PDF to JPG - 3 Free Methods (2026 Guide)",
  description:
    "Learn how to convert PDF to JPG for free. Step-by-step guide covering online tools, Mac, and Windows methods. No software to install - convert in your browser instantly.",
  keywords: [
    "how to convert pdf to jpg",
    "pdf to jpg",
    "convert pdf to image",
    "pdf to jpeg",
    "free pdf to jpg converter",
    "change pdf to jpg",
    "turn pdf to jpg",
    "save pdf as jpg",
  ],
  openGraph: {
    title: "How to Convert PDF to JPG - 3 Free Methods (2026 Guide)",
    description:
      "Learn how to convert PDF to JPG for free using your browser, Mac, or Windows. No sign-up or software required.",
    url: "https://pdftojpg.co.uk/how-to-convert-pdf-to-jpg",
    siteName: "PDF To JPG",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Convert PDF to JPG - 3 Free Methods (2026 Guide)",
    description:
      "Learn how to convert PDF to JPG for free using your browser, Mac, or Windows.",
  },
  alternates: {
    canonical: "https://pdftojpg.co.uk/how-to-convert-pdf-to-jpg",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Convert PDF to JPG - 3 Free Methods",
  description:
    "A step-by-step guide to converting PDF files to JPG images using free online tools, Mac Preview, and Windows.",
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  author: {
    "@type": "Organization",
    name: "PDF To JPG",
    url: "https://pdftojpg.co.uk",
  },
  publisher: {
    "@type": "Organization",
    name: "PDF To JPG",
    url: "https://pdftojpg.co.uk",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pdftojpg.co.uk/how-to-convert-pdf-to-jpg",
  },
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Convert PDF to JPG Online",
  description:
    "Convert PDF files to JPG images instantly in your browser with no software to install.",
  step: [
    {
      "@type": "HowToStep",
      name: "Open the converter",
      text: "Go to pdftojpg.co.uk in your browser.",
    },
    {
      "@type": "HowToStep",
      name: "Upload your PDF",
      text: "Drag and drop your PDF onto the page, or click to browse and select a file.",
    },
    {
      "@type": "HowToStep",
      name: "Convert",
      text: "Click the Convert button. Each page is converted to a high-quality JPG image in seconds.",
    },
    {
      "@type": "HowToStep",
      name: "Download",
      text: "Download individual images or click Download All to get a ZIP file with every page.",
    },
  ],
};

export default function HowToConvertPdfToJpg() {
  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleStructuredData, howToStructuredData]),
        }}
      />

      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="text-[15px] font-bold tracking-tight text-black">
              PDF To JPG
            </span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <article>
          <header className="mb-12">
            <p className="mb-3 text-sm font-medium text-muted">Guide</p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              How to Convert PDF to JPG
            </h1>
            <p className="text-base leading-relaxed text-muted">
              Whether you need to share a single page on social media, embed an
              image in a presentation, or simply want a more portable format -
              converting PDF to JPG is one of the most common file tasks around.
              Here are three free ways to do it.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-12 rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 text-sm font-semibold text-black">In this guide</p>
            <ol className="space-y-2 text-sm text-muted">
              <li>
                <a href="#convert-online" className="hover:text-black transition-colors">
                  1. Convert PDF to JPG online (fastest method)
                </a>
              </li>
              <li>
                <a href="#convert-mac" className="hover:text-black transition-colors">
                  2. Convert PDF to JPG on Mac
                </a>
              </li>
              <li>
                <a href="#convert-windows" className="hover:text-black transition-colors">
                  3. Convert PDF to JPG on Windows
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-black transition-colors">
                  4. Tips for the best results
                </a>
              </li>
              <li>
                <a href="#why-convert" className="hover:text-black transition-colors">
                  5. Why convert PDF to JPG?
                </a>
              </li>
              <li>
                <a href="#other-converters" className="hover:text-black transition-colors">
                  Other free converters
                </a>
              </li>
            </ol>
          </nav>

          <div className="space-y-12">
            {/* Method 1 */}
            <Section
              id="convert-online"
              number="1"
              title="Convert PDF to JPG online (fastest method)"
            >
              <p>
                The quickest way to convert a PDF to JPG is to use a free online
                tool like{" "}
                <Link
                  href="/"
                  className="font-medium text-black underline decoration-border underline-offset-2 hover:decoration-black transition-colors"
                >
                  pdftojpg.co.uk
                </Link>
                . No software to install, no account to create - just open the
                page and drop your file.
              </p>

              <ol className="mt-4 space-y-3 text-muted">
                <NumberedItem n={1}>
                  Go to{" "}
                  <Link
                    href="/"
                    className="font-medium text-black underline decoration-border underline-offset-2 hover:decoration-black transition-colors"
                  >
                    pdftojpg.co.uk
                  </Link>{" "}
                  in any browser.
                </NumberedItem>
                <NumberedItem n={2}>
                  Drag and drop your PDF onto the page, or click to browse and
                  select a file.
                </NumberedItem>
                <NumberedItem n={3}>
                  Click <strong className="text-black">Convert</strong>. Every
                  page is turned into a high-quality JPG in seconds.
                </NumberedItem>
                <NumberedItem n={4}>
                  Download individual images or hit{" "}
                  <strong className="text-black">Download All</strong> to get
                  them as a ZIP.
                </NumberedItem>
              </ol>

              <Callout>
                Your files never leave your device. The conversion happens
                entirely in your browser - nothing is uploaded to a server.
              </Callout>
            </Section>

            {/* Method 2 */}
            <Section id="convert-mac" title="Convert PDF to JPG on Mac" number="2">
              <p>
                If you are on a Mac, the built-in Preview app can export PDF
                pages as JPG images without any extra software.
              </p>

              <ol className="mt-4 space-y-3 text-muted">
                <NumberedItem n={1}>
                  Open your PDF in <strong className="text-black">Preview</strong>{" "}
                  (right-click the file and choose Open With &gt; Preview).
                </NumberedItem>
                <NumberedItem n={2}>
                  Go to <strong className="text-black">File &gt; Export</strong>.
                </NumberedItem>
                <NumberedItem n={3}>
                  In the Format dropdown, select{" "}
                  <strong className="text-black">JPEG</strong>.
                </NumberedItem>
                <NumberedItem n={4}>
                  Adjust the quality slider if needed, then click Save.
                </NumberedItem>
              </ol>

              <p className="mt-4">
                The downside is that Preview only exports one page at a time. If
                your PDF has multiple pages, you will need to repeat this for
                each one - or use the online method above to batch convert the
                whole document at once.
              </p>
            </Section>

            {/* Method 3 */}
            <Section id="convert-windows" title="Convert PDF to JPG on Windows" number="3">
              <p>
                Windows does not have a built-in PDF-to-JPG converter, but there
                are a couple of straightforward options.
              </p>

              <h3 className="mt-5 mb-2 text-sm font-semibold text-black">
                Using the Snipping Tool
              </h3>
              <p>
                For a quick one-off, open your PDF in any viewer, then use the
                Snipping Tool (press Win + Shift + S) to capture the area you
                need and save it as a JPG. This works well for a single page but
                is not practical for longer documents.
              </p>

              <h3 className="mt-5 mb-2 text-sm font-semibold text-black">
                Using an online converter
              </h3>
              <p>
                For multi-page PDFs, an online tool is the easiest route. Open{" "}
                <Link
                  href="/"
                  className="font-medium text-black underline decoration-border underline-offset-2 hover:decoration-black transition-colors"
                >
                  pdftojpg.co.uk
                </Link>{" "}
                in Edge or Chrome, drop your file, and download the converted
                images. No software to install and it works on any version of
                Windows.
              </p>
            </Section>

            {/* Tips */}
            <Section id="tips" title="Tips for the best results" number="4">
              <ul className="space-y-3 text-muted">
                <ListItem>
                  <strong className="text-black">Keep file sizes down.</strong>{" "}
                  JPG is a compressed format, so very large PDFs with lots of
                  graphics will produce bigger image files. If you need smaller
                  files, consider reducing the PDF size before converting.
                </ListItem>
                <ListItem>
                  <strong className="text-black">Check the resolution.</strong>{" "}
                  Our converter renders pages at 2x scale by default, giving you
                  sharp images suitable for printing and presentations. If you
                  just need a quick preview, the default quality is more than
                  enough.
                </ListItem>
                <ListItem>
                  <strong className="text-black">
                    Use JPG for photos, PNG for text.
                  </strong>{" "}
                  JPG is ideal for pages with photographs or complex graphics.
                  If your PDF is mostly text and diagrams, PNG may give you
                  crisper results - though JPG works well in most cases.
                </ListItem>
              </ul>
            </Section>

            {/* Why convert */}
            <Section id="why-convert" title="Why convert PDF to JPG?" number="5">
              <p>
                PDF is great for preserving document layout, but it is not
                always the most convenient format. Here are some common reasons
                people convert PDF to JPG:
              </p>
              <ul className="mt-4 space-y-3 text-muted">
                <ListItem>
                  <strong className="text-black">Social media.</strong> Most
                  platforms do not support PDF uploads. Converting to JPG lets
                  you share document pages directly.
                </ListItem>
                <ListItem>
                  <strong className="text-black">Presentations.</strong>{" "}
                  Embedding a JPG into PowerPoint or Google Slides is easier and
                  more reliable than trying to insert a PDF.
                </ListItem>
                <ListItem>
                  <strong className="text-black">Messaging.</strong> Sending a
                  JPG over WhatsApp, Slack, or email is quicker and shows an
                  inline preview - no need for the recipient to open a separate
                  app.
                </ListItem>
                <ListItem>
                  <strong className="text-black">Websites.</strong> JPG images
                  load fast and work everywhere, making them a better choice for
                  web content than embedded PDFs.
                </ListItem>
                <ListItem>
                  <strong className="text-black">Compatibility.</strong> Every
                  device and operating system can display a JPG. Not everyone
                  has a PDF reader installed, but everyone can view an image.
                </ListItem>
              </ul>
            </Section>

            {/* Related tools */}
            <section id="other-converters">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-black sm:text-2xl">
                Other free converters
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                Need a different conversion? Try one of our other free tools -
                all browser-based, private, and no sign-up required.
              </p>
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                <ToolCard
                  href="https://pngtojpg.co.uk"
                  from="PNG"
                  to="JPG"
                  description="Convert PNG images to compressed JPG files."
                />
                <ToolCard
                  href="https://jpgtopng.co.uk"
                  from="JPG"
                  to="PNG"
                  description="Convert JPG images to lossless PNG format."
                />
                <ToolCard
                  href="https://pdftopng.co.uk"
                  from="PDF"
                  to="PNG"
                  description="Convert PDF pages to crisp PNG images."
                />
                <ToolCard
                  href="https://pngtopdf.co.uk"
                  from="PNG"
                  to="PDF"
                  description="Combine PNG images into a single PDF."
                />
                <ToolCard
                  href="https://jpgtopdf.co.uk"
                  from="JPG"
                  to="PDF"
                  description="Combine JPG images into a single PDF."
                />
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-xl border border-border bg-surface p-8 text-center">
              <h2 className="mb-2 text-lg font-semibold tracking-tight text-black">
                Ready to convert?
              </h2>
              <p className="mb-5 text-sm text-muted">
                Drop your PDF and get high-quality JPGs in seconds - free,
                private, and no sign-up required.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Convert PDF to JPG
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} pdftojpg.co.uk &middot; Powered
              by{" "}
              <a
                href="https://crestconvert.com/pdf-to-jpg"
                className="text-muted hover:text-black transition-colors"
              >
                Crest Convert
              </a>
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-muted hover:text-black transition-colors"
              >
                &larr; Back to converter
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id?: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-black sm:text-2xl">
        <span className="text-muted">{number}.</span> {title}
      </h2>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function NumberedItem({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white">
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
      <span>{children}</span>
    </li>
  );
}

function ToolCard({
  href,
  from,
  to,
  description,
}: {
  href: string;
  from: string;
  to: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col bg-surface p-5 transition-colors hover:bg-surface-hover"
    >
      <div className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-black">
        <span>{from}</span>
        <svg
          className="h-3.5 w-3.5 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
        <span>{to}</span>
      </div>
      <p className="text-xs leading-relaxed text-muted">{description}</p>
    </a>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-sm text-emerald-800">{children}</p>
    </div>
  );
}
