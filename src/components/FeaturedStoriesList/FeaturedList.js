import React from 'react';
import FeaturedCard from './FeaturedStoriesCard/FeaturedCard'

export default function FeaturedList(props) {

  console.log(props.stories);

  //filter featured stories done
  //montar o component
  //dar map nos features exibindo:
  //name, data, artist, duration

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
