'use client'

import { Fragment, useState } from "react";

interface ClientComponentTestProps {
  children?: React.ReactNode;
}

export function ClienComponentTest({ children }: ClientComponentTestProps) {
  const [clicks, setClicks] = useState(0);

  function handleClicks() {
    setClicks(state => state + 1);
  }

  return (
    <Fragment>
      <p>Is a Client Component</p>
      <button onClick={handleClicks}>Clicks {clicks}</button>

      Client Component Children:
      <p>
        Server Component:
      </p>
      {children}
    </Fragment>
  )
}