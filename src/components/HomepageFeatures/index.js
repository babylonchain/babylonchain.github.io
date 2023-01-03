import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introduction',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <> 
        Uncover the secrets of how Babylon operates.
        <li>Babylon Overview</li><li>Architecture</li><li>Primary Use Case: Securing PoS Chains</li><li>Key Components</li>
      </>
    ),
  },
  {
    title: 'Installation Guide',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Find out how to kick off your Babylon journey here.
        <li>Golang Installation</li><li>Repository Cloning</li><li>Babylon Initialization</li>
      </>
    ),
  },
  {
    title: 'Setting Up a Full Node',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Learn how to create a fully functioning node for Babylon.
        <li>Prerequisites For Installation</li><li>Babylon Installation</li><li>Node Creation</li><li>Genesis File Downloading</li><li>Configuration Modification</li><li>Node Execution</li>
      </>
    ),
  },
  {
    title: 'Modules',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        Discover the modules we offer.
        <li>Epoching Module</li><li>Checkpointing Module</li><li>BTC Light Client</li><li>BTC Checkpoint</li><li>CZ Concierge</li>
      </>
    ),
  },
  {
    title: 'Node Operators',
    Svg: require('@site/static/img/5.svg').default,
    description: (
      <>
        Master the skills of managing and configuring nodes!
        <li>Node Configuration</li><li>Nodes Management</li>
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('@site/static/img/6.svg').default,
    description: (
      <>
        Use these resources to enhance your understanding.
        <li>Mainet</li><li>Testnet</li>
      </>
    ),
  },
  {
    title: 'Video Guides',
    Svg: require('@site/static/img/7.svg').default,
    description: (
      <>
        Benefit from our easy-to-follow video guides.
      </>
    ),
  },
  {
    title: 'gRPC Gateway (REST API)',
    Svg: require('@site/static/img/8.svg').default,
    description: (
      <>
        Have a look at our Rest API components!
        <li>Epoching</li><li>Checkpointing</li><li>BTC Light Client</li><li>BTC Checkpoint</li><li>ZoneConcierge</li>
      </>
    ),
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/9.svg').default,
    description: (
      <>
        Get the support you need to succeed with our dedicated team of experts!
      </>
    ),
  },
  {
    title: 'Error Handling',
    Svg: require('@site/static/img/10.svg').default,
    description: (
      <>
        Streamline your workflow with our error handling guide.
      </>
    ),
  },
  {
    title: 'CLI Command',
    Svg: require('@site/static/img/11.svg').default,
    description: (
      <>
        A detailed guide on CLI commands.
        <li>Command Syntax</li><li>Purpose</li><li>Examples</li><li>Options</li><li>Options Inherited From Parent Commands</li>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className="text--left padding-horiz--md">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
