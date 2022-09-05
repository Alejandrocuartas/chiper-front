import * as React from "react";
import { io } from "../node_modules/socket.io-client/build/esm/index";
export type product = {
    _id: string;
    price: number;
    discount?: number;
    description: string;
    image?: string;
    bought: boolean;
    name: string;
};
export type ContextProps = {
    cart: product[];
    products: product[];
    setProducts: (param: product[]) => void;
    setCart: (param: product[]) => void;
    socket: any;
};
const defaultPoduct: product = {
    _id: "",
    price: 0,
    description: "",
    name: "",
    bought: false,
};
const defaultProps: ContextProps = {
    cart: [defaultPoduct],
    products: [defaultPoduct],
    setProducts: (param: product[]) => {},
    setCart: (param: product[]) => {},
    socket: io(),
};

const appContext = React.createContext<ContextProps>(defaultProps);
const ContextAppProvider = ({ children }) => {
    const [products, setProducts] = React.useState<product[]>([]);
    const [cart, setCart] = React.useState<product[]>([]);
    const defaultContext = {
        products,
        setProducts: (newProducts: product[]) => {
            setProducts(newProducts);
        },
        cart,
        setCart: (newCart: product[]) => {
            setCart(newCart);
        },
        socket: io(`${process.env.API}`),
    };

    return (
        <appContext.Provider value={defaultContext}>
            {children}
        </appContext.Provider>
    );
};
export const useGlobalContext = () => React.useContext(appContext);
export { ContextAppProvider, appContext };
