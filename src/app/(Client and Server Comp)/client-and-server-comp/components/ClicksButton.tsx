'use client'

import { useState } from "react";

export function ClicksButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(state => state + 1);
  }

  return (
  <button onClick={handleClick}>Clicks: {clicks}</button>
  );
}