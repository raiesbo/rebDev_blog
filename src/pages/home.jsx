import React from "react";
import { PostMansonry } from '../components/common';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';

export default function Home () {
    return (
        <div className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMansonry posts={trending} columns={3} />
            </div>
        </div>
    )
}