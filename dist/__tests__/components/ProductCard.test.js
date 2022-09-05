import React from "react";
import { mount } from "enzyme";
import ProductCard from "../../components/ProductCard";
import { Context } from "../../context";
describe("<ProductCard />", function () {
    test("Render del componente", function () {
        var product = {
            image: "Esta es la url de la foto",
            bought: true,
            name: "laptop",
            discount: 15,
            price: 1000,
        };
        var productCard = mount(React.createElement(Context, null,
            React.createElement(ProductCard, { product: product })));
        var img = productCard.find(".card-img-top");
        expect(img.prop("src")).toEqual("Esta es la url de la foto");
    });
});
//# sourceMappingURL=ProductCard.test.js.map