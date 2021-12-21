import Head from 'next/head';

type SeoProps = {
    title: string,
    description?: string
}

const SEO: React.FC<SeoProps> = ({ title, description}) => {
    return (
        <Head>
        <title>{`Simba Transfer :: ${title}`}</title>
        <meta name="description" content={description} />
        <meta
        name="viewport"
        content="width=device-width,maximum-scale=1,initial-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta
        name="og:description"
        property="og:description"
        content={description}
        />
        <meta property="og:site_name" content="Proper Noun" />
    </Head>
  );
}

export default SEO;