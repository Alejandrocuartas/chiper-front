import React from "react";
import { mount } from "enzyme";
import ProductCard from "../../components/ProductCard";
import { Context } from "../../context";

describe("<ProductCard />", () => {
    test("Render del componente", () => {
        const product = {
            image: "Esta es la url de la foto",
            bought: true,
            name: "laptop",
            discount: 15,
            price: 1000,
        };

        const productCard = mount(
            <Context>
                <ProductCard product={product} />
            </Context>
        );

        const img = productCard.find(".card-img-top");

        expect(img.prop("src")).toEqual("Esta es la url de la foto");
    });
});
