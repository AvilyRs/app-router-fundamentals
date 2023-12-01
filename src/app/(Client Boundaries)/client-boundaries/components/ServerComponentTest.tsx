import { Fragment } from "react";

export async function ServerComponentTest() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <Fragment>
      <h1>Is a Server Component</h1>
    </Fragment>
  )
}