import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const Search = () => {
	const countryList = [
		{
			id: 0,
			name: 'Dubai'
		},
		{
			id: 1,
			name: 'Abu Dhabi'
		},
		{
			id: 2,
			name: 'Fujairah'
		},
		{
			id: 3,
			name: 'Sharjah'
		},
	]
	
	const categoryList = [
		{
			id: 0,
			name: 'Handyman services'
		},
		{
			id: 1,
			name: 'Hauling services'
		},
		{
			id: 2,
			name: 'Help moving'
		},
		{
			id: 3,
			name: 'Handyman'
		},
	]
	
	const countryFormatResult = (item) => {
		return (
			<ul>
				<li>
					<strong>UAE - </strong>
					<span>{item.name}</span>
				</li>
			</ul>
		)
	}
	
	const categoryFormatResult = (item) => {
		return (
			<ul>
				<li>
					<strong>UAE - </strong>
					<span>{item.name}</span>
				</li>
			</ul>
		)
	}
	

	
	return(
		<div id="search-holder" className="search-holder">
			<div className="search-block">
				<div className="search-block-field">
					<ReactSearchAutocomplete
						items={categoryList}
						formatResult={categoryFormatResult}
						autoFocus
						placeholder={"Search for a service"}
						styling={
							{
								borderRadius: "5px 0 0 5px",
							}
						}
					/>
				</div>
				<div className="search-block-field location-style">
					<ReactSearchAutocomplete
						showIcon={false}
						items={countryList}
						formatResult={countryFormatResult}
						autoFocus
						placeholder={"Where"}
						styling={
							{
								borderRadius: "0px",
							}
						}
					/>
				</div>
				<button type="button">Search</button>
			</div>
		</div>
	)

}

export default Search;















