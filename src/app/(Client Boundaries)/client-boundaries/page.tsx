import { Fragment } from "react"

import { ClienComponentTest } from "./components/ClienComponentTest";
import { ServerComponentTest } from "./components/ServerComponentTest";

export default function ClientBoundaries() {
  return (
    <Fragment>
      <h1>Client Boundaries</h1>

      <ClienComponentTest>
        <ServerComponentTest />
      </ClienComponentTest>
    </Fragment>
  )
}