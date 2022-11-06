import Search from "./search";

const Banner = () => (
	<section id="banner-section" className="banner-section" style="background-image: url('../../assets/images/background.jpg')" >
		<div className="section-position">
			<div className="section-table">
				<div className="section-table-cell">
					<div className="section-table-data">
						<h2>Find the best professionals in your community</h2>
						<p>Discover hundreds of services and get the perfect match for your needs</p>
						<Search />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Banner;




