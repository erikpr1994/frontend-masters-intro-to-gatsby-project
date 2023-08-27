import * as React from 'react';

import { Link } from 'gatsby';

export default function AboutPage() {
  return (
    <main>
      <h1>About this site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/">Back to Home</Link>
    </main>
  );
}
