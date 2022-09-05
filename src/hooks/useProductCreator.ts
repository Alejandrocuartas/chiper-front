const useProductCreator = async (formData: FormData) => {
    try {
        const options = {
            method: "POST",
            body: formData,
        };
        const res = await fetch(`${process.env.API}/api/product`, options);
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

export default useProductCreator;
