"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

//supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//define types
type Product = {
  id: number;
  product_name: string;
  price: number;
};

type Flavor = {
  id: number;
  flavor_name: string;
};

const OrderPage = () => {
  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [biscuitFlavors, setBiscuitFlavors] = useState<Flavor[]>([]);
  const [creamFlavors, setCreamFlavors] = useState<Flavor[]>([]);
  const [cakeToGoFlavors, setCakeToGoFlavors] = useState<Flavor[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchProducts();
    fetchFlavors();
  }, []);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      router.push("/login");
    } else {
      setUser(session.user);
    }
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("id, product_name, price");
    if (!error) setProducts(data || []);
  };

  const fetchFlavors = async () => {
    const { data: biscuitData } = await supabase.from("biscuit_flavors").select("*");
    const { data: creamData } = await supabase.from("cream_flavors").select("*");
    const { data: cakeToGoData } = await supabase.from("cake_to_go_options").select("*");
    setBiscuitFlavors(biscuitData || []);
    setCreamFlavors(creamData || []);
    setCakeToGoFlavors(cakeToGoData || []);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const productId = formData.get("product");
    const biscuitFlavorId = formData.get("biscuit_flavor");
    const creamFlavorId = formData.get("cream_flavor");
    const cakeToGoFlavorId = formData.get("cake_to_go_flavor");
    const quantity = 1; // for simplicity

    const selectedProduct = products.find((product) => product.id === Number(productId));
    if (!selectedProduct) return;

    try {
      //insert into `orders` table
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert([{ customer_name: user.email, total_price: selectedProduct.price }])
        .select();

      if (orderError) throw orderError;

      const orderId = orderData[0].id;

      //insert into `order_items` table
      const { error: orderItemsError } = await supabase.from("order_items").insert([
        {
          order_id: orderId,
          product_id: productId,
          biscuit_flavor_id: biscuitFlavorId || null,
          cream_flavor_id: creamFlavorId || null,
          cake_to_go_option_id: cakeToGoFlavorId || null,
          quantity,
          item_price: selectedProduct.price,
        },
      ]);

      if (orderItemsError) throw orderItemsError;

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order Your Cake</h1>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      {user && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Select Cake Type
            </label>
            <select
              id="product"
              name="product"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setSelectedProduct(Number(e.target.value))}
            >
              <option value="" disabled selected>
                Choose a cake
              </option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>

          {/* Biscuit Flavor */}
          {selectedProduct !== 4 && (
            <div>
              <label htmlFor="biscuit_flavor" className="block text-sm font-medium text-gray-700">
                Select Biscuit Flavor
              </label>
              <select
                id="biscuit_flavor"
                name="biscuit_flavor"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="" disabled selected>
                  Choose a flavor
                </option>
                {biscuitFlavors.map((flavor) => (
                  <option key={flavor.id} value={flavor.id}>
                    {flavor.flavor_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Cream Flavor */}
          {selectedProduct !== 4 && (
            <div>
              <label htmlFor="cream_flavor" className="block text-sm font-medium text-gray-700">
                Select Cream Flavor
              </label>
              <select
                id="cream_flavor"
                name="cream_flavor"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="" disabled selected>
                  Choose a flavor
                </option>
                {creamFlavors.map((flavor) => (
                  <option key={flavor.id} value={flavor.id}>
                    {flavor.flavor_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Cake To Go Flavor */}
          {selectedProduct === 4 && (
            <div>
              <label htmlFor="cake_to_go_flavor" className="block text-sm font-medium text-gray-700">
                Select Cake to Go Flavor
              </label>
              <select
                id="cake_to_go_flavor"
                name="cake_to_go_flavor"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="" disabled selected>
                  Choose a flavor
                </option>
                {cakeToGoFlavors.map((flavor) => (
                  <option key={flavor.id} value={flavor.id}>
                    {flavor.flavor_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default OrderPage;
