
// You have to use async to use data fetch inside a Server component
export default async function Fetch() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://api.github.com/users/avilyre");
  const githubUser = JSON.stringify(await response.json(), null, 2);

  return (
    <pre>
      {githubUser}
    </pre>
  )
}