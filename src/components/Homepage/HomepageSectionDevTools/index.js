import clsx from 'clsx';

import Card from "/src/components/Card";

const data = {
  title: 'Browse by DevTools',
  description: null,
  cards: [
    {
      title: 'Get RBTC',
      color: 'orange',
      link: {
        title: 'Read more',
        href: 'https://rootstock.io/rbtc/',
      },
      description: (
        <>
          Explore the various ways to get RBTC using the PowPeg App, On/Off Ramps, or Exchanges.
        </>
      ),

    },
    {
      title: 'Quick Starts',
      color: 'yellow',
      link: {
        title: 'Read more',
        href: '/developers/quickstart/',
      },
      description: (
        <>
          View a repository of starter kits,
          sample codes and tutorials for creating,
          testing and deploying smart contracts on Rootstock.
        </>
      ),
    },
    {
      title: (
        <>
          EVM-compatible <br/> Tools
        </>
      ),
      color: 'cyan',
      link: {
        title: 'Read more',
        href: '/dev-tools/',
      },
      description: (
        <>
          Build and deploy faster with EVM-compatible tools and guides on Rootstock.
        </>
      ),
    },
    {
      title: 'SDKs and Integration Guides',
      color: 'pink',
      link: {
        title: 'Read more',
        href: '/developers/integrate/',
      },
      description: (
        <>
          Explore easy-to-set-up SDKs and Integration Guides.
        </>
      ),
    }
  ]
};

export default function HomepageSectionDevTools() {
  return (
    <section className={`mb-64`}>
      <div className="mb-32">
        {data.title && (
          <h2 className={`h1 mb-0`}>{data.title}</h2>
        )}
        {data.description && (
          <div className="markdown mt-12">
            {data.description}
          </div>
        )}
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-16 g-lg-24">
        {data.cards.map((item, idx) => (
          <div className={`col`} key={idx}>
            <Card index={`${idx + 1}.`} title={item.title} color={item.color} description={item.description}
                  link={item.link}/>
          </div>
        ))}
      </div>
    </section>
  );
}
