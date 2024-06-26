import Pizzalogo from "../assets/images/pizza1.png";

function Navbar() {
	return (
		<nav className="flex items-center justify-around h-16 text-[#6B72200] font-mono border-none shadow-md">
			<div className="flex items-center justify-center">
				<p>Pizza App</p>
				<img
					src={Pizzalogo}
					alt="Pizza logo"
				/>
			</div>
			<div className="hidden md:block">
				<ul className="flex gap-4">
					<li className="hover:text-[#FF9110]">
						{" "}
						<p>Menu </p>
					</li>
					<li className="hover:text-[#FF9110]">
						{" "}
						<p>Services </p>
					</li>
					<li className="hover:text-[#FF9110]"> About </li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
