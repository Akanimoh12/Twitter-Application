import React from 'react'
import Post from './Post'
import UsersPost from './UsersPost'
import PostTesting from './PostTesting'

export default function ForYou() {
  return (
    <div className=' text-white h-auto border-gray-800 border-r-2'>
      {/* <PostTesting/> */}
      <Post/>
      <UsersPost/>
    </div>
  )
}
