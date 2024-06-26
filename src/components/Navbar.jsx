import { useDispatch, useSelector } from "react-redux";
import Pizzalogo from "../assets/images/pizza1.png";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";

function Navbar() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	async function handleLogout(e) {
		e.preventDefault();
		dispatch(logout());
	}
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
			<div>
				<ul>
					<li className="hover:text-[#FF9110]">
						{isLoggedIn ? (
							<Link onClick={handleLogout}>Logout</Link>
						) : (
							<Link to={"/auth/login"}>Login</Link>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
