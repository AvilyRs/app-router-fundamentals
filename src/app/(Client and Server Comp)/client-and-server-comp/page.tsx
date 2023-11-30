import { ClicksButton } from "./components/ClicksButton";

export default async function ClientAndServerComp() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://api.github.com/users/avilyre");
  const githubUser = JSON.stringify(await response.json(), null, 2);

  return (
    <pre>
      {githubUser}

      <ClicksButton />
    </pre>
  )
} 