import type { Locale } from "@/lib/i18n";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang as Locale}>
      <body>{children}</body>
    </html>
  );
}
