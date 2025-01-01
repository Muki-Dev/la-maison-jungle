import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		bestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15,
		description: "Le Monstera, avec ses feuilles perforées uniques, est une plante iconique qui apporte une touche tropicale à votre intérieur. Parfaite pour les amoureux de plantes exotiques."
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16,
		description: "Avec ses grandes feuilles vert foncé, le Ficus Lyrata est l'emblème de l'élégance. Idéal pour ajouter un charme moderne à votre décoration."
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		description: "Facile à entretenir, le Pothos argenté est apprécié pour ses feuilles délicatement tachetées de blanc et d'argent, parfait pour les débutants."
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 20,
		description: "La Calathea se distingue par ses motifs étonnants et ses feuilles vibrantes. Elle ajoute une touche artistique et apaisante à n'importe quelle pièce."
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25,
		description: "L'olivier, symbole de paix et de longévité."
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
		description: "Le cactus, avec sa silhouette robuste et son entretien minimal, est l'allié idéal pour les amateurs de plantes peu exigeantes."
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		description: "Le basilique, avec son parfum délicieux, est parfait pour les amateurs de cuisine. Cultivez-le pour des plats italiens savoureux à portée de main."
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		description: "Les succulentes sont des championnes de la résilience. Avec leurs formes variées et leur entretien facile, elles égayent tous les espaces."
	},
	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		description: "La menthe, fraîche et parfumée, est idéale pour agrémenter vos boissons et plats. Facile à cultiver, elle trouvera sa place dans votre cuisine."
	}
]
