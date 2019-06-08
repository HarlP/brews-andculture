import React from "react";
import ReactPaginate from 'react-paginate';
import Breweries from '../Views/Breweries'


export default class PageData extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      breweries: [],
      loading: true,
      error: null,
      activePage: 1,
      perPage: 20
    };
  }

  loadBreweries(){
    fetch(`https://api.openbrewerydb.org/breweries?page=${this.state.activePage}&per_page=${this.state.perPage}`)
      .then(respose => respose.json())
      .then(breweries => {
        this.setState({ breweries, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  componentDidMount() {
    this.loadBreweries();
  }

  handlePageClick = async (data: { selected: any; }) => {
    let activePage = data.selected+1;
    await this.setState({ activePage: activePage });
    this.loadBreweries();
  };

  render() {
    const { loading, breweries, error } = this.state;

    if (loading) return <div>loading</div>;

    if (error) return <div>Error</div>;

    if (breweries.length >= 1) {
      return (
        <div  className='justify-content-center'>
          <Breweries breweries = {this.state.breweries}/>
          <nav>
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              pageCount={402}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination justify-content-center'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
            />
          </nav>
        </div>
        
      )
    }

    return <div>No breweries</div>;
  }
}
