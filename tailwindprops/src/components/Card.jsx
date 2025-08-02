import React from 'react'

export const Card = ({username = "KK", post = "Student"}) => {
    // console.log(props)
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?_gl=1*1pcpyb8*_ga*Nzc4MTg5MjAyLjE3NTQwNzczNjI.*_ga_8JE65Q40S6*czE3NTQwNzczNjEkbzEkZzEkdDE3NTQwNzczNjQkajU3JGwwJGgw" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam culpa odio error illo, perferendis aspernatur consectetur, sit, alias temporibus nesciunt? Voluptatem dignissimos maiores porro! Cupiditate voluptate molestiae at in.
      </p>
    </blockquote>
    <figcaption>
      <div>
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
