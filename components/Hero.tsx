"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { ArrowRight, Search, Award, Briefcase, BarChart, Store, Code, Star } from "lucide-react";

// Real Client Brands & Trusted Platforms
const trustedBrands = [
	{ name: "BookBuzzz", category: "E-commerce", sales: "₹25L+ Monthly" },
	{ name: "LuckyNutra", category: "Health & Wellness", sales: "₹10L+ Monthly" },
	{ name: "BuyKhariBauli", category: "E-commerce", sales: "₹6L+ Monthly" },
	{ name: "Meritshot", category: "Education", achievement: "Global Rankings" },
	{ name: "Land Sathi", category: "Real Estate", achievement: "High Traffic" },
	{ name: "Mentok Healthcare", category: "Healthcare", achievement: "Online Growth" },
	{ name: "CS Hub", category: "Corporate", achievement: "Lead Generation" },
	{ name: "Nourish Mantra", category: "Fashion", achievement: "Brand Visibility" },
];

// Certification Badges
const certifications = [
	{ name: "Google Partner", icon: <Search /> },
	{ name: "WordPress Certified", icon: <Code /> },
	{ name: "Shopify Partner", icon: <Store /> },
	{ name: "SEMRush Certified", icon: <BarChart /> },
	{ name: "DesignRush Accredited", icon: <Award /> },
];

// Animated words that rotate - Web Development focused
const rotatingWords = [
	"Website Design",
	"SEO Services",
	"Digital Marketing",
	"E-commerce",
	"Mobile Apps",
	"Branding",
];

export default function Hero() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
		}
	};

	return (
		<section
			className="relative bg-gradient-to-br from-cream via-white to-cream py-16 lg:py-24 overflow-hidden"
			itemScope
			itemType="https://schema.org/Organization"
		>
			{/* Floating background elements */}
			<div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-float" />
			<div
				className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float"
				style={{ animationDelay: "1s" }}
			/>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Left Content */}
					<div className="space-y-8" itemScope itemType="https://schema.org/Service">
						{/* Rotating words ticker */}
						<div className="overflow-hidden h-12 mb-4">
							<div className="flex gap-8 animate-scroll-horizontal">
								{[...rotatingWords, ...rotatingWords, ...rotatingWords].map((word, idx) => (
									<div key={idx} className="flex items-center gap-3 whitespace-nowrap">
										<span className="text-lg font-bold text-orange">{word}</span>
										<Star className="text-teal" />
									</div>
								))}
							</div>
						</div>

						<h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
							<span
								className="block text-teal animate-slide-up"
								style={{ animationDelay: "0.1s" }}
							>
								Stunning Websites By
							</span>
							<span
								className="block gradient-text animate-slide-up"
								style={{ animationDelay: "0.2s" }}
							>
								Top Web Development
							</span>
							<span
								className="block gradient-text animate-slide-up"
								style={{ animationDelay: "0.3s" }}
							>
								Agency
							</span>
						</h1>

						<div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 bg-gradient-orange text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift"
								aria-label="Browse Freelancers - Web Development Agency Delhi"
							>
								Start Your Project
							</Link>
							<Link
								href="/portfolio"
								className="inline-flex items-center gap-2 border-2 border-teal text-teal px-8 py-4 rounded-full text-base font-semibold hover:bg-teal hover:text-white transition-all duration-300 transform hover:scale-105"
								aria-label="See Past Projects"
							>
								See Our Work
								<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>

						{/* Search bar with glass effect */}
						<form
							onSubmit={handleSearch}
							className="relative mt-8 animate-fade-in"
							style={{ animationDelay: "0.6s" }}
						>
							<div className="relative glass-strong rounded-full p-1">
								<input
									type="text"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									placeholder="Search for web design, SEO, or services in Delhi"
									className="w-full px-6 py-4 pr-12 rounded-full bg-white/80 backdrop-blur border-none focus:outline-none focus:ring-2 focus:ring-orange/50 text-base transition-all"
									aria-label="Search for services in Delhi"
								/>
								<button
									type="submit"
									className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-orange text-white rounded-full hover:bg-orange/90 transition-all hover:scale-110"
									aria-label="Search"
								>
									<Search size={20} />
								</button>
							</div>
						</form>

						{/* Team avatars */}
						<div
							className="flex items-center gap-4 animate-fade-in"
							style={{ animationDelay: "0.7s" }}
						>
							<div className="flex -space-x-3">
								{[1, 2, 3].map((_, idx) => (
									<div
										key={idx}
										className="w-12 h-12 rounded-full bg-gradient-orange border-4 border-white hover:scale-110 transition-transform cursor-pointer hover-lift"
										style={{ animationDelay: `${idx * 0.1}s` }}
									/>
								))}
							</div>
							<div className="text-sm">
								<p className="font-bold text-teal">20k+ Specialists</p>
								<p className="text-gray-600">Ready to help you succeed</p>
							</div>
						</div>
					</div>

					{/* Right - Client Success Stories & Certifications */}
					<div className="relative">
						<div className="flex items-center justify-between mb-4 animate-fade-in">
							<div>
								<h3 className="text-lg font-bold text-teal mb-1">
									Trusted By 50+ Businesses
								</h3>
								<p className="text-sm text-gray-600">Generating ₹6.3 Cr+ in Sales</p>
							</div>
						</div>

						{/* Client Brands Ticker */}
						<div className="relative h-[380px] overflow-hidden rounded-2xl bg-gradient-to-br from-white to-cream/50 glass-strong p-6 shadow-xl mb-6">
							<div className="absolute inset-0 flex flex-col gap-4 animate-scroll-vertical p-6">
								{[...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, idx) => (
									<div
										key={idx}
										className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 hover-lift transition-all cursor-pointer hover:scale-105 border border-orange/10"
									>
										<div className="flex items-start justify-between gap-3">
											<div className="flex-1">
												<h4 className="font-bold text-teal text-base mb-1">
													{brand.name}
												</h4>
												<p className="text-xs text-gray-500 mb-2">
													{brand.category}
												</p>
												{brand.sales && (
													<div className="flex items-center gap-1">
														<span className="text-xs font-semibold text-orange">
															💰 {brand.sales}
														</span>
													</div>
												)}
												{brand.achievement && (
													<div className="flex items-center gap-1">
														<span className="text-xs font-semibold text-teal">
															⭐ {brand.achievement}
														</span>
													</div>
												)}
											</div>
											<div className="w-2 h-2 bg-gradient-orange rounded-full animate-pulse-glow flex-shrink-0 mt-1" />
										</div>
									</div>
								))}
							</div>
							<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none z-10" />
						</div>

						{/* Certifications Strip */}
						<div
							className="glass-strong rounded-xl p-4 animate-fade-in"
							style={{ animationDelay: "0.8s" }}
						>
							<p className="text-xs font-semibold text-gray-600 mb-3 text-center">
								Certified & Recognized By
							</p>
							<div className="grid grid-cols-5 gap-2">
								{certifications.map((cert, idx) => (
									<div
										key={idx}
										className="text-center hover:scale-110 transition-transform cursor-pointer"
										title={cert.name}
									>
										<div
											key={idx}
											className="flex items-center gap-3 p-3 glass-subtle rounded-full"
										>
											{cert.icon}
											<span className="text-sm font-medium text-teal">
												{cert.name}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes scroll-vertical {
					0% {
						transform: translateY(0);
					}
					100% {
						transform: translateY(-33.333%);
					}
				}
				@keyframes scroll-horizontal {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-33.333%);
					}
				}
				.animate-scroll-vertical {
					animation: scroll-vertical 20s linear infinite;
				}
				.animate-scroll-horizontal {
					animation: scroll-horizontal 15s linear infinite;
				}
			`}</style>
		</section>
	);
}

