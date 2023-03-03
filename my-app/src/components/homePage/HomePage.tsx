import React, { useEffect } from "react";
import Search from '../common/Search'
import MusicList from "../musicList/MusicList";
import {useGetMusicList} from '../../customHooks/useGetMusicList'

const HomePage: React.FC = () => {
    const {fetchMusicList, musicCategories}= useGetMusicList();
    useEffect(()=>{
        fetchMusicList()
    },[])
    return (
        <div>
            <Search placeholder="Search Music by category" label="Seacrh music" categories={musicCategories}/>
            <MusicList/>
        </div>
    )
}

export default HomePage;