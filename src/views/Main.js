import React, { useState } from 'react';
import { fetchBlogs } from '../services/blogs';
import { useEffect } from 'react';

import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
    const [blogs, setBlogs] = useState([]);
    //const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetchBlogs();
            setBlogs(resp);
        };
        fetchData();
    }, []);


}