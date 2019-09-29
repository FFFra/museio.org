import React from 'react';
import FeaturedCard from './FeaturedStoriesCard/FeaturedCard'

export default function FeaturedList(props) {

  return props.stories.map(story =>
    <div>
      <FeaturedCard
        image={story.photo}
        title={story.title}
        duration={story.duration}
        slug={story.slug}
      />
    </div>
  )
}
