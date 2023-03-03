import axios from "axios"
import { useState } from "react";
import { createGlobalState } from 'react-hooks-global-state';


const initialState = { musicCategories: [], musicListResponse:[] };
const { useGlobalState } = createGlobalState(initialState);


export const useGetMusicList = () => {
    const [musicListResponse, setMusicListResponse ] = useGlobalState('musicListResponse')
    const [ musicCategories, setMusicCategories] =useGlobalState('musicCategories')
    const fetchMusicList = () => {
        
        axios({
            method: "GET",
            url:'https://itunes.apple.com/us/rss/topalbums/limit=50/json' ,
            headers: {
              accept: "application/json"
            },
          })
            .then(function (res) {
              if (res) {
                const list = res?.data?.feed?.entry;
                
                console.log(list)
                setMusicListResponse((prev:any)=> [...prev,...list]);
                getCategories(list)
              }
            
            })
            .catch(function (error) {
              console.log("errorcode", error?.response?.status);
            });
    }
    const getCategories = (list: Array<any>) => {
       const filtered = list.map((listItem)=>{
        return listItem?.category?.attributes?.term
       })
       setMusicCategories((prev:any)=> [...prev,...filtered])
    }
    return {
        musicCategories,
        fetchMusicList,
        musicListResponse
    }
}