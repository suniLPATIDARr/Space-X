export async function get(url) {
    console.log("=======",`${url}`);
    return await fetch(`${url}`);
   }
   