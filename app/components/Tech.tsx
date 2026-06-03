"use client";
import { skillCategories } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	return (
		<div className="flex flex-col gap-10">
			{skillCategories.map((category) => (
				<div key={category.title} className="flex flex-col items-center">
					<h3 className="text-white text-[24px] font-bold mb-6">{category.title}</h3>
					<div className="flex flex-row flex-wrap justify-center gap-10">
						{category.skills.map((technology) => (
							<div className="w-28 h-28" key={technology.name}>
								<BallCanvas icon={technology.icon} />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
