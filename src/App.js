import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import GalleryList from './components/GalleryList';
import GalleryDetails from './components/GalleryDetails';
import error404 from './components/404';
import { listGallery } from './api-gallery';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gallery: [],
			section: 'hot',
			sort: 'viral',
			showWindow: 'day',
			showViral: 'true'
		};
	}

	fetchGallery = () => {
		const { section, sort, showWindow, showViral } = this.state;
		const url = `/${section}/${sort}/${showWindow}?showViral=${showViral}`;

		return listGallery(url).then((result) => {
			if (result.error) console.log(result.error);
			else this.setState({ gallery: result.data });
		});
	};

	componentDidMount() {
		this.fetchGallery();
	}

	handlerChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	clickSubmit = (e) => {
		e.preventDefault();
		console.log('handle');

		this.fetchGallery();
	};

	render() {
		return (
			<BrowserRouter>
				<Header name='Eurowings gallery' />
				<div className='container'>
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<GalleryList
									selectSection={this.state.section}
									selectSort={this.state.sort}
									selectWindow={this.state.showWindow}
									SelectShowViral={this.state.showViral}
									handlerChange={this.handlerChange}
									handleSubmit={this.clickSubmit}
									gallery={this.state.gallery}
								/>
							)}
						/>
						<Route
							path='/details/:detailId'
							render={({ match }) => (
								<GalleryDetails
									{...this.state.gallery.find(
										(item) => item.id === match.params.detailId
									)}
								/>
							)}
						/>
						<Route component={error404} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
