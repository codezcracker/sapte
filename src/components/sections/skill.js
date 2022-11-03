import {SkillsProgress} from "../menu/skills-nav";

const Skill = () => (
	<section id="skills-section" className="skills-section normal-height fix-bg" style="background-image: url('../../assets/images/skill-bg.jpg')">
		<div className="holder">
			<div className="heading heading-dark">
				<h2>Technologies</h2>
				<p>Currently we are working on the following technologies.</p>
			</div>
			<SkillsProgress />
		</div>
	</section>
);

export default Skill;
