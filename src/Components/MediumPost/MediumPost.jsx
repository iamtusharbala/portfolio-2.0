import './MediumPost.css'

import React, { useEffect, useState } from 'react'

const MediumPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iam_tusharbala')
            .then(response => response.json())
            .then(data => {
                setPosts(data.items);
            })
            .catch(error => console.error('Error fetching Medium posts:', error));
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="medium-posts pt-5">
            <h4 className='section-heading text-center'>Latest Medium Posts</h4>
            <div className="posts-container">
                {posts.map(post => (
                    <div className="post" key={post.guid}>
                        <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
                        <p className='post-category'>{post.categories.map(category => `${category}, `)}</p>
                        <p>{formatDate(post.pubDate)}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.contentSnippet }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MediumPost