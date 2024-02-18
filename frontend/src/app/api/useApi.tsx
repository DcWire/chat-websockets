"use client";
import { useState } from "react";

export default (apiFunc: Function) => {
  const [data, setData] = useState(null);
  const [error, setError]: any = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      const data = await result.json();
      setData(data);
    } catch (err) {
      setError(err || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
