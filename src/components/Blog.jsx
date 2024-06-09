import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const Blog = () => {
  const [products, setProducts] = useState([]);

  function LoadProducts() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(() => {
    LoadProducts();
  }, []);

  return (
    <>
      <div className="max-w-[1340px] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Navbar />
        <div className="md:grid md:grid-cols-4 px-2 py-2 mx-2 my-2">
          {products.map((product) => {
            return (
              <>
                <div className=" hover:scale-110 duration-1000  md:col-span-1 flex justify-center mt-6 " key={product}>
                  <Card className=" w-72 h-72">
                  <Card.Text className="font-bold" >{product.id}</Card.Text>
                    <Card.Img variant="top" className=" ms-14 w-40 h-40 flex justify-center align-content-center" src={product.image} />
                    <Card.Body>
                      <Card.Title className="w-60  h-32 overflow-auto">{product.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
