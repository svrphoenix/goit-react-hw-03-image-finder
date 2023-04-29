import { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { readPixabayImages, ITEMS_PER_PAGE } from 'services/pixabay-api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    loadMore: false,
    isLoading: false,
    // error: null,
  };

  handleSubmit = ({ searchQuery }) => {
    this.setState({
      query: searchQuery.trim(),
      images: [],
      page: 1,
      loadMore: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.loadImages();
    }
  }

  loadImages = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true, error: null });

    try {
      const imagesObject = await readPixabayImages(query, page);
      const imagesArray = imagesObject.hits;

      if (imagesObject.totalHits === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      const isPagination = imagesObject.totalHits > page * ITEMS_PER_PAGE;

      this.setState(state => {
        return {
          images: [...state.images, ...imagesArray],
          loadMore: isPagination,
        };
      });
    } catch (error) {
      toast.error('Error happend on server. Please, reload webpage.');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleMoreButtonClick = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { images, loadMore, isLoading } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />

        {(images.length>0)&&<ImageGallery images={images} />}
        {isLoading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4d87a9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        {!isLoading && loadMore && (
          <Button onClick={this.handleMoreButtonClick} />
        )}
        <Toaster position="top-right" reverseOrder={false} />
        <GlobalStyle />
      </Layout>
    );
  }
}
