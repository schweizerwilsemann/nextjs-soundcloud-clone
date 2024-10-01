
import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";

import { sendRequest } from "@/utils/api";

export default async function HomePage() {

  const chills = await sendRequest<IBackendRes<ItrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {category: 'CHILL', limit: '10'},
  })
  const workouts = await sendRequest<IBackendRes<ItrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {category: 'WORKOUT', limit: '10'},
  })
  const parties = await sendRequest<IBackendRes<ItrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {category: 'PARTY', limit: '10'},
  })

  return (
    <Container>
      <MainSlider 
        data={chills?.data ? chills.data : []}
        title={"Top Chills"}
      />
      <MainSlider 
        data={workouts?.data ? workouts.data : []}
        title={"Top Workouts"}

      />
      <MainSlider 
       data={parties?.data ? parties.data : []}
       title={"Top Parties"}
      />
    </Container>
  );
}
