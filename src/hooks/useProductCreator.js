const useProductCreator = async (formData) => {
    try {
        const options = {
            method: "POST",
            body: formData,
        };
        const res = await fetch(`${process.env.API}/api/product`, options);
        if (!res.ok) {
            throw new Error(res.status);
        }
        const response = await res.json();
        return response.products;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default useProductCreator;
