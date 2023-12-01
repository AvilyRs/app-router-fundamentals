import { Fragment, Suspense } from "react";

import { AwaitComponent } from "./components/await-component";
import { LongAwaitComponent } from "./components/long-await-component";

export default function UsingSuspenseInteadOfLoading() {
  return (
    <Fragment>
      <h1>Using Suspense Instead of Loading</h1>

    <Suspense fallback={<p>Just Await Component</p>}>
      <AwaitComponent />
    </Suspense>

    <Suspense fallback={<p>Just Long Await Component</p>}>
      <LongAwaitComponent />
    </Suspense>
    </Fragment>
  )
}