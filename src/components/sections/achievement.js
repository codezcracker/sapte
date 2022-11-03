import AchievementNav from "../menu/achievement-nav";

const Achievement = () => (
	<section id="achievement-section" className="achievement-section normal-height fix-bg" style="background-image: url('../../assets/images/achievment-bg.jpg')">
		<div className="holder">
			<div className="heading heading-dark">
				<h2>Achievement</h2>
				<p>We have achieved our best.</p>
			</div>
			<AchievementNav />
		</div>
	</section>
);

export default Achievement;
