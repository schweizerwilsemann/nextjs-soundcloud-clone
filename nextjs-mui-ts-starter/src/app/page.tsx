
import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
export default async function HomePage() {


  const response = await fetch(`http://localhost:8000/api/v1/tracks/top`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      category: 'CHILL',
      limit: '10'
    })
  })

  console.log(">>>> check response server: ", await response.json());
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </Container>
  );
}
