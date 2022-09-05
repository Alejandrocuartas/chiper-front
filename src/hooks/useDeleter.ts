const useDeleter = async (id: string) => {
    try {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
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

export default useDeleter;
