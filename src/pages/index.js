import * as React from 'react';

import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/about">About page</Link>
    </main>
  );
}
