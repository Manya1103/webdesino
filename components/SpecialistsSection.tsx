"use client";

import { useState } from "react";

const specialists = [
	{ name: "Rajeev", role: "Lead Developer", color: "from-orange to-teal" },
	{ name: "Camille", role: "Design Expert", color: "from-teal to-orange" },
	{ name: "James", role: "SEO Specialist", color: "from-orange/80 to-teal/80" },
	{ name: "Priya", role: "Content Writer", color: "from-teal/80 to-orange/80" },
	{ name: "Amit", role: "Digital Marketer", color: "from-orange to-teal" },
	{ name: "Sarah", role: "UI/UX Designer", color: "from-teal to-orange" },
];

export default function SpecialistsSection() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<section className="py-16 lg:py-24 bg-gradient-to-br from-white via-cream/20 to-white relative overflow-hidden">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl animate-float" />
				<div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header with animated stats */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-4 mb-6 animate-scale-in">
							<div className="w-16 h-1 bg-gradient-orange rounded-full" />
							<span className="text-sm font-bold text-orange uppercase tracking-wider">
								Our Team
							</span>
							<div className="w-16 h-1 bg-gradient-teal rounded-full" />
						</div>

						<h2 className="text-4xl lg:text-6xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
							<span className="gradient-text">20k+ Specialists</span>
						</h2>

						<p className="text-xl lg:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
							Empowering your business with expert talent
						</p>

						{/* Stats row */}
						<div className="flex justify-center gap-8 flex-wrap mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
							<div className="text-center">
								<div className="text-3xl lg:text-5xl font-bold gradient-text-orange mb-2">
									100+
								</div>
								<div className="text-gray-600 font-medium">
									Projects Completed
								</div>
							</div>
							<div className="w-px bg-gray-300" />
							<div className="text-center">
								<div className="text-3xl lg:text-5xl font-bold gradient-text-teal mb-2">
									₹6.3 Cr+
								</div>
								<div className="text-gray-600 font-medium">
									Sales Generated
								</div>
							</div>
							<div className="w-px bg-gray-300" />
							<div className="text-center">
								<div className="text-3xl lg:text-5xl font-bold gradient-text-orange mb-2">
									50+
								</div>
								<div className="text-gray-600 font-medium">
									Happy Clients
								</div>
							</div>
						</div>
					</div>

					{/* Featured Specialists Grid */}
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
						{specialists.map((specialist, idx) => (
							<div
								key={idx}
								className="group relative p-6 glass-strong rounded-3xl hover-lift cursor-pointer transition-all duration-500 animate-scale-in"
								style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
								onMouseEnter={() => setHoveredCard(idx)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								{/* Animated gradient background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${specialist.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
								/>

								<div className="relative z-10">
									{/* Avatar */}
									<div
										className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${specialist.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
									>
										{specialist.name[0]}
									</div>

									{/* Info */}
									<h3 className="text-xl font-bold text-center text-gray-800 mb-1 group-hover:text-orange transition-colors">
										{specialist.name}
									</h3>
									<p className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors">
										{specialist.role}
									</p>

									{/* Status indicator */}
									<div className="mt-4 flex items-center justify-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow" />
										<span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
											Available Now
										</span>
									</div>
								</div>

								{/* Corner decoration */}
								<div className="absolute top-3 right-3 w-3 h-3 bg-orange rounded-full opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity" />
							</div>
						))}
					</div>

					{/* Team Grid - Smaller avatars */}
					<div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
						{Array.from({ length: 24 }).map((_, idx) => (
							<div
								key={idx}
								className="aspect-square rounded-full bg-gradient-to-br from-orange/20 to-teal/20 flex items-center justify-center overflow-hidden hover:scale-110 hover-lift transition-all duration-300 cursor-pointer glass"
								style={{ animationDelay: `${1.2 + idx * 0.02}s` }}
							>
								<div
									className={`w-full h-full bg-gradient-to-br ${
										idx % 2 === 0 ? "from-orange to-teal" : "from-teal to-orange"
									} opacity-40`}
								/>
								<div className="absolute text-2xl">👤</div>
							</div>
						))}
					</div>

					{/* CTA */}
					<div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "1.4s" }}>
						<p className="text-gray-600 mb-4">
							Trusted by businesses across Delhi NCR for professional web development and digital marketing solutions
						</p>
						<button className="px-8 py-4 bg-gradient-orange text-white rounded-full font-semibold hover-lift hover-glow transition-all duration-300 transform hover:scale-105">
							Join Our Success Stories
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

