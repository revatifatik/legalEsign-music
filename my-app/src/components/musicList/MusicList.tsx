
import React from "react";
import { useGetMusicList } from "../../customHooks/useGetMusicList";
import MusicCard from "./MusicCard";

const Musiclist: React.FC = () => {
    const { musicListResponse } = useGetMusicList();
    console.log(">>>>>>>>>>>",musicListResponse)
    return (
      
        <div>
            {
            musicListResponse?.map((list: any, index:any) => {
                return (<div key={index}> <MusicCard imgSrc={list["im:image"][0].label} title={list.title.label} category={list.category?.attributes?.term}></MusicCard></div>)
            })
        }

        </div>
    )
}

export default Musiclist