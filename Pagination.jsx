import axios from 'axios';
import React, { useEffect, useState } from 'react'

// import Card from './Card';
import Page from './Page';
import Card from './CArd';
const pagination = () => {

    const API = " https://mxpertztestapi.onrender.com/api/sciencefiction";
    const [storyData, setStoryData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 8;

    console.log(storyData)
    const getData = async () => {
        const res = await axios.get(API)
        setStoryData(res.data)
    }
    useEffect(() => {
        getData()
    }, [])


    const lastPageIndex = currentPage * postPerPage;
    const firstPostIndex = lastPageIndex - postPerPage;
    const currentPost = storyData.slice(firstPostIndex, lastPageIndex);
    return (

        <div>
            <Card data={currentPost} />

            <Page
                totalPosts={storyData.length}
                postPerPage={postPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}





export default pagination;