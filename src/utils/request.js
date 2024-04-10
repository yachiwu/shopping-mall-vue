import axios from 'axios';

export async function request(url, { method = "GET", body, headers } = {}) {
    try {
        const response = await axios({
            method: method,
            url: url,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            data: body ? JSON.stringify(body) : undefined
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};