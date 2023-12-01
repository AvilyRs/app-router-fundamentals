export async function AwaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <h1>Await Component Finished!</h1>
  )
}