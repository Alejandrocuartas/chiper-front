const useDataUpdater = async (id: string, body: object) => {
    try {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        const res = await fetch(
            `${process.env.API}/api/product/${id}`,
            options
        );
        if (!res.ok) {
            const resText = await res.json()
            throw new Error(resText.error);
        }
        const response = await res.json();
        return response.products;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default useDataUpdater;
