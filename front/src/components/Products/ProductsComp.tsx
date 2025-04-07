import { useState } from "react";

export default function ProductsComp() {
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    size: '',
    location: '',
    price_br: '',
    price_us: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Size:
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price BR:
            <input
              type="text"
              name="price_br"
              value={formData.price_br}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price US:
            <input
              type="text"
              name="price_us"
              value={formData.price_us}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
