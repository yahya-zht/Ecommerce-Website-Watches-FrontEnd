import React, { useEffect, useState } from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import ShowProductCard from "../../components/ShowProductCard";
import TopPage from "../../components/Cards/Products/TopPage";
import { useParams } from "react-router-dom";

export default function ShowProduct() {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/Products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        console.log(data.product);
      });
  }, [id]);

  return (
    <div>
      <nav>
        <NavBarFront />
      </nav>
      <section className="bg-gray-50">
        <div className="w-full   ">
          <div className="max-w-screen-xl mx-auto bg-white px-7 pt-2">
            <TopPage />
            <div className="">
              <ShowProductCard
                id={Product.id}
                Name={Product.Name}
                Description={Product.Description}
                priceOld={Product.Price_First}
                priceSale={Product.Price_Sale}
                Image={Product.Image_Product}
                link={`/ConfirmOneOrder/${Product.id}`}
              />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <FooterFront />
      </footer>
    </div>
  );
}
