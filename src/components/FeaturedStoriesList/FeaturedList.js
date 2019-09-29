import React from 'react';
import FeaturedCard from './FeaturedStoriesCard/FeaturedCard'

export default function FeaturedList(props) {

  let featuredList = props.stories.map(story =>
    <div key={story.id}>
      {story.title !== undefined ?
        <FeaturedCard
          image={story.photo}
          title={story.title}
          duration={story.duration}
          slug={story.slug}
        /> : null}
    </div>
  )
  return <>{featuredList}</>
}
