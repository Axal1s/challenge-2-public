import SortSearchFilter from "../components/SortSearchFilter";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import loadAnimation from "../assets/Dual Ring@1.25x-1.0s-200px-200px.gif";

const BASE_URL = "https://server.axalis-project.online";

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [pageInfo, setPageInfo] = useState({
    total: 0,
    size: 0,
    totalPage: 0,
    currentPage: 1,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/pub/products?search=${search}&sort=${sort}&filter=${filter}&page=${pageInfo.currentPage}`
        );

        setPageInfo({
          ...pageInfo,
          total: data.result.total,
          size: data.result.size,
          totalPage: data.result.totalPage,
        });

        setProducts(data.result.data);
      } catch (error) {
        Toastify({
          text: error.message,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#C81D11",
          },
        }).showToast();
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [pageInfo.currentPage]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/pub/products?search=${search}&sort=${sort}&filter=${filter}&page=${pageInfo.currentPage}`
        );

        setPageInfo({
          ...pageInfo,
          total: data.result.total,
          size: data.result.size,
          currentPage: 1,
          totalPage: data.result.totalPage,
        });
        setProducts(data.result.data);
      } catch (error) {
        Toastify({
          text: error.message,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#C81D11",
          },
        }).showToast();
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [sort, filter, search]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(`${BASE_URL}/categories`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcxMTg2NzM4OX0.-N5-0n9U30DHdPXSMri3N9ihOoh7iJt2BwKfUd0HH8M",
        },
      });

      setCategories(data.data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <SortSearchFilter
        categories={categories}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
      {loading ? (
        <>
          <div className="flex flex-row justify-center items-center pt-8">
            <img src={loadAnimation} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="divider divider-secondary"></div>
          <section
            id="product-content-container"
            className="grid grid-cols-5 gap-4 pt-4 px-4"
          >
            {products.map((product, index) => {
              return <Card key={index} product={product} />;
            })}
          </section>
          <Pagination pageInfo={pageInfo} setPageInfo={setPageInfo} />
        </>
      )}
    </>
  );
}
