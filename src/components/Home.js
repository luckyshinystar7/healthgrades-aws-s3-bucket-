import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">Quotes of the day</span> “Success is stumbling from failure to failure with no loss of enthusiasm.” —Winston Churchill
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
