import PropTypes from 'prop-types';
import { Component } from 'react';

import { List } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };

  componentDidUpdate = () => {
    const bodyHeight = document.body.getBoundingClientRect().height;
    window.scrollTo({ top: bodyHeight, behavior: 'smooth' });
  };

  render() {
    const { images } = this.props;
    return (
      <List>
        {images.map(item => (
          <li key={item.id}>
            <ImageGalleryItem item={item} />
          </li>
        ))}
      </List>
    );
  }
}
