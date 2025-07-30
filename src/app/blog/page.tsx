'use client';

import React, { useEffect, useState } from 'react';
import { BlogPost } from '@/types';
import { getBlogPosts } from '@/lib/services';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await getBlogPosts();
        console.log('Fetched blog posts:', data);
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string | number) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#003566' }}>
              Our Blog
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#FFC300' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#003566' }}>
              Our Blog
            </h1>
            <p className="mt-4 text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#003566' }}>
            Our Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated with the latest insights, trends, and innovations in technology.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.objectId} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <div className="flex items-center gap-x-4 text-xs mb-4">
                      <time className="text-gray-500">
                        {post.publishedAt ? formatDate(post.publishedAt) : 'No date'}
                      </time>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-600">{post.author}</span>
                    </div>
                    
                    <div className="group relative">
                      <h3 className="text-lg font-semibold leading-6 mb-3" style={{ color: '#003566' }}>
                        <a href="#" className="hover:underline">
                          {post.title}
                        </a>
                      </h3>
                      <p className="text-sm leading-6 text-gray-600 mb-4 line-clamp-3">
                        {post.content.length > 150 
                          ? `${post.content.substring(0, 150)}...` 
                          : post.content
                        }
                      </p>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: '#FFC300',
                              color: '#001D3D'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6"
                        style={{ color: '#FFC300' }}
                      >
                        Read more <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">Debug: {blogPosts.length} blog posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;