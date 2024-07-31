import { useEffect, useMemo, useState } from "react";

export default function useFetchById(id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const memoizedId = useMemo(() => id?.slice(), [id]);

  useEffect(() => {
    if (id && data.length === 0) {
      const fetchData = async () => {
        if (Array.isArray(id)) {
          const allId = id?.map((str) => parseInt(str));
          const promises = allId.map(async (singleId) => {
            const res = await fetch(
              `https://dummyjson.com/products/${singleId}`
            );
            return await res.json();
          });
          const results = await Promise.all(promises);
          // console.log(results);
          setData(results);
        } else {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const JsonData = await res.json();
          setData(JsonData);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [id, data]);
  return [data, loading];
}
