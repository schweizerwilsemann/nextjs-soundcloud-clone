

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AppBar, Container } from "@mui/material";
import { useHasMounted } from '@/utils/customHooks';


const Player = () => {

    const hasMounted = useHasMounted();
    if(!hasMounted){
        return(
            <></>
        )
    }
    return(
        <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0, background:'#fefefe' }}>
            <Container sx={{display: 'flex', gap: 10}}>
                <AudioPlayer
                    autoPlay
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                    style={{
                        boxShadow: 'none'
                    }}
                />
                <div className="" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "start",
                    justifyContent: 'center',
                    minWidth: "auto",
                    border: '2px solid #cccc',
                    borderRadius: '1rem',
                    padding: '1rem'
                }}>
                    <div className="" style={{color: '#ccc'}}>
                        Eminem
                    </div>
                    <div className="" style={{color: 'black'}}>
                        Mockingbird
                    </div>
                </div>
            </Container>
        </AppBar>
    )
};

export default Player;