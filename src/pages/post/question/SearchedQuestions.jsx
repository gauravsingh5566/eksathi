import { api } from 'api/api';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import Questions from './components/Questions';
import SearchResults from './components/SearchResults';
import Sidebar from './components/Sidebar';

const SearchedQuestions = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('q');
    const [result, setResult] = useState([]);

    const getSearchResults = async () => {
        try {
            const res = await api.get(`/search?keyword=${search}`);
            console.log("Result Res: ", res);
            if (res.status == 200) {
                setResult(res.data.result);
                console.log("Result: ", res.data.result);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    useEffect(() => {
        console.log("Query : ", search);
        getSearchResults();
    }, [])
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 pr-0">
                        <LeftSidebar />
                    </div>
                    {/* <div className="col col-12"> */}
                    <SearchResults title={"Search Results"} data={result} keyword={search} />
                    {/* </div> */}
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchedQuestions;