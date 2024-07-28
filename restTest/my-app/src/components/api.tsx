import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null); // Generics で受け取った型を data の型とする
  const [isLoading, setLoading] = useState(true); //API読み込み完了フラグ
  const [isError, setError] = useState(false); //エラー状態

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url); // 引数で受け取った url を axios で fetch する
        //成功時の処理
        console.log(res)
        setData(res.data);
      } catch (err) {
        //エラー時の処理
        console.error(err);
        setError(true);
      } finally {
        //デフォルト処理
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  return { data, isLoading, isError };
};