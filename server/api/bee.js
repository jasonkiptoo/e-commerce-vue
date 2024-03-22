export default defineEventHandler(async(event)=>{


    // const { name } = useQuery(event)

    // // //handle post
    // const {age} = await useBody(event)

    // fetchh data with api key

    const {currencyAPI}=useRuntimeConfig()
    const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyAPI}`)

    return data
})