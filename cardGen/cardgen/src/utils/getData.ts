import axios from "axios";

export const getDataFromDB = async () => {
  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fonts/latin`
    );
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};
