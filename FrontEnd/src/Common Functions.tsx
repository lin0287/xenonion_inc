import axios from "axios";

export async function fetchDestinations() {
  let destinations;
  try {
    const response = await axios.get("http://localhost:1337/api/destinations?populate=*");
    destinations = response.data.data;
    destinations = destinations.map((item: { attributes: {
        Pictures: any;
        Description: string;
        Name: string; }; id: number; }) => ({
      Name: item.attributes.Name,
      Description: item.attributes.Description,
      Picture: item.attributes.Pictures.data[0].attributes.url
    }));
    return destinations;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return []; // Return an empty array or suitable default in case of an error
  }
}
