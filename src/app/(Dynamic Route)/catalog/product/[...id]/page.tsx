export default function Product(props: any) {
  console.log(props);

  return (
    <>
      <h1>Product</h1>
      <h2>{JSON.stringify(props)}</h2>
    </>
  )
}