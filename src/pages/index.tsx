import {Box, Button, Container, TextField, Typography} from "@mui/material";
import Head from "next/head";
import {useForm} from "react-hook-form";

export default function Home() {
	const {register, handleSubmit} = useForm({});

	return (
		<>
			<Head>
				<title>React Hook Form</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container sx={{marginTop: 5}}>
				<form onSubmit={handleSubmit((data) => console.log(data))}>
					<Typography variant="h4" sx={{mb: 4}}>
						Agregar nuevo ingrediente
          </Typography>
          
					<Box>
						<TextField
							id="outlined-basic"
							label="Ingrediente"
							variant="outlined"
							{...register(`ingrediente`)}
							className="input"
							sx={{
								width: 1,
								my: 2,
								borderRadius: 1,
							}}
						/>
						<Button
							variant="outlined"
							className="button"
							sx={{width: 1, mt: 4, borderRadius: 1}}
						>
							Eliminar
						</Button>
					</Box>

					<Button
						variant="contained"
						className="button"
						sx={{width: 1, mt: 4, borderRadius: 1}}
					>
						Agregar ingrediente
					</Button>

					<Button
						variant="contained"
						type="submit"
						className="button"
						sx={{width: 1, mt: 4, borderRadius: 1}}
					>
						Guardar
					</Button>
				</form>
			</Container>
		</>
	);
}
