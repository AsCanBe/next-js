import Head from 'next/head';

export default () => (
  <Head>
    <title>Helianthus Counselling - Needham Market &amp; Stowmarket</title>

    <meta name="description" content="I'm a BACP counsellor, offering Person-Centred Counselling to individuals experiencing depression, anxiety and/or grief, as well as Couples Counselling." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="index, nofollow" />

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
    <link rel="shortcut icon" type="image/png" href="../static/sunflower-favicon.png"/>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Helianthus Counselling",
          "logo": "https://helianthus-counselling.co.uk/images/helianthus-counselling-logo.png",
          "url": "https://helianthus-counselling.co.uk/"
        }
    `}} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "https://helianthus-counselling.co.uk/",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "07508 401223",
              "contactType": "Customer Service"
            }
          ]
        }
    `}} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115902689-1" />
    <script dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-115902689-1');
    `}} />
  </Head>
)
