async function main(id) {
    const response = await fetch('https://kitsu.io/api/edge/anime');
    const data = await response.json();
    console.log(data)
}
main()
