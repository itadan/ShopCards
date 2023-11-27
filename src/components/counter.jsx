import React, { useState } from "react";

const Counter = () => {
  const initialProducts = [
    { id: 1, name: "Вилка", count: 0, price: 10 },
    { id: 2, name: "Ручка", count: 0, price: 20 },
    { id: 3, name: "Хлеб", count: 0, price: 15 },
    { id: 4, name: "Телефон", count: 0, price: 1500 },
    { id: 5, name: "Пицца", count: 0, price: 15 },
    { id: 6, name: "Машина", count: 0, price: 12100 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleIncrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const handleDecrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const handleReset = () => {
    setProducts(initialProducts);
  };

  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.count * product.price,
      0
    );
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {products.map((product) => (
            <div key={product.id} className="card m-2 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">{product.name}</h5>
                  <span className="badge bg-secondary me-2">
                    Количество: {product.count}
                  </span>
                  <span className="badge bg-info">
                    ₽{product.price.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="card mt-3 p-3 text-center">
            <h4>Итого: ₽{calculateTotalPrice().toFixed(2)}</h4>
            <button className="btn btn-danger" onClick={handleReset}>
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
