import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Helianthus Counselling - Needham &amp; Stowmarket, Suffolk</title>

          <meta name="description" content="I am a BACP counsellor, offering Person-Centred Counselling/Psychotherapy to adults experiencing depression, anxiety and/or grief, in addition to Couples Counselling.">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="robots" content="index, nofollow">

          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
          <link rel="shortcut icon" type="image/png" href="favicon.png">

          <script type="application/ld+json">
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Helianthus Counselling",
            "logo": "https://helianthus-counselling.co.uk/images/helianthus-counselling-logo.png",
            "url": "https://helianthus-counselling.co.uk/"
          }
          </script>
          <script type="application/ld+json">
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "https://helianthus-counselling.co.uk/",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "07508 401223",
                "contactType": "Customer Service",
              },
            ],
          }
          </script>

          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115902689-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-115902689-1');
          </script>
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
