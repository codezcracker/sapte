import CategoryNav from "../menu/category-nav";

const Category = () => {
	return (
		<section id="category-section" className="category-section">
			<div className="holder">
				<CategoryNav iconVisible={true} subMenuVisible={true} />
			</div>
		</section>
	)
}

export default Category;
