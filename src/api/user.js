export const get = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (!response.ok) {
        return {
            success: false,
            data: {},
        };
    }

    return {
        success: true,
        data
    }
}