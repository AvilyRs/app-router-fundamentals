export async function LongAwaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <h1>Long Await Component Finished!</h1>
  )
}