import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  author?: string
  publishedTime?: string
  modifiedTime?: string
  category?: string
  tags?: string[]
}

export function SEOHead({
  title = "Tivara Living - Holistic Wellness & Ayurvedic Products",
  description = "Discover authentic Ayurvedic products, wellness solutions, and holistic living essentials at Tivara Living. Transform your mind, body, and space naturally.",
  keywords = "ayurveda, wellness, holistic health, natural products, meditation, yoga, herbs, essential oils, dosha, chakra",
  image = "/placeholder.svg?height=630&width=1200&text=Tivara+Living",
  url = "https://tivaraliving.com",
  type = "website",
  author = "Tivara Living",
  publishedTime,
  modifiedTime,
  category,
  tags = [],
}: SEOHeadProps) {
  const fullTitle = title.includes("Tivara Living") ? title : `${title} | Tivara Living`
  const fullUrl = url.startsWith("http") ? url : `https://tivaraliving.com${url}`
  const fullImage = image.startsWith("http") ? image : `https://tivaraliving.com${image}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "product" ? "Product" : "WebSite",
    name: fullTitle,
    description: description,
    url: fullUrl,
    image: fullImage,
    author: {
      "@type": "Organization",
      name: author,
    },
    ...(type === "website" && {
      potentialAction: {
        "@type": "SearchAction",
        target: "https://tivaraliving.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
    ...(publishedTime && {
      datePublished: publishedTime,
    }),
    ...(modifiedTime && {
      dateModified: modifiedTime,
    }),
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Tivara Living" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@tivaraliving" />
      <meta name="twitter:creator" content="@tivaraliving" />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && category && <meta property="article:section" content={category} />}
      {type === "article" && tags.map((tag, index) => <meta key={index} property="article:tag" content={tag} />)}

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#059669" />

      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Tivara Living" />
    </Head>
  )
}
