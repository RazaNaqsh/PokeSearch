import { useEffect, useState } from "react";
import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
	const [search, setSearch] = useState(null);

	const { data, error, isLoading } = useGetPokemonByNameQuery(
		search || "bulbasaur"
	);
	console.log(data);
	const searchPokemon = (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
		setSearch(e.target[0].value);
		e.target.reset();
	};

	return (
		<div className="app">
			{error ? (
				<>Error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<h1>PokeSearch</h1>
					<form onSubmit={searchPokemon}>
						<label htmlFor="">
							Search A Pokemon
							<input type="text" />
						</label>
						<button>Search</button>
					</form>
					<h3>{data.species.name}</h3>
					<img
						src={data.sprites.front_default}
						alt=""
					/>
				</>
			) : null}
		</div>
	);
}

export default App;
