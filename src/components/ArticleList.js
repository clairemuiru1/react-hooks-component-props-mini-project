import React from 'react'

function ArticleList() {
  return (
    <main>
        {post.map((post)=>
        (<postItem
        key={post.id}
        title={post.title}
        date ={post.date}
        preview={post.preview}
        time={post.time}
        ))}
    </main>
  )
}

export default ArticleList