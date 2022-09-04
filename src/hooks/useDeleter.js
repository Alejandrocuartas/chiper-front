const useDeleter = async (id) => {
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
            throw new Error(res.status);
        }
        const response = await res.json();
        return response.products;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default useDeleter;
