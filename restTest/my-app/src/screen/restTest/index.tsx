import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../components/api"

const Home = () => {
    // 初期値をnullに設定
    const { data, isLoading, isError } = useFetch<[]>('http://localhost:3001/posts');

    if (isLoading) return <div>Loading...</div>;//読み込み中だったらLoading...を表示
    if (isError) return <div>Error occurred</div>;//エラーを表示

    return (
        <div>
            <h1>Home</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}

export default Home;
