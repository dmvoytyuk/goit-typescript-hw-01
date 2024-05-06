import axios from "axios";

interface todo {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<todo>("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  console.log(res);
});
