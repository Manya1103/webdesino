"use client";

import { Star, Award, Trophy, Medal } from "lucide-react";

const awards = [
	{ title: "Best Web Development Agency 2024", org: "Delhi Business Awards", icon: Trophy },
	{ title: "Top SEO Services Provider", org: "Digital India Awards", icon: Award },
	{ title: "Excellence in Digital Marketing", org: "Marketing Excellence Awards", icon: Medal },
	{ title: "Innovation in Web Design", org: "Design Excellence Awards", icon: Star },
];

export default function AwardsSection() {
	return (
		<section className="py-16 lg:py-24 bg-gradient-to-br from-teal/5 via-white to-orange/5 relative overflow-hidden">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-10 left-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-float" />
				<div
					className="absolute bottom-10 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "1.5s" }}
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Animated scrolling ticker */}
					<div className="mb-12 overflow-hidden">
						<div className="flex gap-8 animate-scroll-horizontal">
							{["Awards", "Awards", "Awards", "Awards", "Awards", "Awards", "Awards", "Awards"].map((text, idx) => (
								<div
									key={idx}
									className="flex-shrink-0 text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange to-teal opacity-10"
								>
									{text}
								</div>
							))}
						</div>
					</div>

					<h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 animate-scale-in">
						<span className="gradient-text">Our Work Speaks Louder</span>
					</h2>
					<h2
						className="text-4xl lg:text-6xl font-bold text-center mb-6 animate-scale-in"
						style={{ animationDelay: "0.1s" }}
					>
						<span className="text-teal">with Awards</span>
					</h2>
					<p
						className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto animate-fade-in"
						style={{ animationDelay: "0.3s" }}
					>
						Recognized for professional work and high-quality digital solutions that set industry benchmarks. Award-winning web
						development and SEO services trusted by 100+ businesses in Delhi NCR.
					</p>

					{/* Awards Grid with 3D Effect */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						{awards.map((award, idx) => {
							const IconComponent = award.icon;
							return (
								<div
									key={idx}
									className="group relative glass-strong rounded-3xl overflow-hidden hover-lift cursor-pointer transition-all duration-500 animate-scale-in"
									style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
								>
									{/* Gradient background on hover */}
									<div className="absolute inset-0 bg-gradient-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<div className="relative p-8">
										{/* Icon/Image Container */}
										<div className="aspect-square mb-6 bg-gradient-to-br from-orange/20 to-teal/20 rounded-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
											<div className="absolute inset-0 flex items-center justify-center">
												<IconComponent className="w-20 h-20 text-orange group-hover:text-white transition-colors" />
											</div>
											{/* Rotating gradient overlay */}
											<div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-orange/20 to-teal/0 animate-rotate-slow opacity-50" />
										</div>

										<div className="text-center">
											<p className="font-bold text-teal group-hover:text-white transition-colors mb-2">
												{award.title}
											</p>
											<p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors">
												{award.org}
											</p>
										</div>
									</div>

									{/* Corner decoration */}
									<div className="absolute top-4 right-4 w-3 h-3 bg-orange rounded-full opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity" />
								</div>
							);
						})}
					</div>

					{/* Certifications Banner */}
					<div
						className="glass-strong rounded-3xl p-8 lg:p-12 text-center animate-fade-in"
						style={{ animationDelay: "0.8s" }}
					>
						<h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-6">
							Certified & Recognized By
						</h3>
						<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
							{["Google Partner", "WordPress Certified", "Shopify Partner", "SEMRush Certified", "DesignRush Accredited"].map(
								(cert, idx) => (
									<div
										key={idx}
										className="px-6 py-4 glass rounded-2xl hover-lift cursor-pointer font-semibold text-gray-700 hover:text-orange transition-all"
									>
										{cert}
									</div>
								)
							)}
						</div>
					</div>

					{/* Stats */}
					<div
						className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in"
						style={{ animationDelay: "1s" }}
					>
						<div className="text-center">
							<div className="text-4xl font-bold gradient-text-orange mb-2">10+</div>
							<div className="text-sm text-gray-600">Global Certifications</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold gradient-text-teal mb-2">15+</div>
							<div className="text-sm text-gray-600">Industry Awards</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold gradient-text-orange mb-2">100+</div>
							<div className="text-sm text-gray-600">Happy Clients</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold gradient-text-teal mb-2">5★</div>
							<div className="text-sm text-gray-600">Average Rating</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes scroll-horizontal {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-scroll-horizontal {
					animation: scroll-horizontal 30s linear infinite;
				}
			`}</style>
		</section>
	);
}

