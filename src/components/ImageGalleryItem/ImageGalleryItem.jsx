import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ isModalOpen: true });
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    document.body.style.overflow = 'unset';
    document.body.style.height = 'initial';

    this.setState({ isModalOpen: false });
  };

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;

    return (
      <Item>
        <a href={item.largeImageURL} onClick={this.openModal}>
          <Image src={item.webformatURL} alt={item.tags} />
        </a>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={this.closeModal}
            url={item.largeImageURL}
            alt={item.tags}
          />
        )}
      </Item>
    );
  }
}
