import { GenericComponentType } from "@/types/generic-type";
import Button from "@/components/UIComponents/Button";
import { useEffect, useState } from "react";

import MusicData from '@/components/MusicController/music-data.json';

const MusicController: React.FunctionComponent<GenericComponentType> = ({
    style,
    id,
    className
}, props) => {

    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        const RandomMusicTrack = MusicData[Math.floor((Math.random()*MusicData.length))]?.fileName;
        let MusicPlayer = new Audio(`/music/${RandomMusicTrack}`);

        function playMusic() {
            MusicPlayer.play();
        }

        function stopMusic() {
            MusicPlayer.remove();
        }
    

        isMusicPlaying ? stopMusic() : playMusic();

    });

    return (
        <Button {...props}
            className={className}
            id={id}
            style={style}
            type={null}
            onClick={() => {
                setIsMusicPlaying(!isMusicPlaying);
            }}
        >
            BG Music {isMusicPlaying ? "On" : "Off"}
        </Button>
    )
};

export { MusicController };