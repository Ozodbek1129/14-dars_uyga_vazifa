async function getProduct(){
    const data = await fetch("https://fakestoreapi.com/products")
    const prd =  await data.json()
    return prd
}
export default getProduct