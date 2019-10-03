import React, { Component } from 'react';
import { ArtContext } from '../context';
import Header from '../components/Header/Header';
import ErrorButton from '../components/ErrorButton/ErrorButton';
import RelatedArt from '../components/RelatedArt/RelatedArt';

export default class StoriesDetails extends

  Component {
  state = {
    slug: this.props.match.params.slug
  }

  static contextType = ArtContext

  render() {
    const { getStoriesDetails, location, piece } = this.context
    const detail = getStoriesDetails(this.state.slug);



    const getLocation = (location, slug) => {
      let filterLocation = location.flat().filter(loc => loc.slug === slug
      ).map(item => item.museumName)
      return <div><h4>{filterLocation}</h4></div>
    }

    let bestExperienced = getLocation(location, this.state.slug)


    if (!detail || detail.length === 0) {
      return (
        <div>
          <ErrorButton
            error='No data found'
            data={detail}
            route='/'
            text='Back to home'
          />
        </div>
      )
    }


    const { title, storyAuthor, audioEmbed, story, duration, storyLink } = detail

    function renderAudioEmbed() { return { __html: audioEmbed }; };


    return <>
      <div>
        <Header
          title={title}
          details={`by ${storyAuthor}`}
        />
        <h2>Listen to the Story: <span>{`${duration} minutes`}</span></h2>
        <div dangerouslySetInnerHTML={renderAudioEmbed()} />
        <h2>Description</h2>
        <p>{story}</p>
        <span>via </span><a href={storyLink}>{storyLink}</a>
      </div>
      <div>
        <h2>Best experienced at:</h2>
        <h4>{/*{bestExperienced.map(item => item.museumName)
        }*/}</h4>
        {bestExperienced}
        <h2>Related Art & Stories</h2>
        <RelatedArt
          story={detail}
          art={piece}
        />
      </div>
    </>
  }
}
