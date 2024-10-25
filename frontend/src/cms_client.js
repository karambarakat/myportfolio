export default function cms_client(endpoint) {
    return {
        get_all: async function(input) {
            const response = await fetch(`https://localhost:1337/${endpoint}/get_all`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": `token = Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
                },
                body: JSON.stringify(input),
            });

            return response.json();
        }
    }
}
