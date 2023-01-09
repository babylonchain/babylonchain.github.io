import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import one from '../../../static/img/firstgif.gif';
import two from '../../../static/img/installationgif.gif';
import three from '../../../static/img/settingnode.gif';
import four from '../../../static/img/modules.gif';
import five from '../../../static/img/node.gif';
import six from '../../../static/img/resources.gif';
import seven from '../../../static/img/videoguides.gif';
import eight from '../../../static/img/grpc.gif';
import nine from '../../../static/img/support.gif';
import ten from '../../../static/img/error.gif';
import eleven from '../../../static/img/cli.gif';

const FeatureList = [
  {
    title: 'Introduction',
    image: one,
    description: (
      <> 
        Uncover the secrets of how Babylon operates.
        <li>Babylon Overview</li><li>Architecture</li><li>Primary Use Case: Securing PoS Chains</li><li>Key Components</li>
      </>
    ),
  },
  {
    title: 'Installation Guide',
    image: two,
    description: (
      <>
        Find out how to kick off your Babylon journey here.
        <li>Golang Installation</li><li>Repository Cloning</li><li>Babylon Initialization</li>
      </>
    ),
  },
  {
    title: 'Setting Up a Full Node',
    image: three,
    description: (
      <>
        Learn how to create a fully functioning node for Babylon.
        <li>Prerequisites For Installation</li><li>Babylon Installation</li><li>Node Creation</li><li>Genesis File Downloading</li><li>Configuration Modification</li><li>Node Execution</li>
      </>
    ),
  },
  {
    title: 'Modules',
    image: four,
    description: (
      <>
        Discover the modules we offer.
        <li>Epoching Module</li><li>Checkpointing Module</li><li>BTC Light Client</li><li>BTC Checkpoint</li><li>CZ Concierge</li>
      </>
    ),
  },
  {
    title: 'Node Operators',
    image: five,
    description: (
      <>
        Master the skills of managing and configuring nodes!
        <li>Node Configuration</li><li>Nodes Management</li>
      </>
    ),
  },
  {
    title: 'Resources',
    image: six,
    description: (
      <>
        Use these resources to enhance your understanding.
        <li>Mainet</li><li>Testnet</li>
      </>
    ),
  },
  {
    title: 'Video Guides',
    image: seven,
    description: (
      <>
        Benefit from our easy-to-follow video guides.
      </>
    ),
  },
  {
    title: 'gRPC Gateway (REST API)',
    image: eight,
    description: (
      <>
        Have a look at our Rest API components!
        <li>Epoching</li><li>Checkpointing</li><li>BTC Light Client</li><li>BTC Checkpoint</li><li>ZoneConcierge</li>
      </>
    ),
  },
  {
    title: 'Support',
    image: nine,
    description: (
      <>
        Get the support you need to succeed with our dedicated team of experts!
      </>
    ),
  },
  {
    title: 'Error Handling',
    image: ten,
    description: (
      <>
        Streamline your workflow with our error handling guide.
      </>
    ),
  },
  {
    title: 'CLI Command',
    image: eleven,
    description: (
      <>
        A detailed guide on CLI commands.
        <li>Command Syntax</li><li>Purpose</li><li>Examples</li><li>Options</li><li>Options Inherited From Parent Commands</li>
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={image}/>
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
