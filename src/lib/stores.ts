import { readable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";
import { browser } from "$app/environment";

export const depts = readable(
	[
		["AIP", "Academic Internship Program"],
		["AASM", "African American Studies Minor"],
		["AWP", "Analytical Writing Program"],
		["ANTH", "Anthropology"],
		["AUDL", "Audiology"],
		["BIOI", "Bioinformatics"],
		["BIOL", "Biological Sciences, School of"],
		["BIOM", "Biomedical Sciences"],
		["CHEM", "Chemistry and Biochemistry"],
		["CHIN", "Chinese Studies"],
		["CLAS", "Classical Studies"],
		["CCS", "Climate Change Studies"],
		["CSP", "Climate Science and Policy"],
		["CLIN", "Clinical Psychology"],
		["CLRE", "Clinical Research"],
		["COGS", "Cognitive Science"],
		["COMM", "Communication"],
		["CSS", "Computational Social Science"],
		["CONT", "Contemporary Issues"],
		["CGS", "Critical Gender Studies"],
		["CAT", "Culture, Art, and Technology"],
		["DSC", "Data Science"],
		["DSGN", "Design"],
		["DOC", "Dimensions of Culture"],
		["ECON", "Economics"],
		["EDS", "Education Studies Program"],
		["ERC", "Eleanor Roosevelt College"],
		["ENG", "Engineering, Jacobs School of"],
		["BENG", "Bioengineering"],
		["CSE", "Computer Science and Engineering"],
		["ECE", "Electrical and Computer Engineering"],
		["MAS", "Master of Advanced Studies in Engineering"],
		["MAE", "Mechanical and Aerospace Engineering"],
		["MAE-AESE", "Mechanical and Aerospace Engineering"],
		["NANO", "NanoEngineering"],
		["SE", "Structural Engineering"],
		["ENVR", "Environmental Studies"],
		["ESYS", "Environmental Systems"],
		["ETHN", "Ethnic Studies"],
		["FILM", "Film Studies"],
		["GLBH", "Global Health Program"],
		["GPS", "School of Global Policy and Strategy"],
		["GSS", "Global South Studies"],
		["LHCO", "Health Care\u2014Leadership of Healthcare Organizations"],
		["HIST", "History"],
		["HDS", "Human Developmental Sciences Program"],
		["HMNR", "Human Rights and Migration Minor"],
		["HUM", "Humanities"],
		["INTL", "International Studies"],
		["JAPN", "Japanese Studies"],
		["JWSP", "Jewish Studies"],
		["LATI", "Latin American Studies"],
		["LAWS", "Law and Society"],
		["LING", "Linguistics"],
		["LIT", "Literature"],
		["MMW", "The Making of the Modern World"],
		["MGT", "Rady School of Management"],
		["MBC", "Marine Biodiversity and Conservation"],
		["MATS", "Materials Science and Engineering Program"],
		["MATH", "Mathematics"],
		["MSED", "Mathematics and Science Education"],
		["MCWP", "Muir College"],
		["MUS", "Music"],
		["NEU", "Neurosciences"],
		["PHIL", "Philosophy"],
		["PHYS", "Physics"],
		["POLI", "Political Science"],
		["PSYC", "Psychology"],
		["FMPH", "Public Health"],
		["RELI", "Religion, Study of"],
		["REV", "Revelle College"],
		["SCIS", "Science Studies"],
		["SIO", "Scripps Institution of Oceanography"],
		["SEV", "Seventh College"],
		["SXTH", "Sixth College"],
		["SOC", "Sociology"],
		["SYN", "Synthesis Program"],
		["THEA", "Theatre and Dance"],
		["TMC", "Thurgood Marshall College"],
		["USP", "Urban Studies and Planning"],
		["VIS", "Visual Arts"],
		["WARR", "Warren College"]
	].sort()
);

export const recentDepts = browser ? persisted<number[]>("recentDepts", []) : undefined;
